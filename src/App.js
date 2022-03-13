import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
// import ExpenseItem from './components/Expenses/ExpenseItem';
function App() {
  const expenses = [
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

  // interface Expense {
  //   id: String;
  //   title: String;
  //   amount: Number;
  //   date: Date;
  // }

  return (
    <div>
      <NewExpense />
      {/* TODO  */}
      <Expenses items={expenses} />
      {/* {expenses.map((expense, index) => {
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>;
      })} */}
    </div>
  );
}

export default App;
