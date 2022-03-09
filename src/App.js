import Expenses from './components/Expenses';

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
      <h2>Hi</h2>
      {/* TODO  */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
