import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import theme from "../../theme/theme";

const Button = (props) => {
  const updatedStyles = () => {
    const updatedStyles = [styles.button];

    props.get && updatedStyles.push({ backgroundColor: theme.secondary });
    props.disabled && updatedStyles.push({ opacity: 0.5 });

    return updatedStyles;
  };

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={updatedStyles()}
      disabled={props.disabled}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "grey",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default Button;
