import React, {useState} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
          <h1>Vrindavan's todo list</h1>
      </header>
        <Form
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
        />
        <TodoList/>
    </div>
  );
}

export default App;
