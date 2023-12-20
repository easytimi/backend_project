import React from 'react';
import {useSelector} from 'react-redux';
import Task from "./Task"


const DisplayTask = ()=>{
    const beams = useSelector((state)=> state.todo.todoTask) ;
    let m =(beams.length)-1; 
    const beam =beams[m]; 
    return(
        <div>
              {/*<div>{beams.map(beam =>(<Task {...beam}/>) )}</div>*/}
              <div><Task {...beam}  /></div>
        </div>
    )
}

export default DisplayTask;