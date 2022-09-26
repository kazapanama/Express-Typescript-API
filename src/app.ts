import express from "express";
import NotesRouter from "./Routes/notes/NotesRouter";
const app = express();

// let data: Task[] = mockData;

app.use(express.json());

app.use('/notes',NotesRouter)



// app
//   .route("/notes")
//   // .get((req, res) => {
//   //   return res.json(data);
//   // })
//   .post((req, res) => {
//     data = [...data, req.body];
//     return res.json(data);
//   })
//   .all((req, res) => {
//     return res.json("No such method for this endpoint");
//   });

// app.route('/notes/:id')
// .get((req,res)=>{
//     const id = Number(req.params.id)
//     let task = findTaskById(id)
//     if (task){
//         res.json(task)
//     } else {
//         res.json('cannot find task by that id')
//     }

// })




app.listen(3000, () => console.log("listening on 3000"));
