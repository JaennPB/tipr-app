import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import theme from "../theme/theme";

const OutputSection = (props) => {
  const tip = useSelector((state) => state.tip);
  const tipPerPerson = useSelector((state) => state.tipPerPerson);
  const totalWithTip = useSelector((state) => state.totalWithTip);
  const tipPercent = useSelector((state) => state.tipPercent);
  const dividedBy = useSelector((state) => state.dividedBy);

  return (
    <>
      <View style={defaultOutput.box}>
        <Text style={styles.results}>Tip ({tipPercent}%)</Text>
        <Text style={styles.results}>${tip.toFixed(2)}</Text>
      </View>
      <View style={defaultOutput.box}>
        <Text style={styles.results}>Tip per person ({dividedBy})</Text>
        <Text style={styles.results}>${tipPerPerson.toFixed(2)}</Text>
      </View>
      <View style={styles.outputContainerTotal}>
        <Text style={styles.resultsTotal}>Total with tip:</Text>
        <Text style={styles.resultsTotal}>${totalWithTip.toFixed(2)}</Text>
      </View>
    </>
  );
};

const defaultOutput = StyleSheet.create({
  box: {
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

const styles = StyleSheet.create({
  results: {
    fontSize: 20,
  },
  outputContainerTotal: {
    ...defaultOutput.box,
    backgroundColor: theme.secondary,
    marginBottom: 0,
  },
  resultsTotal: {
    fontSize: 20,
    color: "white",
  },
});

export default OutputSection;
