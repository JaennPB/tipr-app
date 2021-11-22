import React from "react";
import { View, StyleSheet } from "react-native";

import theme from "../../theme/theme";

const Card = (props) => {
  const updatedStyles = () => {
    const updatedStyles = [styles.card];

    if (props.title) {
      updatedStyles.push({
        paddingHorizontal: 0,
        paddingVertical: 0,
        backgroundColor: theme.primary,
        marginBottom: 10,
      });
    }

    return updatedStyles;
  };

  return <View style={updatedStyles()}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.primaryLight,
    borderRadius: 10,
    width: "90%",
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});

export default Card;
