import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenese/Expenses";
import "./App.css";

const App = () => {
  const expenses = [
    { 
      id: 'e1',
      title: 'Car Insurace', 
      amount: 9.41,
      date: new Date(2021, 11, 1),
    },
    { 
      id: 'e2',
      title: 'Car Insurace2', 
      amount: 9.41,
      date: new Date(2021, 11, 1),
    },
    { 
      id: 'e3',
      title: 'Car Insurace3', 
      amount: 9.41,
      date: new Date(2021, 11, 1),
    },
    { 
      id: 'e4',
      title: 'Car Insurace4', 
      amount: 9.41,
      date: new Date(2021, 11, 1),
    },
  ];

  const addExpenseHandler = (expenseData) => {
    expenses.push(expenseData);
    console.log(expenses)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
