import React from 'react'


const Form = ({inputText ,setTodos,setInputText,todos,setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
        };
        const sumbmitTodoHandler =(e) =>  {
            e.preventDefault(e); 
            setTodos ([...todos ,
                {text: inputText,completed :false ,id : Math.random () *1000}]);
            setInputText ('');
        }
        const statusHandler = (e) => {
            setStatus(e.target.value);

        }
    return (
        <form>
            <input 
            type="text"
            placeholder='Add Here'
             className='todo-input'
              onChange={inputTextHandler} 
              value={inputText} />
            <button className='todo-button' onClick={sumbmitTodoHandler}>
            <i className='fas fa-plus-square'></i>
            </button>
            <div className="select">
                <select name="todos"  className="todo-filter" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form