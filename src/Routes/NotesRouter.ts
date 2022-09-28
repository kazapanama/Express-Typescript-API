import express from "express";

import NotesService from "../services/NotesService";

const NotesRouter = express.Router();

NotesRouter.get("/", NotesService.getAll);
NotesRouter.post("/", NotesService.createOne);
NotesRouter.get("/stats", NotesService.getStats);
NotesRouter.get("/:id", NotesService.getOne);
NotesRouter.delete("/:id", NotesService.deleteOne);
NotesRouter.patch("/:id", NotesService.updateOne);

export default NotesRouter;
