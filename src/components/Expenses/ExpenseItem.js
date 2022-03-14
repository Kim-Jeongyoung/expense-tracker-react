import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('ExenseItem evaluated by React');

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <div>
      <ExpensesFilter />

      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClinck={clickHandler}>Change Title</button>
      </Card>
    </div>
  );
};

export default ExpenseItem;
