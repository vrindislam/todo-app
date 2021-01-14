import React from 'react';
import Todo from "./Todo";

    const TodoList = ({todos, setTodos,filteredTodos,inputText,setInputText, priority}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {filteredTodos.map(todo => (
                <Todo
                    text={todo.text}
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    inputText={inputText}
                    setInputText={setInputText}
                    priority={priority}
                />
            ))}
            </ul>
        </div>
    );
};

export default TodoList;