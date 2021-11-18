import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { Provider } from "react-redux";

import Card from "./components/UI/Card";
import Title from "./containers/TitleSection";
import InputSection from "./containers/InputSection";
import OutputSection from "./containers/OutputSection";

import store from "./store/index";

import theme from "./theme/theme";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Card title>
            <Title />
          </Card>
          <Card>
            <InputSection />
          </Card>
          <Card>
            <OutputSection />
          </Card>
        </Provider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
