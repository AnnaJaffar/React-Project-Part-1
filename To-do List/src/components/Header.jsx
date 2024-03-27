import todoLogo from '/src/assets/todoLogo.png';
import React, {useState} from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';


export default function Header({handleAddTask}) {

    const [title, setTitle] = useState('');  
  
    function handleSubmit(event) {
      
      event.preventDefault();    
      if(!title)
      return  alert("Enter a task to create your todo list.")
      handleAddTask(title);
      setTitle('');       
           
    }
  
    function onChangeTitle(event) {
      setTitle(event.target.value);
    }
  
    return (
      <header className="flex flex-col items-center gap-4 px-2 py-2 m-1">    
        <img className= "w-40 h-40" src={todoLogo} />               
        <form onSubmit={handleSubmit} className="flex flex-grow justify-center gap-2">
          <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} className="border border-gray-300 rounded p-2 flex flex-grow h-10 w-full"/>
          <div><button className="flex flex-grow items-center bg-blue-500 text-white px-5 py-2 rounded-lg h-10">Create<AiOutlinePlusCircle className="ml-2" size={20}/></button></div>
        </form>
      </header>
    )
  }