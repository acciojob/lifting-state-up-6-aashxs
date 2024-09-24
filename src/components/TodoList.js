import React from 'react'

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo)=>(
        <li key={todo.id}>{todo.task}
        {!todo.completed && (
          <button onClick={()=>{props.onComplete(todo.id)}}>Complete</button>
        )}
        </li>
      ))}
    </ul>
  )
}

export default TodoList