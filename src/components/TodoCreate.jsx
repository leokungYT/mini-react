import React, { useState } from 'react';
import useTodoContext from '../hooks/usetodo';

function TodoCreate() {
  const { addTodo } = useTodoContext();
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    await addTodo({ title, completed: false });
    setTitle('');
  };

  return (
    <div className="w-full mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-700">เพิ่มสิ่งที่ต้องทำ</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            className="flex-1 px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none  placeholder-gray-300 text-sm sm:text-base"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="อยากจะทำอะไรไหม วันนี้?"
          />
          <button 
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 ease-in-out shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            เพิ่ม
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoCreate;