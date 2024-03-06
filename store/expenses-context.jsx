import {createContext, useReducer} from 'react';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpenses: id => {},
  updateExpenses: (id, {description, amount, date}) => {},
});

const Dummy_Expenses = [
  {
    id: '0',
    description: 'A pair of shoes',
    amount: 10.99,
    date: new Date('2024-03-02'),
  },

  {
    id: '1',
    description: 'A pair of trousers',
    amount: 99.99,
    date: new Date('2022-01-05'),
  },
  {
    id: '2',
    description: 'some bananas',
    amount: 60,
    date: new Date('2021-12-01'),
  },
  {
    id: '3',
    description: 'A book',
    amount: 30,
    date: new Date('2022-02-19'),
  },
  {
    id: '4',
    description: 'Another book',
    amount: 20,
    date: new Date('2022-02-23'),
  },
  {
    id: '5',
    description: 'Another book',
    amount: 20,
    date: new Date('2022-02-23'),
  },
  {
    id: '6',
    description: 'Another book',
    amount: 20,
    date: new Date('2022-02-23'),
  },
  {
    id: '7',
    description: 'Another book',
    amount: 70,
    date: new Date('2022-02-23'),
  },
  {
    id: '8',
    description: 'Another book',
    amount: 80,
    date: new Date('2022-02-23'),
  },
  {
    id: '9',
    description: 'Another book',
    amount: 60,
    date: new Date('2022-02-23'),
  },
  {
    id: '10',
    description: 'Another book',
    amount: 20,
    date: new Date('2024-03-01'),
  },
  {
    id: '11',
    description: 'Another book',
    amount: 40,
    date: new Date('2024-02-27'),
  },
  {
    id: '12',
    description: 'Another book',
    amount: 20,
    date: new Date('2024-02-29'),
  },
  {
    id: '13',
    description: 'Group of  books',
    amount: 90,
    date: new Date('2024-03-03'),
  },
];

function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    case 'UPDATE':
      const updatableIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updateExpense = state[updatableIndex];
      const updatedItem = {...updateExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updatableIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      const newExpenses = state.filter(
        expense => expense.id !== action.payload,
      );
      return newExpenses;
    default:
      return state;
  }
}
function ExpenseContextProvider({children}) {
  const [expensesState, dispatch] = useReducer(expenseReducer, Dummy_Expenses);
  function addExpense(expenseData) {
    dispatch({type: 'ADD', payload: expenseData});
  }
  function deleteExpense(id) {
    dispatch({type: 'DELETE', payload: id});
  }

  function updateExpense(id, expenseData) {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  }
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
export default ExpenseContextProvider;
