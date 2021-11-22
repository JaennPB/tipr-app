import React from "react";
import { View, StyleSheet, Alert, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Button from "../components/UI/Button";
import Data from "../components/Data";

import { calculateBill, clearInputs } from "../store/mainSlice";

const InputSection = (props) => {
  const dispatch = useDispatch();
  const billValue = useSelector((state) => state.billAmount);
  const tipPercent = useSelector((state) => state.tipPercent);

  const clearHandler = () => {
    dispatch(clearInputs());
  };

  const calcHandler = () => {
    if (billValue && tipPercent) {
      Keyboard.dismiss();
      dispatch(calculateBill());
    } else {
      Alert.alert("Error", "Please fill all values 😉");
    }
  };

  return (
    <>
      <Data />
      <View style={styles.buttonSection}>
        <Button title="Clear" onPress={clearHandler} />
        <Button
          title="Get tip"
          onPress={calcHandler}
          disabled={!billValue || !tipPercent}
          get
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
});

export default InputSection;
