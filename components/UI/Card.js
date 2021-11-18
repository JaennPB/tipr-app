import React from "react";
import { View, StyleSheet } from "react-native";

import theme from "../../theme/theme";

const Card = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.primary,
    borderRadius: 100,
    width: "95%",
    paddingHorizontal: 25,
    marginBottom: 10,
  },
});

export default Card;
