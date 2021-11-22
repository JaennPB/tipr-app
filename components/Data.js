import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ModifyButtons from "./UI/ModifyButton";
import Inputs from "./UI/Inputs";

import {
  setBillData,
  setTipData,
  setDividedByData,
  increaseValue,
  decreaseValue,
} from "../store/mainSlice";

const Input = (props) => {
  const dispatch = useDispatch();

  const billValue = useSelector((state) => state.billAmount);
  const tipValue = useSelector((state) => state.tipPercent);
  const dividedByValue = useSelector((state) => state.dividedBy);

  const sendBillData = (bill) => {
    dispatch(setBillData(bill));
  };

  const sendTipData = (tip) => {
    dispatch(setTipData(tip));
  };

  const sendDividedByData = (dividedBy) => {
    dispatch(setDividedByData(dividedBy));
  };

  const sendIncreaseValue = (type) => {
    dispatch(increaseValue(type));
  };

  const sendDecreaseValue = (type) => {
    dispatch(decreaseValue(type));
  };

  return (
    <View>
      <View>
        <Text style={styles.label}>Bill $</Text>
        <TextInput
          style={styles.billInput}
          placeholder="Your total bill"
          onChangeText={(bill) => sendBillData(bill)}
          value={billValue ? billValue.toString() : null}
          keyboardType="decimal-pad"
          returnKeyType="done"
        />
      </View>
      <View>
        <Text style={styles.label}>Tip Percent %</Text>
        <View style={styles.inputContainer}>
          <ModifyButtons
            pressed={() => sendDecreaseValue("tip")}
            disabled={tipValue === 1}
            buttonType="-"
          />
          <Inputs
            placeholder="Your tip in %"
            onChangeText={(tip) => sendTipData(tip)}
            value={tipValue ? tipValue.toString() : null}
          />
          <ModifyButtons
            pressed={() => sendIncreaseValue("tip")}
            buttonType="+"
          />
        </View>
      </View>
      <View>
        <Text style={styles.label}>Divide by</Text>
        <View style={styles.inputContainer}>
          <ModifyButtons
            pressed={() => sendDecreaseValue("people")}
            disabled={dividedByValue === 1}
            buttonType="-"
          />
          <Inputs
            onChangeText={(divided) => sendDividedByData(divided)}
            value={dividedByValue ? dividedByValue.toString() : null}
          />
          <ModifyButtons
            pressed={() => sendIncreaseValue("people")}
            buttonType="+"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: "white",
    fontSize: 20,
    fontFamily: "customRegular",
  },
  billInput: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 15,
    fontFamily: "customRegular",
  },
});

export default Input;
