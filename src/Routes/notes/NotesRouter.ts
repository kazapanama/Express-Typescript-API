import express from "express";

import NotesController from '../../Controllers/NotesController'



const NotesRouter = express.Router();



NotesRouter.post('/',NotesController.createOne)
NotesRouter.get('/:id',NotesController.getOne)


NotesRouter.get('/stats',(req,res)=>{
    //add stats function
    res.json('TUT POKA NICHEGO NETU')
})


           
        



export default NotesRouter;
