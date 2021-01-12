import React from "react";
class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="app">
                <TodoList title="Todo #1" />

            </div>
        );
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            todos: [],
            todo: "",
            filter: ""
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    addTodo() {
        let newTodo = { todo: this.state.todo, completed: false, id: uuid() };
        this.setState((prevState) => ({
            todos: [...prevState.todos, newTodo],
            todo: ""
        }));
    }

    removeTodo(id) {
        let newTodos = this.state.todos.filter((todo) => todo.id != id);
        this.setState({ todos: newTodos });
    }

    editTodo(id, newTodo) {
        let newTodos = this.state.todos.map(todo => todo.id === id ? {...todo, todo: newTodo} : todo)
        this.setState({ todos: newTodos });
    }

    completeTodo(id){
        let newTodos = this.state.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        this.setState({ todos: newTodos });
    }

    render() {
        return (
            <div class="todo-container">
                <div class="todo-header">
                    <h1>{this.props.title}</h1>
                    <TodoField
                        submit={this.addTodo}
                        change={this.handleChange}
                        name="todo"
                        title="Add"
                        value={this.state.todo}
                    />

                </div>
                <ul class="todo-items">
                    {this.state.todos.map((todo) => {
                        if (todo.todo.includes(this.state.filter)) {
                            return (
                                <TodoItem
                                    todo={todo.todo}
                                    completed={todo.completed}
                                    key={todo.id}
                                    id={todo.id}
                                    remove={this.removeTodo}
                                    edit={this.editTodo}
                                    complete={this.completeTodo}
                                />
                            );
                        }
                    })}
                </ul>
                {this.state.todos.length > 0 ? (
                    <TodoField
                        change={this.handleChange}
                        name="filter"
                        value={this.state.filter}
                    />
                ) : (
                    ""
                )}
            </div>
        );
    }
}

class TodoField extends React.Component {
    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submit();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name={this.props.name}
                    value={this.props.value}
                    onChange={(e) => this.props.change(e)}
                />
                {this.props.submit ? <button>{this.props.title}</button> : ""}
            </form>
        );
    }
}

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            todo: this.props.todo
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
        this.handleComplete = this.handleComplete.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleRemove() {
        this.props.remove(this.props.id);
    }

    handleEditSubmit() {
        this.props.edit(this.props.id, this.state.todo);
        this.setState({edit: false})
    }

    handleComplete(){
        this.props.complete(this.props.id)
    }

    render() {
        return !this.state.edit ? (
            <li>
                <div class={this.props.completed && "completed"} onClick={this.handleComplete}>{this.props.todo}</div>
                <div class="actions">
                    <i class="fas fa-pencil-alt" onClick={() => this.setState({ edit: true })}></i>
                    <i class="far fa-trash-alt" onClick={this.handleRemove}></i>
                </div>
            </li>
        ) : (
            <TodoField
                submit={this.handleEditSubmit}
                change={this.handleChange}
                name="todo"
                title="Edit"
                value={this.state.todo}
            />
        );
    }
}
ReactDOM.render(<App />, document.querySelector("#app"));