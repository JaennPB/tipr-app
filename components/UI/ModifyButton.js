import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const ModifyButtons = (props) => {
  const updatedStyles = () => {
    const updatedStyles = [styles.button];

    props.disabled && updatedStyles.push({ opacity: 0.7 });

    return updatedStyles;
  };

  return (
    <TouchableOpacity
      style={updatedStyles()}
      onPress={props.pressed}
      disabled={props.disabled}
    >
      <Text style={{ fontSize: 18 }}>{props.buttonType}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
});

export default ModifyButtons;
