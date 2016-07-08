'use strict'
import React, { Component } from 'react';
import { AppRegistry, BackAndroid, Navigator, StyleSheet, Text } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Login from './app/screens/Login';
import Signup from './app/screens/Signup';
import SetupProfile from './app/screens/SetupProfile';
import Home from './app/screens/Home';

const firebase = require('./app/services/firebase');
const auth = require('./app/services/firebase/auth');

var config = {
  apiKey: "AIzaSyCwDtcip464eCOW9L5yTP7uPjqt0tXATOw",
  authDomain: "blockoutmvp.firebaseapp.com",
  databaseURL: "https://blockoutmvp.firebaseio.com"
};
firebase.initializeApp(config);
const rootRef =  firebase.database().ref();

BackAndroid.addEventListener('hardwareBackPress', () => {
  try {
      Actions.pop();
      return true;
  }
  catch (err) {
      ToastAndroid.show("Cannot pop. Exiting the app...", ToastAndroid.SHORT);
      return true;
  }
});

class BlockOut extends Component {

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" initial={true}
          direction="vertical" />
          <Scene key="signup" component={Signup} title="Signup"
          direction="horizontal" />
          <Scene key="setupProfile" component={SetupProfile} title="Setup Profile"
          direction="horizontal" />
          <Scene key="home" component={Home} title="Home"
          direction="horizontal" />
        </Scene>
      </Router>
    );
  }

}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('BlockOut', () => BlockOut);
