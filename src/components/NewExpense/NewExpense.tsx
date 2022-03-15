import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';
interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

interface NewExpenseProps { onAddExpense: (data: Expense) => void; }

const NewExpense = (props: NewExpenseProps) => {
  // 68. NewExpenses button add
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData: Expense[]) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    //TODOcancel button 눌렀을 때
    setIsEditing(false);
  };

  // 68. NewExpenses button add
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  //TODOcancel button 눌렀을 때
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* // 68. NewExpenses button add */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          //TODO cancel button눌렀을 때
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
