import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [priority, setPriority] = useState('1')

    useEffect(() => {
        filterHandler();
    }, [status, todos])
    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => !todo.completed));
                break;
            case 'name':
                setFilteredTodos(todos.sort(function (a,b){
                    if (a.text > b.text){
                        return 1;
                    } if (a.text < b.text){
                        return -1;
                    }
                    return 0;
                }));
                break;
            case 'priority':
                setFilteredTodos(todos.sort(function (a,b){
                    if (a.priority > b.priority){
                        return -1;
                    } if (a.priority < b.priority){
                        return 1;
                    }
                    return 0;
                }));
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
                priority={priority}
                setPriority={setPriority}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
                inputText={inputText}
                setInputText={setInputText}
                priority={priority}
            />
        </div>
    );
}

export default App;
