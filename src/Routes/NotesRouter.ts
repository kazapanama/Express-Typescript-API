import express from "express";

import NotesController from "../Controllers/NotesController";
import { NoteSchema, validateNote } from "../Validations/NoteValidation";

const NotesRouter = express.Router();

NotesRouter.get("/", NotesController.getAll);
NotesRouter.post("/",validateNote(NoteSchema), NotesController.createOne);
NotesRouter.get("/stats",NotesController.getStats);
NotesRouter.get("/:id", NotesController.getOne);
NotesRouter.delete("/:id", NotesController.deleteOne);
NotesRouter.patch("/:id", NotesController.updateOne);


export default NotesRouter;
