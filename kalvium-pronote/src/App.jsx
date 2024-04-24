import React, { Component } from "react";
import "../src/App.css";
import Todolist from "./components/Todolist";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      item: {
        key: "",
        description: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      item: {
        key: Date.now(),
        description: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = this.state.item;
    if (newTodo.description !== "") {
      const todos = [...this.state.todos, newTodo];

      this.setState({
        todos: todos,
        item: {
          key: "",
          description: "",
        },
      });
    }
  };

  handleUpdate = (newDescription, key) => {
    let todos = this.state.todos;
    todos.map((curr) => {
      if (curr.key === key) {
        curr.description = newDescription;
      }
    });

    this.setState({
      todos: todos,
    });
  };

  handleDelete = (key) => {
    let filteredTodos = this.state.todos.filter((curr) => curr.key !== key);

    this.setState({
      todos: filteredTodos,
    });
  };

  render() {
    // console.log(this.state.todos);
    return (
      <div>
        <h1>Todolist</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter here"
            value={this.state.item.description}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>

        {/* add the list component and show tasks with update and delete functionality */}
        <Todolist
          todos={this.state.todos}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
