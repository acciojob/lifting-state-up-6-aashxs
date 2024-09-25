import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master State Management', completed: false },
  ]);

  const handleComplete = (id) => {
    // Update the todos state by marking the selected todo as completed
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos); // This will trigger a re-render
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
};

export default App;

