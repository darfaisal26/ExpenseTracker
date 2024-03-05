import {View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../Constants/styles';
import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpensesList from './ExpensesList';

// const Dummy_Expenses = [
//   {
//     id: '0',
//     description: 'A pair of shoes',
//     amount: 10.99,
//     date: new Date('2021-12-23'),
//   },

//   {
//     id: '1',
//     description: 'A pair of trousers',
//     amount: 99.99,
//     date: new Date('2022-01-05'),
//   },
//   {
//     id: '2',
//     description: 'some bananas',
//     amount: 60,
//     date: new Date('2021-12-01'),
//   },
//   {
//     id: '3',
//     description: 'A book',
//     amount: 30,
//     date: new Date('2022-02-19'),
//   },
//   {
//     id: '4',
//     description: 'Another book',
//     amount: 20,
//     date: new Date('2022-02-23'),
//   },
//   {
//     id: '5',
//     description: 'Another book',
//     amount: 20,
//     date: new Date('2022-02-23'),
//   },
//   {
//     id: '6',
//     description: 'Another book',
//     amount: 20,
//     date: new Date('2022-02-23'),
//   },
//   {
//     id: '7',
//     description: 'Another book',
//     amount: 70,
//     date: new Date('2022-02-23'),
//   },
//   {
//     id: '8',
//     description: 'Another book',
//     amount: 80,
//     date: new Date('2022-02-23'),
//   },
//   {
//     id: '9',
//     description: 'Another book',
//     amount: 60,
//     date: new Date('2022-02-23'),
//   },
//   {
//     id: '10',
//     description: 'Another book',
//     amount: 20,
//     date: new Date('2022-02-23'),
//   },
//   {
//     id: '11',
//     description: 'Another book',
//     amount: 40,
//     date: new Date('2022-02-23'),
//   },
//   {
//     id: '12',
//     description: 'Another book',
//     amount: 20,
//     date: new Date('2022-02-23'),
//   },
//   {
//     id: '13',
//     description: 'Group of  books',
//     amount: 90,
//     date: new Date('2022-02-23'),
//   },
// ];
const ExpensesOutput = ({expenses, expensesPeriod}) => {
  console.log(expenses, '.......expem');
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 0,
    paddingHorizontal: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
