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
  return (
    <div>
      <h1> Let's get started!</h1>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
