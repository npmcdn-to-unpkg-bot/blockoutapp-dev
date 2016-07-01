'use strict'
import React, { Component } from 'react';
import { AppRegistry, BackAndroid, Navigator, StyleSheet, Text } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Login from './app/screens/Login';
import Home from './app/screens/Home';

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
          <Scene key="login" component={Login} title="Login"
          direction="vertical" />
          <Scene key="home" component={Home} title="Home" initial={true}
          direction="horizontal" />
        </Scene>
      </Router>
    );
  }

}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('BlockOut', () => BlockOut);
