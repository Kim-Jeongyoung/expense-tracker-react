import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Flowers',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New chair',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Korean Restaurant',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New cups',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState<Expense[]>(DUMMY_EXPENSES);

  // input new data
  const addExpenseHandler = (expense: Expense) => {
    // 이미 존재하는 data + 새로운 data: stat updating function을 써서 자동으로 새로운 데이타 받게 함
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // interface Expense {
  //   id: String;
  //   title: String;
  //   amount: Number;
  //   date: Date;
  // }

  //TODO NEED TO FIX
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
