import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../Constants/styles';

export default function Input({label, style, textInputConfig, invalid}) {
  let inputStyles = [styles.input];
  let labelStyles = [styles.label];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputmultiLine);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
    labelStyles.push(styles.invalidlabel);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputmultiLine: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidlabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    color: GlobalStyles.colors.error50,
  },
});
