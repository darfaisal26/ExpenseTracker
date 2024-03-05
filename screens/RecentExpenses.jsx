import {useContext} from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';

function RecentExpenses() {
  const expenseCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={expenseCtx.expenses}
    />
  );
}
export default RecentExpenses;
