import {Text, FlatList} from 'react-native';
import React from 'react';
import ExpenseItem from './ExpenseItem';

export default function ExpensesList({expenses}) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}

function renderExpensesItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}
