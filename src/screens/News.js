import React from "react";
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Linking
} from "react-native";
import { ListItem } from "react-native-elements";
import Card from "./Card";
import { ScrollView } from "react-native-gesture-handler";

export default class News extends React.Component {
  static navigationOptions = {
    headerTitle: "News",
    headerRight: null,

    headerStyle: {
      backgroundColor: "#ff5733"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      textAlign: "center"
    }
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=53682eb9befe4e9eaa69f215dfe0bc87"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.articles
          },
          function () { }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  _getDateTimeString = date => {
    const monthsConstant = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    const d = new Date(date);
    const month = monthsConstant[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    const time = `${d.getHours()}:${d.getMinutes()}`;

    const dateString = `${month} ${day},${year} | ${time}`;
    return dateString;
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
          <ActivityIndicator color="#ff5733" animating size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar barStyle="light-content" backgroundColor="#ff5733" />

        <ScrollView style={{ flex: 1, paddingBottom: 500 }}>
          {this.state.dataSource.map((item, i) => (
            <Card
              key={i}
              onPress={() => Linking.openURL(item.url)}
              title={item.title}
              description={item.description}
              publishedAt={this._getDateTimeString(item.publishedAt)}
              name={item.source.name}
              url={item.url}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
