import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { Provider } from "react-redux";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Card from "./components/UI/Card";
import TitleSection from "./containers/TitleSection";
import InputSection from "./containers/InputSection";
import OutputSection from "./containers/OutputSection";

import store from "./store/index";

import theme from "./theme/theme";

const App = () => {
  const [fontsLoaded] = useFonts({
    customLight: require("./assets/fonts/Montserrat-Light.ttf"),
    customRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    customBold: require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Card title>
            <TitleSection />
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
