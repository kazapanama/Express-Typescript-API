import { Note } from "../db/notes";
import NoteService from "../Services/NoteService";
import { Request, Response, NextFunction} from "express";
import {NoteSchema, validateNote} from '../Validations/NoteValidation'

class NotesController {
  public getAll(req: Request, res: Response) {
    try {
      return res.json(NoteService.getAll());
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  public getOne(req: Request, res: Response) {
    try {
      const note = NoteService.getOne(+req.params.id);
      return res.json(note);
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  }

 public createOne(req: Request, res: Response) {
    try {
      let note = NoteService.createOne(req.body);
      return res.json(note);
    } catch (error:any) {
      return res.status(500).json(error.message);
    }
  }

  public deleteOne(req:Request,res:Response){
    try{
        let allNotes = NoteService.deleteOne(+req.params.id)
        return res.json(allNotes)
    } catch(e:any){
        return res.json(e.message)
    }
  }

  public updateOne(req:Request,res:Response){
    try{
        const updatedNote = NoteService.updateOne(+req.params.id,req.body)
        res.json(updatedNote)
    } catch(error:any){
        res.status(500).json(error.message)
    }
  }

  public getStats(req:Request,res:Response){
    try{
     const stats = NoteService.getStats()
     res.status(200).json(stats)
    }catch(error:any){
      res.status(500).json(error.message)
    }
  }
}

export default new NotesController();

