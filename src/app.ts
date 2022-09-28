import express from "express";
import NotesRouter from "./routes/NotesRouter";
const app = express();



app.use(express.json());

app.use('/notes',NotesRouter)


app.listen(3000, () => console.log("listening on 3000"));
