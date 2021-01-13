import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000, edit:false}
        ]);
        setInputText('');
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler}/>
            <button className="todo-button" type="submit" onClick={submitHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className='select'>
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option disabled>Sorting</option>
                    <option value="priority">Priority</option>
                    <option value="name">Name</option>
                </select>
            </div>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option disabled>Filter</option>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;