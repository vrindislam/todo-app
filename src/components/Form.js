import React, {useState} from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setStatus, priority, setPriority}) => {
    const [toggleActiveBtn, setToggleActiveBtn] = useState(false)
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {
                text: inputText,
                completed: false,
                id: Math.random() * 1000,
                edit: false,
                priority: priority
            }
        ]);
        setInputText('');
    }
    const statusHandler = (e) => {
        e.preventDefault();
        setStatus(e.target.value);
    }
    const priorityHandler = (e) => {
        setPriority(e.target.value);
    }
    return (
        <form>
            <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler}/>
            <button className="todo-button" type="submit" onClick={submitHandler}>
                <i className="fas fa-plus-square"/>
            </button>
            <div className='select'>
                <select onChange={priorityHandler} name="todos" className="filter-todo">
                    <option disabled>Priority</option>
                    <option value={1}>Low</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Urgent</option>
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
            <>
                <div>
                    <button
                        className={toggleActiveBtn ? 'active' : undefined}
                        type='submit'
                        onClick={(e) => {
                            statusHandler(e)
                            setToggleActiveBtn(!toggleActiveBtn)
                        }}
                        value='name'
                        name='todos'
                    >Name
                    </button>
                </div>
                <div>
                    <button
                        type='submit'
                        onClick={(e) => {
                            statusHandler(e)
                            setToggleActiveBtn(!toggleActiveBtn)
                        }}
                        value='priority'
                        name='todos'
                    >Priority
                    </button>
                </div>
            </>
        </form>
    );
};

export default Form;