import './App.css';
import  ListTask from "./Components/Listtask"
import AddTask from "./Components/addtask"
import DisplayTask from "./Components/displaytask"
import {Routes,Route, Link} from "react-router-dom"
//import Task from "./Components/Task"

function App() {
  return (
    <div className="App">
     <div className="container">
      <div>
        <ul>
          <li><Link to='/getalltask'>GetAllTask</Link></li>
        </ul>
        </div>
     <h1>TASK </h1>
     <Routes>
       <Route path='/' element={<>
       <div>
       <DisplayTask/>
       <AddTask/>
       </div>

       </>}/>
          
      <Route path='getalltask' element={<ListTask/>}/>
       <Route/>   
      </Routes>
      
      
      
     </div>
      

     
    </div>
  );
}

export default App;
