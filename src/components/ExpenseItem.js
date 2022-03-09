import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item ">
      <div>Date</div>
      <div>
        <h2>Title</h2>
        <div>Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
