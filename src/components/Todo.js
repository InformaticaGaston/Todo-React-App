import React , {useState} from 'react'

const Todo = ({text ,setTodos,todos, todo } ) => {
    const [show ,setShow] = useState (false);
   

    
    const deleteHandler = () => {
        setTodos(todos.filter ((el) => el.id !== todo.id));
    }
    const editText = (e) => {
        e.preventDefault();
        todo.text=(e.target.value);
      };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, completed : !item.completed
                }
             }
             return item ;
        }))
       
      
        
        

    
    }

    return (
       <div className="todo">
           
           <li className={`todo-item ${todo.completed ? 'completed' : ''}`} >{text}</li>
           <button className='complete-btn' onClick={completeHandler}>
           <i className="fas fa-check"></i>
           </button>
           <button onClick={deleteHandler} className='trash-btn'>
           <i className="fas fa-trash"></i>
           </button>
           <button className="edit-btn" onClick={()=> setShow(!show)}  >
               <i class="fas fa-edit"></i>
           </button>
          {show &&  !todo.completed ? <input type='text' className='edit-input' onChange={editText}/> : null}
           
       </div>
    )
}

export default Todo
