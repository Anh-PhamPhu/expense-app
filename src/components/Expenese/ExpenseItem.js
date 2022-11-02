import React, { useState } from 'react';

import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.expenses.title);

    const clickHandler = () => {
        setTitle('updated!')
        console.log('Updated')
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenses.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.expenses.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
