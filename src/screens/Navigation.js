import React, { Component } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

import News from "./News";

import {
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  DrawerItems,
  NavigationEvents
} from "react-navigation";

import Icon from "react-native-vector-icons/Entypo";

class Navigation extends Component {
  render() {
    return <AppContainer />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 250,
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View>
        <Text
          style={{
            color: "black",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 10
          }}
        >
          {" "}
          News App{" "}
        </Text>
      </View>
    </View>

    <ScrollView>
      <DrawerItems
        activeBackgroundColor="white"
        activeTintColor="black"
        {...props}
        style={{}}
        labelStyle={{ color: "black" }}
      />
    </ScrollView>
  </SafeAreaView>
);

const HomeStackNavigator = createStackNavigator(
  {
    News: {
      screen: News,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              name="menu"
              size={30}
              color="white"
              onPress={() => navigation.openDrawer()}
            />
          )
        };
      }
    }
  },

  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            name="menu"
            size={30}
            color="white"
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: HomeStackNavigator,
      navigationOptions: {
        drawerLabel: () => null
      }
    }
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: 300
  }
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    Dashboard: { screen: AppDrawerNavigator }
  },
  {
    backBehavior: "initialRoute"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator, AppDrawerNavigator);

export default Navigation;
