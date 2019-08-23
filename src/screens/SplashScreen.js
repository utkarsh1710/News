import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#ff5733" />
        <Text style={styles.Header}>News</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5733"
  },
  Header: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: 'sans-serif-condensed',
  }
});
