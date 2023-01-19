import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/SideDrawer/Header";
import ExpenseCards from "./components/Expense/ExpenseCards";
import NewExpense from "./components/NewExpense";

const temp_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(temp_expenses);

  const addExpenseHandler = (expense) => {
    console.log("In Main App.js");
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        {/* <a2>Let's Get Started</a2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpenseCards expenses={expenses} />
      </header>
    </div>
  );
};

export default App;
