import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
    // TODO: Implement Firebase Firestore logic to add a todo
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleToggleTodo = (id) => {
    // TODO: Implement Firebase Firestore logic to update a todo
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const handleDeleteTodo = (id) => {
    // TODO: Implement Firebase Firestore logic to delete a todo
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="page-container glass-panel">
      <h2>Todo List</h2>
      <div className="todo-input-group">
        <input 
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          placeholder="New Task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <span 
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button className="delete-btn" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
