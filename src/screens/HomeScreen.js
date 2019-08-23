import React, { Component } from "react";
import { View, Text } from "react-native";
import SplashScreen from "./SplashScreen";
import Navigation from "./Navigation";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 2000)
    );
  };
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
       <Navigation/>
    );
  }
}