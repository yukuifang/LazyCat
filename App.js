import React from 'react';

import {StyleSheet, Text, View, Image} from 'react-native';

import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';

import Home from  './pages/Home'

import Nearby from  './pages/Nearby'

import Message from  './pages/Message'

import Profile from './pages/Profile'

import SignIn from  './pages/SignIn'

import Popular from './pages/Popular'


const Tab = TabNavigator(
    {
        Home:{
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require("./images/wode.jpg")}
                        style={styles.icon}
                    />
                ),
            }),
        },
        Nearby:{
            screen: Popular,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Popular',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require("./images/wode.jpg")}
                        style={styles.icon}
                    />
                ),
            }),
        },
        Message:{
            screen: Message,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Message',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./images/wode.jpg')}
                        style={ styles.icon}
                    />
                ),
            }),
        },
        Profile:{
            screen: Profile,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Profile',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require("./images/wode.jpg")}
                        style={styles.icon}
                    />
                ),
            }),
        },
    },
    {
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled:false,
        animationEnabled:false,
        lazy:true,
        tabBarOptions:{
            activeTintColor:'#06c1ae',
            inactiveTintColor:'#979797',
            style:{backgroundColor:'#ffffff',},
            labelStyle: {
                fontSize: 10, // 文字大小
            },
        }

    },
);


const Navigator = StackNavigator(
    {

        Tab: { screen: Tab },
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
            swipeEnabled: false,
            animationEnabled: false,
        },
    }
);




export default class App extends React.Component {
  render() {
    return (
        <Navigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    icon:{
      width:20,
      height:20
    }
});
