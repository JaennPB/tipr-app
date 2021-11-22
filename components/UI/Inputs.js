import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Inputs = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      keyboardType="decimal-pad"
      returnKeyType="done"
    />
  );
};

export default Inputs;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 5,
    marginVertical: 15,
  },
});
