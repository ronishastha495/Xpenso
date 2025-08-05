import React, { useEffect, useState } from 'react';
// import TotalExpensesCard from './TotalExpensesCard';

// Dummy data or fetched from API
const dummyExpenses = [
  { id: 1, title: 'Groceries', amount: 1500 },
  { id: 2, title: 'Internet', amount: 1000 },
  { id: 3, title: 'Electricity Bill', amount: 2000 },
];

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // In real case: fetch from backend
    setExpenses(dummyExpenses);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <TotalExpensesCard expenses={expenses} />
    </div>
  );
};

export default Dashboard;
