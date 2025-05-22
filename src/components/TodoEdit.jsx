import React, { useState } from 'react';
import useTodoContext from '../hooks/usetodo';

function TodoEdit({ todo, onSubmit }) {
  const { updateTodo } = useTodoContext();
  const [title, setTitle] = useState(todo.title);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    await updateTodo(todo.id, { ...todo, title });
    onSubmit();
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="p-3 sm:p-4">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-sm sm:text-base"
          type="text"
          value={title}
          onChange={handleChange}
          required
          autoFocus
        />
        <div className="flex space-x-2">
          <button 
            type="submit"
            className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors shadow-sm text-sm sm:text-base"
          >
            บันทึก
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoEdit;