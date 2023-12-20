import React from 'react';
import {useSelector} from 'react-redux';
import                    './todo.css'
import Task from "./Task"


const ListTask = () => {
    const beams = useSelector((state)=> state.todo.todoTask) 
    return(
        <div >
             <div className="pack">{beams.map(beam =>(<Task {...beam}/>) )}</div>
             <div>
                <div></div>
                <div></div>
             </div>
             </div>
    )
}
export default ListTask;