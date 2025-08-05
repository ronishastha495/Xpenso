import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-gray-600">Xpenso App 🚀</h1>

        <div className="mt-6">
          <Link
            to="/dashboard"
            className="text-blue-500 underline text-lg hover:text-blue-700"
          >
            Go to Dashboard
          </Link>
        </div>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
