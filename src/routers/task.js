const express = require("express");
const Task = require("../models/task");
const User = require("../models/user")
const auth = require("../middleware/auth");

const router = new express.Router();

router.post("/tasks", auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  try {
    const taskCreated = await task.save();
    res.status(201).json(taskCreated);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Get /tasks?completed=true
// Get /tasks?limit=10&skip=20
// Get /tasks?sortBy=createdAt:desc

router.get("/tasks",auth, async (req, res) => {
  
      const match = {}
      const sort = {}
      if(req.query.completed){
        match.completed = req.query.completed === 'true'
      }
     if(req.query.sortBy){
       const parts = req.query.sortBy.split(":")
       sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
     }
  
  try{
       await req.user.populate({
         path : 'tasks',
         match,
         options : {
           limit : parseInt(req.query.limit),
           skip : parseInt(req.query.skip),
           sort : {
             completed : -1
           }
         } 
       })
     res.send(req.user.tasks);
   } catch (e) {
     res.status(500).json(e);
     console.log(e)
     
   }
  });


// router.get('/tasks',auth, async (req,res) => {
//    try{
//     //  const tasks = await Task.find()
//        await req.user.populate('tasks')
      
//      res.json(req.user.tasks)
//    }catch(e){
//      res.status(500).json(e)
//      console.log(e)
//    }
// })


router.get("/tasks/:id", auth , async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findOne({_id, owner: req.user._id });
    if (!task) {
      return res.status(404).json();
    }
    res.json(task);
  } catch (e) {
    res.status(500).json(e)
    // console.log(res.json(e));
  }
});

router.patch("/tasks/:id", auth , async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(404).json({ error: "Invalid updates!" });
  }

  try {
    const task = await Task.findOne({_id : req.params.id, owner : req.user._id})
   
    if (!task) {
      return res.status(404).json();
    }
    updates.forEach((update) => task[update] = req.body[update])
      await task.save()
    res.json(task);
  } catch (e) {
    res.status(400).json(e);
  }
});

router.delete("/tasks/:id",auth, async (req, res) => {
  const task = await Task.findOneAndDelete({_id: req.params.id, owner : req.user._id})
  try {
    if (!task) {
      res.status(404).json();
    }
    res.json(task);
  } catch (e) {
    res.status(400).json(e);
  }
});

module.exports = router;
