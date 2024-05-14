import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IoAddCircle } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";


function App() {
  const [task, setTask] = useState("")
  const [tasklist, setTasklist] = useState([])
  const [decorationlist,setDecorationlist]=useState([])
  
  const add=()=>{
    setTasklist([...tasklist,task])
    // console.log(tasklist)
    setTask("")
    setDecorationlist([...decorationlist,false])
  }
  const remove=(index)=>{
    // tasklist.splice(index,1)
    // setTasklist(tasklist)
  const updatedTasklist = [...tasklist];
  updatedTasklist.splice(index, 1);
  setTasklist(updatedTasklist);
//React performs shallow comparisons and the second method ensures immutability which is better for React State Management

  const updatedDecorationlist=[...decorationlist]
  updatedDecorationlist.splice(index,1)
  setDecorationlist(updatedDecorationlist);
  }

  const togglee=(index)=>{
    const newDecorationList=[...decorationlist];
    newDecorationList[index]=!newDecorationList[index];
    setDecorationlist(newDecorationList)

    //We cannot do it directly like that

    // decorationlist=!decorationlist

    //as it does not follow proper React State Management
  }
  return (
    <>
      <div className="container border border-primary">
        <div className="box">
        <div className="row">
          <div className="col-6">
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Enter the todo item'/>
            <button>Add<IoAddCircle onClick={add}/></button>


          </div>
        </div>

        
            {tasklist.map((item,index)=>{
              return(
                <div className="row" key={index}>
                <div className='col-6 d-flex'  onClick={()=>togglee(index)} >
               <p style={{textDecoration: decorationlist[index]?"line-through":"none" }}>{item}</p> 
               <MdDeleteForever onClick={()=> remove(index) }/>
               </div>
               </div>
               )
            }
            )
           }
       
       </div>
      </div>
    </>
  )
}

export default App
