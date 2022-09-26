import { Note } from "../db/notes";
import NoteService from '../Services/NoteService'
import {Request,Response} from 'express'


class NotesController {
 public getOne(req:Request,res:Response){
    try {
        const note =  NoteService.getOne(+req.params.id);
        return res.json(note);
    } catch (e) {
        res.status(500).json(e)
    }}

    createOne(req:Request,res:Response){
        try {
          let allNotes = NoteService.createOne(req.body);
            return res.json(allNotes);
        } catch (e) {
            res.status(500).json(e)
        }
 }
   
}

export default new NotesController()

// public findTaskById(id: number) {
//     const task = data.find((item) => item.id === id);

//     if (task) {
//       return task;
//     } else {
//       return null;
//     }
//   }