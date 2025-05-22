import React from 'react';
import TodoCreate from '../components/TodoCreate';
import TodoList from '../components/TodoList';

function TodoHome() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl text-gray-600 drop-shadow-sm font-bold">
            รายการสิ่งที่ต้องทำ
          </h1>
        </div>
        <div className="space-y-8 sm:space-y-10">
          <TodoCreate />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default TodoHome;