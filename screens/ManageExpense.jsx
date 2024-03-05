import {useLayoutEffect} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {GlobalStyles} from '../Constants/styles';
import DeleteButton from '../UI/DeleteButton';
import Button from '../UI/Button';

function ManageExpense({route, navigation}) {
  const editedExpenseId = route.params?.expenseId;
  console.log(editedExpenseId, '... is already');

  const isEditing = !!editedExpenseId;
  console.log(isEditing, 'isEditing');

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
    console.log('Deleting');
    navigation.goBack();
  }
  function confirmHandler() {
    console.log('Confirmed');
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button mode="flat" onPress={cancelExpenseHandle} style={styles.button}>
          Cancel
        </Button>
        <Button mode="flat" onPress={confirmHandler} style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'blue',
  },
});
