import React, { useState, useEffect } from 'react';

function ActivityPage() {
  const [mealName, setMealName] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMeal = () => {
    setLoading(true);
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => {
        setMealName(data.meals[0].strMeal);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">กินอะไรดีวันนี้?</h1>
        <button 
          onClick={fetchMeal}
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition disabled:opacity-50"
        >
          {loading ? 'กำลังสุ่ม...' : 'สุ่มเมนูอาหาร'}
        </button>
        
        {mealName && (
          <div className="mt-8 text-xl text-gray-700 font-medium">
           เมนูแนะนำวันนี้คือ <span className="font-bold">{mealName}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActivityPage;
