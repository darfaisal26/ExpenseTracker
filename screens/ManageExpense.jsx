import {useContext, useLayoutEffect} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {GlobalStyles} from '../Constants/styles';
import DeleteButton from '../UI/DeleteButton';
import Button from '../UI/Button';
import {ExpensesContext} from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

function ManageExpense({route, navigation}) {
  const expenseCtx = useContext(ExpensesContext);
  // console.log(expenseCtx);
  const editedExpenseId = route.params?.expenseId;
  // console.log(editedExpenseId, '... is already');

  const isEditing = !!editedExpenseId;
  console.log(isEditing, 'isEditing');

  const selectedExpense = expenseCtx.expenses.find(
    expense => expense.id === editedExpenseId,
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? ' Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function cancelExpenseHandle() {
    console.log('Cancelling');
    navigation.goBack();
  }
  function deleteExpenseHandle() {
    console.log('Deleted');
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function confirmHandler(expenseData) {
    console.log('Confirmed');
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      console.log('add');
      expenseCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelExpenseHandle}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <Pressable onPress={deleteExpenseHandle}>
          <View style={styles.deleteButton}>
            <DeleteButton />
          </View>
        </Pressable>
      )}
    </View>
  );
}
export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteButton: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
  // buttonContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // button: {
  //   minWidth: 120,
  //   marginHorizontal: 8,
  //   borderWidth: 1,
  //   borderRadius: 4,
  //   backgroundColor: 'blue',
  // },
});
