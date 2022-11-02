import React from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
function Expenses(props) {
  return (
    <div className="expenses">
        <ExpenseItem expenses={props.expenses[0]}/>
    </div>
  )
}

export default Expenses