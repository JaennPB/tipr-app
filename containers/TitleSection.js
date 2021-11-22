import React from "react";
import { Image, View, StyleSheet } from "react-native";

const TitleSection = () => {
  return (
    <View>
      <Image source={require("../assets/logo.png")} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 60,
    width: "50%",
    resizeMode: "contain",
  },
});

export default TitleSection;
