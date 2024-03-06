import {useContext} from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../utils/date';

function RecentExpenses() {
  const expenseCtx = useContext(ExpensesContext);
  // console.log(expenseCtx, '......recent expenses');

  const recentExpenses = expenseCtx.expenses.filter(expense => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);
    // console.log(date7daysAgo, 'date7daysAgo');
    return expense.date >= date7daysAgo && expense.date <= today;
  });
  // console.log(recentExpenses, 'recentExpenses........');
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No Expenses Registerd For Last 7 days"
    />
  );
}
export default RecentExpenses;
