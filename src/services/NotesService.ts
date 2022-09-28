import NoteRepository from "../repositories/NoteRepository";
import { Request, Response, NextFunction } from "express";
import { NewNoteSchema, PatchNoteSchema } from "../Validations/NoteValidation";

class NotesService {
  public getAll(req: Request, res: Response) {
    try {
      return res.json(NoteRepository.getAll());
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  public getOne(req: Request, res: Response) {
    try {
      const note = NoteRepository.getOne(+req.params.id);
      return res.json(note);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  public async createOne(req: Request, res: Response, next: NextFunction) {
    try {
      await NewNoteSchema.validate(req.body, {
        abortEarly: false,
        strict: true,
      });

      const newNote = await NoteRepository.createOne(req.body);
      return res.json(newNote);
    } catch (e: any) {
      return res.status(500).json(e.errors || e.message);
    }
  }

  public deleteOne(req: Request, res: Response) {
    try {
      let allNotes = NoteRepository.deleteOne(+req.params.id);
      return res.json(allNotes);
    } catch (error: any) {
      return res.json(error.message);
    }
  }

  public async updateOne(req: Request, res: Response) {
    try {
      await PatchNoteSchema.validate(req.body, {
        abortEarly: false,
        strict: true,
      });

      const updatedNote = await NoteRepository.updateOne(
        +req.params.id,
        req.body
      );
      return res.json(updatedNote);
    } catch (e: any) {
      return res.status(500).json(e.errors || e.message);
    }
  }

  public getStats(req: Request, res: Response) {
    try {
      const stats = NoteRepository.getStats();
      return res.json(stats);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}

export default new NotesService();
