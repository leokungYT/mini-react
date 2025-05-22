import React, { useState } from 'react';
import TodoEdit from './TodoEdit';
import useTodoContext from '../hooks/usetodo';

function TodoShow({ todo }) {
  const { deleteTodo, updateTodo } = useTodoContext();
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleComplete = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    
    setIsLoading(true);
    await updateTodo(todo.id, { ...todo, completed: !todo.completed });
    setIsLoading(false);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    await deleteTodo(todo.id);
    setIsLoading(false);
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  const handleSubmit = () => {
    setEditMode(false);
  };

  let content = (
    <div className="flex items-center space-x-3 sm:space-x-4 px-3 sm:px-5 py-3 sm:py-4">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
        disabled={isLoading}
        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 border-gray-300 rounded focus:ring-gray-400 cursor-pointer"
      />
      <span 
        className={`flex-1 text-base sm:text-lg transition-all duration-200 ${
          todo.completed ? 'line-through text-gray-300 italic' : 'text-gray-800'
        }`}
      >
        {todo.title}
      </span>
    </div>
  );

  if (editMode) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />;
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-lg">
      {content}
      <div className="flex justify-end px-3 sm:px-5 py-2 sm:py-3 bg-gray-50 border-t border-gray-100">
        <button 
          className="px-3 sm:px-4 py-1.5 mr-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={handleEditClick}
          disabled={isLoading}
        >
          {editMode ? 'ยกเลิก' : 'แก้ไข'}
        </button>
        <button 
          className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={handleDelete}
          disabled={isLoading}
        >
          ลบ
        </button>
      </div>
    </div>
  );
}

export default TodoShow;