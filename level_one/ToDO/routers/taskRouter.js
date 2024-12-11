const express = require('express');
const router = express.Router();
const {ObjectId} = require('mongoose')
const Task = require('../models/taskmodel')
const { body, validationResult } = require('express-validator');





router.get('/create', (req,res) => {
    res.render('create')
})

router.post('/', (req,res) => {
    let task = new Task(req.body)
    task.save()
    .then ((result) => {
        if(!result){
            res.status(500).json({err: "there is a problem for saving the document"})
        }
        else{
            res.redirect('/')
        }
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error adding task");
    });
})

router.get('/', (req, res) => {
    Task
    .find()
    .then ((result) => {
        if(!result){
            res.status(500).json({err: "there is a problem for finding the documents"})
        }
        else{
            res.render('index', { data : result})
        }
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving tasks");
    });
})

router.get('/:id/details', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

   let id = req.params.id;
   if(ObjectId.isValid(id)){
        Task
        .findById(id)
        .then((task) => {
            if(!task){
                res.status(400).json({err: "Task not found"})
            }
            else{
                res.render('details',{task})
            }

        })
        .catch(err => console.log(err))
    }else{
        res.status(400).json({err: "not valid id"})
    }

})


router.delete('/delete/:id', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let id = req.params.id;
    if(ObjectId.isValid(id)){
        Task
        .findByIdAndDelete(id)
        .then((result) => {
            if(!result){
                res.status(400).json({err: "Task not found"})
            }
            else{
                res.json({redirect : '/'})
            }
        })
        .catch(err => console.log(err))
    }
    else{
        res.status(400).json({err: "not valid id"})
    }

})

module.exports = router;