import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const[editItem, setEditItem] = useState(false);

    useEffect(() => {
        filterHandler();
    }, [status, todos])
    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }
    return (
        <div className="App">
            <header>
                <h1>Vrindavan's todo list</h1>
            </header>
            <Form
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
                editItem={editItem}
                setEditItem={setEditItem}
            />
        </div>
    );
}

export default App;
