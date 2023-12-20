const express = require("express");
const cors = require ("cors");
require('dotenv').config();
const mongoose = require('mongoose');
const {createTask,getallTask,getoneTask,updateTask,deleteTask} = require ('./Controller/taskController');




const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/task")
 .then(console.log('database connected'))
 .catch((err)=>console.log('error connecting to database'));

 app.listen(5000,()=>{
   console.log("the app is listening on port 5000")
 });
 app.get('/',(req,res)=>{
  res.send("The app is listening on port 5000")
 })

 
// create new task
 app.post('/api/task',cors(),createTask);
 //get task
 app.get('/api/task',cors(),getallTask)
 //need to get one task
 app.get('/api/task/:id',cors(),getoneTask)
 //need to add new task
 //app.put('/task',cors(),newTask)
  //need to update task
 app.patch('/api/task/:id',cors(),updateTask)
  //need to delete task
  app.delete('/api/task/:id',cors(),deleteTask)
 //need to find task by id


