import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  // State that holds the list of todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master State Management', completed: false }
  ]);

  // Function to handle completion of a todo item
  const handleComplete = (id) => {
    // Update the todos state by marking the selected todo as completed
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* Pass the todos state and handleComplete function to the child component */}
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
};

export default App;

