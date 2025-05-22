import React from 'react';
import TodoShow from './TodoShow';
import useTodoContext from '../hooks/usetodo';

function TodoList() {
  const { todos } = useTodoContext();

  return (
    <div className="w-full mx-auto mt-6 sm:mt-8 space-y-4">
      {todos.length === 0 ? (
        <div className="bg-gray-50 p-6 sm:p-8 rounded-xl text-center shadow-sm border border-gray-100">
          <p className="text-base sm:text-lg text-gray-500">ไม่มีรายการที่ต้องทำ</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">เพิ่มสิ่งที่ต้องทำของคุณเลย!</p>
        </div>
      ) : (
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-3 sm:mb-4 pl-2">รายการทั้งหมด</h2>
          <div className="space-y-3 sm:space-y-4">
            {todos.map((todo) => <TodoShow key={todo.id} todo={todo} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;