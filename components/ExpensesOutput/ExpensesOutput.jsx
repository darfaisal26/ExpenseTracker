import {View, StyleSheet, Text} from 'react-native';
import {GlobalStyles} from '../../Constants/styles';
import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpensesList from './ExpensesList';

const ExpensesOutput = ({expenses, expensesPeriod, fallbackText}) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      {content}
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
  infoText: {
    color: 'white',
    fontSize: 16,
    marginTop: 32,
    textAlign: 'center',
  },
});
