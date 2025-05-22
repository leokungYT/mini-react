import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoHome from './pages/TodoHome';
import AboutPage from './pages/AboutPage';
import ActivityPage from './pages/ActivityPage'; 
import useTodoContext from './hooks/usetodo';

function App() {
  const { fetchTodos } = useTodoContext();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<TodoHome />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/api" element={<ActivityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;