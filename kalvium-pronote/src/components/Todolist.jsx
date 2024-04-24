import React from "react";
import "../components/todo.css";

const Todolist = (props) => {
  let todos = props.todos;
  //  let handleUpdate= props.handleUpdate;
  //  let handleDelete= props.handleDelete;

  //  console.log(handleDelete);
  //  console.log(handleUpdate);
  console.log(todos);

 
    const newList=  todos.map((item) => {
        return (
          <div key={item.key} id="todo">
            <input
            type="text" id={item.id} value={item.description}
              onChange={(e) => {
                props.handleUpdate(e.target.value, item.key);
              }}
            ></input>
            <button
              onClick={() => {
                props.handleDelete(item.key);
              }}
            >
              Delete
            </button>
          </div>
        );
      })

      return(
        <div>
            {newList}
        </div>
      )
};

export default Todolist;
