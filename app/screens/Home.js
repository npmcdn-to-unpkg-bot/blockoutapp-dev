'use strict'
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewContainer from '../components/ViewContainer';

const menuButton = ( <Icon name="ellipsis-v" size={30} color="#ffffff" /> );

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <ViewContainer>
        <View style={styles.topBar}>

          <Text>Home</Text>
          <menuButton />
        </View>


        <TouchableNativeFeedback
          onPress={Actions.login}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Back to Login</Text>
          </View>
        </TouchableNativeFeedback>
      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({
  topBar: {
    height: 50,
    backgroundColor: '#ff0000',
  },

  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  welcome: {
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'pink',
    borderWidth: 1,
    borderColor: '#ffffff',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
  },
  buttonText: {
    margin: 10,
    alignSelf: 'center',
    color: '#ffffff',
  },
});

module.exports = Home;
