const Task = require('../model/taskSchema');


const createTask = async (req,res)=>{

    /* need to pass the data using req */
    const {title}= await req.body
    
   
    try{
       const  task =  new Task({
             title:title,    
             isDone:false

        })
        await task.save();
        res.status(201).json(task)

    }catch(error){
        console.error(error.message)
    }

}
const getoneTask = async(req,res)=>{
    try{
        const {id} = req.param
    const Tasks = await Task.findById(id);
    res.status(201).json(Tasks);

    }catch{(error)=>console.error(error)}
}
const updateTask = async(req,res)=>{
    const {id}=req.param;
    const data =req.body;
    const Tasks =await Task.findByIdAndUpdate(id,{...data});
    res.status(200).json(Tasks)
}

const getallTask = async(req,res)=>{
    const Tasks = await Task.find();
    res.status(201).json(Tasks);
}
const deleteTask =async(req,res)=>{
    const {id} =req.param;
    await Task.findByIdAndDelete(id);
}

module.exports = {createTask,getallTask,getoneTask,updateTask,deleteTask}