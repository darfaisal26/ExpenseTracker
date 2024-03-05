import {useContext} from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  console.log(expensesCtx, 'faisalllll');
  return (
    <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses} />
  );
}
export default AllExpenses;
