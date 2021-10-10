import React , {useState} from 'react'
import Todo from './Todo'

const ToDoList = ({ todos ,setTodos,filteredTodos}) => {
    const [show ,setShow] = useState (false);
  
    return (
        <div className='todo-container'>
          <ul className='todo-list'>
          {filteredTodos.map((todo)=>  (
              <Todo
                text={todo.text}
                key={todo.id} 
                todos={todos} 
                setTodos={setTodos}
                todo={todo}
                show={show}
                setShow={setShow} />
          ))}
           </ul> 
        </div>
    )
}

export default ToDoList
