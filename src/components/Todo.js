import React from 'react';

const Todo = ({text, todos, todo, setTodos, }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    const showEditField = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, edit: !item.edit
                }
            }
            return item;
        }))
    }
    const editRecord = (e) =>{
        e.preventDefault();
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, text: e.target.value
                }
            }
            return item;
        }))
    }

    return (
        <>
        <div className='todo'>
            <li className={`todo-item ${todo.completed && 'completed'}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button className='edit-btn' onClick={showEditField}><i className='fas fa-pen'></i></button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
            {todo.edit &&
            <form>
                <input type="text" placeholder='please edit your record' onChange={editRecord}/>
                <button className="todo-button" onClick={showEditField}>
                    <i className="fas fa-wrench"></i>
                </button>
                <button className="todo-button" onClick={showEditField}>
                    <i className="far fa-window-close"></i>
                </button>
            </form>
            }
        </>
    );
};

export default Todo;