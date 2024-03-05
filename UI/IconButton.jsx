import {Pressable, StyleSheet, Text, View} from 'react-native';

export default function IconButton({onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Text style={styles.button}>&#9769;</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 2,
    backgroundColor: 'green',
    borderRadius: 6,
  },
  pressed: {
    opacity: 0.4,
  },
  button: {
    color: 'white',
    fontSize: 20,
  },
});
