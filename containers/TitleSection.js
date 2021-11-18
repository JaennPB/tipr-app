import React from "react";
import { Image, View, StyleSheet } from "react-native";

const Title = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    height: 55,
  },
});

export default Title;
