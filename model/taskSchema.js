const mongoose = require('mongoose');
const {Schema,model} = mongoose;


const taskSchema = new Schema ({
    title:String,
    isdone:Boolean
    }
    
)


const Task = model('Task',taskSchema);
module.exports = Task 


