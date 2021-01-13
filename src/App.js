import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

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
            case 'priority':
                setFilteredTodos(todos.filter(todo => !todo.completed));
                break;
            case 'name':
                setFilteredTodos(todos.sort(function (a,b){
                    if (a.text > b.text){
                        return 1;
                        // return console.log(1);
                    } if (a.text < b.text){
                        return -1;
                        // return console.log(-1);
                    }
                    return 0;
                    // return console.log(0);
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
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
                inputText={inputText}
                setInputText={setInputText}
            />
        </div>
    );
}

export default App;
