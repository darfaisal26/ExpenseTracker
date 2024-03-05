import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../Constants/styles';

export default function DeleteButton() {
  return (
    <View>
      <Text style={styles.buttoncolor}>Delete</Text>
      {/* <Image src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg" /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  buttoncolor: {
    color: GlobalStyles.colors.error500,
  },
});
