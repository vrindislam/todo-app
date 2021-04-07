import React from 'react';

const Todo = ({text, todos, todo, setTodos}) => {

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
        const editRecord = (e) => {
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
                    {todo.priority === '1' && <div className='priority green'/>}
                    {todo.priority === '2' && <div className='priority orange'/>}
                    {todo.priority === '3' && <div className='priority red'/>}
                    {!todo.edit ? <>
                            <li className={`todo-item ${todo.completed && 'completed'}`}>{text}</li>
                            <button onClick={completeHandler} className='complete-btn'>
                                <i className='fas fa-check'/>
                            </button>
                            <button className='edit-btn' onClick={showEditField}><i className='fas fa-pen'/></button>
                            <button onClick={deleteHandler} className='trash-btn'>
                                <i className='fas fa-trash'/>
                            </button>
                        </>
                        : ''}

                    {todo.edit &&
                    <form className='edit-form'>
                        <input value={todo.text} className='edit-field' type="text" placeholder='please edit your record'
                               onChange={editRecord}/>
                        <div>
                            <button className="save-edit-btn" onClick={showEditField}>
                                <i className="fas fa-wrench"/>
                            </button>
                            <button className="cancel-edit-btn" onClick={showEditField}>
                                <i className="far fa-window-close"/>
                            </button>
                        </div>
                    </form>
                    }
                </div>
            </>
        );
    }
;

export default Todo;