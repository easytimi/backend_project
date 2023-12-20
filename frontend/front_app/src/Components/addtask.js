import React from 'react';
import {useDispatch} from 'react-redux';
import {handleAdd} from '../features/todo/todoslice';
import {useState} from 'react'
import axios from 'axios'


const AddTask = () => {
    const dispatch= useDispatch();
    const [desc,setDesc]= useState('')
    const [Done,setDone]= useState('false')
    const onSubmit= async() =>{dispatch(handleAdd({id:Date.now(),desc,Done}))
                       await axios.post("http://127.0.0.1:5000/api/task",{title:desc,Done:Done})  
              setDesc('')
              setDone(false)
                         }

    return(
        <div className="container">
            <input type ="text"  value={desc} placeholder="title" onChange={(e)=>setDesc(e.target.value)} />
            {/* create another input field for isdone */}
            <input type ="text"  value={desc} placeholder="true or false" onChange={(e)=>setisDone(e.target.value)} />
            <div><button className="btn-add" onClick={onSubmit} >CREATETASK</button></div>
        </div>
    )
}

export default AddTask;