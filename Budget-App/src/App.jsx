import { useState } from "react";

function App() {
  const [budget, setBudget] = useState(0);
  const [total, setTotal] = useState(0);
  const [spent, setSpent] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expense, setExpense] = useState([]);
  const [expenseDetail, setExpenseDetail] = useState("");
  const [expenseAmt, setExpenseAmt] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTotal(budget);
    setBudget("");
    setRemaining(budget);
  }

  // type conversion is important to convert otherwise it will compare values in string, which can lead to incorrect results.

  function handleExpense(e) {
    e.preventDefault();
    if (total < Number(expenseAmt) || remaining < Number(expenseAmt)) {
      alert(`You dont have enough money`);
      setExpenseDetail("");
      setExpenseAmt("");
    } else {
      const obj = {
        ExpenseDetail: expenseDetail,
        ExpenseAmt: Number(expenseAmt),
      };
      setSpent(spent + Number(expenseAmt));
      setExpense([...expense, obj]);
      setRemaining(
        expenseAmt === 0 ? total - expenseAmt : remaining - expenseAmt
      );
      setExpenseDetail("");
      setExpenseAmt("");
    }
  }

  return (
    <div className="mx-auto max-w-xl px-10 py-4 border my-3">
      <form className="text-center" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter the budget"
          name="budget"
          className="border mx-2 px-2"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <button className="px-2 border" type="submit">
          Set Budget
        </button>
      </form>

      <div className="flex items-center justify-evenly my-4">
        <div className="border mx-auto px-2">Total:{total}</div>
        <div className="border mx-auto px-2">Spent:{spent}</div>
        <div className="border mx-auto px-2">Remaining:{remaining}</div>
      </div>

      <form className="flex flex-col gap-2 w-72 mx-22" onSubmit={handleExpense}>
        <input
          type="text"
          name="detail"
          placeholder="Expense Detail"
          className="border"
          value={expenseDetail}
          onChange={(e) => setExpenseDetail(e.target.value)}
          required
        />
        <input
          type="number"
          name="Amount"
          placeholder="Expense Amount"
          className="border"
          value={expenseAmt}
          onChange={(e) => setExpenseAmt(e.target.value)}
          required
        />
        <button type="submit" className="border">
          Add Expense
        </button>
      </form>

      <table className="w-full border my-5">
        <thead>
          <tr>
            <th className="border">SNo</th>
            <th className="border">Info</th>
            <th className="border">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expense.map((item, index) => {
            return (
              <tr key={index} className="text-center">
                <td className="border">{index + 1}</td>
                <td className="border">{item.ExpenseDetail}</td>
                <td className="border">{item.ExpenseAmt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
