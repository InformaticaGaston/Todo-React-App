import React , {useState, useEffect} from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";


function App() {
    
  const [inputText, setInputText] = useState ('') ;
  const [todos, setTodos] = useState ([]) ;
  const [status ,setStatus] =useState ('all') ;
  const [filteredTodos , setFiltredTodos] = useState ([]) ;

  useEffect(() =>{
    filterHandler();
  },[todos,status])


  const filterHandler =() => {
    switch (status)  {
      case 'completed' : 
        setFiltredTodos(todos.filter(todo => todo.completed===true))
        break;
        case 'uncompleted' : 
        setFiltredTodos(todos.filter(todo => todo.completed===false))
        break;
         default :setFiltredTodos(todos);
        break;
        
    }
  }
  return (
    <div className="todo-app">
       <h1 id='tit'>Ghassen's To Do List</h1>
       <Form inputText={inputText} 
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
          
          />
       <ToDoList todos={todos}
        setTodos={setTodos} 
        inputText={inputText}
        filteredTodos={filteredTodos}
       />
     </div>
  );
}

export default App;
