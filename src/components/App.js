
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";


const App = () => {
  const [todos, completedTodos] = useState([
    { id: 1, task: 'EAT', completed: false },
    { id: 2, task: 'WORKOUT', completed: false },
    { id: 3, task: 'MEDITATE', completed: false }
  ]);

  const handleComplete = (id) => {
    completedTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };
  
  return (
    <div>
        <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  )
}

export default App
