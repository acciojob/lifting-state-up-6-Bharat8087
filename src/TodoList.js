import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div className="todo-list">
      <h2>Todo Items:</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
