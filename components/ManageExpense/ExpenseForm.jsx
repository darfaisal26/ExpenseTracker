import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import Input from './input';
import Button from '../../UI/Button';
import {GlobalStyles} from '../../Constants/styles';

export default function ExpenseForm({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
}) {
  const [inputs, setinputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description.toString() : '',
      isValid: true,
    },
  });
  function inputChangehandle(enteredvalue, inputIdentifier) {
    setinputs(curInputs => {
      return {
        ...curInputs,
        [inputIdentifier]: {value: enteredvalue, isValid: true},
      };
    });
  }
  function SubmitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };
    console.log(expenseData.date.value);
    const amountisValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateisValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountisValid || !dateisValid || !descriptionIsValid) {
      setinputs(curInputs => {
        return {
          amount: {value: curInputs.amount.value, isValid: amountisValid},
          date: {value: curInputs.date.value, isValid: dateisValid},
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  }
  const formIsValid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;
  return (
    <View style={styles.form}>
      <Text style={styles.title}> My Expenses</Text>
      <View style={styles.inputsrow}>
        <Input
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyBoardType: 'decimal-pad',
            onChangeText: text => inputChangehandle(text, 'amount'),

            value: inputs.amount.value,
          }}
          style={styles.rowInput}
        />

        <Input
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: text => inputChangehandle(text, 'date'),
            value: inputs.date.value,
          }}
          style={styles.rowInput}
        />
      </View>

      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          value: inputs.description.value,
          onChangeText: text => inputChangehandle(text, 'description'),
        }}
      />
      {formIsValid && (
        <Text style={styles.invalidInput}>
          Invalid input values ,Please check your input values
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button mode="flat" onPress={SubmitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 4,
    borderBottomWidth: 2,
    borderColor: 'white',
    marginVertical: 4,
  },
  inputsrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'blue',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  invalidInput: {
    color: GlobalStyles.colors.error500,
    margin: 8,
    textAlign: 'center',
  },
});
