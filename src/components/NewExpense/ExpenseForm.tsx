import { useState } from 'react';
import './ExpenseForm.css';

interface onSaveExpenseDataFunc {
  onSaveExpenseData: (data: {
    title: string;
    amount: number;
    date: Date;
  }) => void;
}

const ExpenseForm = (props: onSaveExpenseDataFunc) => {
  const [enteredTitle, setEnteredTitle] = useState<string>('');
  const [enteredAmount, setEnteredAmount] = useState<number>(0);
  const [enteredDate, setEnteredDate] = useState<string>('');

  // const [userInput, setUserInout] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput
    //   enteredTitle: event.targete.value,
    // });

    // If your state update depends on the previous state use function form
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount(0);
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* //TODOcancel button 눌렀을 때  onCancel NewExpenses.js에서 가져온 것*/}
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
