import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity, Dimensions
} from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width);
export default function Card({ title, url, description, publishedAt, name }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => Linking.openURL(url)}
    >
      <View style={styles.Card}>
        <Text style={styles.Title}>{title}</Text>
        <Text style={styles.Description}>{description}</Text>
        <View
          style={{
            height: 1,
            width: "100%",
            marginTop: 10,
            backgroundColor: "#ff5733"
          }}
        />
        <View style={styles.Author}>
          <Text style={styles.name}>{name}</Text>

          <Text style={styles.published}>{publishedAt}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  Card: {
    width: "99.8%",
    borderRadius: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "#ff5733",
    elevation: 1
  },
  Title: {
    color: "black",
    fontSize: 18,
    fontWeight: "600"
  },
  Description: {
    color: "black",
    fontSize: 16,
    marginTop: 5
    // width: "99%"  
  },
  Author: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  name:{
    fontSize:12
  },
  published:{
    fontSize:12
  }
});
