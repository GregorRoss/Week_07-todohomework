import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {

  // setting the Data Object
  const[todoItems, setTodoItems] = useState(
  [
    { name: "Python Project week 5 ", priority: "high" },
    { name: "JavaScript Project week 8 ", priority: "low" },
    { name: "Cornerstone Project week 14 ", priority: "high" }
  ]
)


// const handleClearSelection = () => {
//   setSelectedOption(null);
// };


// sorting the todo list with priority to the top
todoItems.sort( (a,b) => a.priority > b.priority ? 1 : -1)
// setting the todo items to be in an li 
const todoItemNodes = todoItems.map ((todoitem, index) =>{
  return(                                             // set className to dynamically change to specific balue of priority
  <li key={(index)} className ={todoitem.priority}>   
      <span>{todoitem.name}</span>
      <span>{todoitem.priority}</span>
    </li>
  )
})


const [newTodoItem, setNewTodoItem] = useState("")
const [newTodoPriority, setNewTodoPriority] = useState("")

// Function to handle the text imput and call the new item function
const handleTodoItemInput = (event) => {
  setNewTodoItem(event.target.value)
}

const handleTodoPriority = (event) => {
  setNewTodoPriority(event.target.value)
}

const saveNewTodoItem = (event) =>{
  event.preventDefault()
  const copyTodoItems = [...todoItems]
  copyTodoItems.push({name: newTodoItem,  priority: newTodoPriority})
  setTodoItems(copyTodoItems)
  setNewTodoItem("")
  setNewTodoPriority("")
}





return (
  <div className="App">
      <h1>ToDo List</h1>

      <form onSubmit={saveNewTodoItem}>
          <label htmlFor="new-todoitem"> Add a new todo item: </label>
          <input id = "new-todoitem" type="text" value={newTodoItem} onChange={handleTodoItemInput}/>
          <label htmlFor="new-priority"> High: </label>
          <input id = "new-priority-high" type="radio" name="new-priority" value="high" onChange={handleTodoPriority}/>
          <label htmlFor="new-priority"> Low: </label>
          <input id = "new-priority-low" type="radio" name="new-priority"value="low" onChange={handleTodoPriority}/>
          <input type = "submit" value="new todo item"/>

      </form>

    <ul>
      {todoItemNodes}
    </ul>

    </div>
  );
}

export default App;
