'use strict'
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableNativeFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ViewContainer from '../components/ViewContainer';

const firebase = require('../services/firebase');
const auth = require('../services/firebase/auth');

class Login extends Component {
  componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      name = user.displayName;
      this.setState({displayName: name})
    } else {
      this.setState({displayName: "noUser"})
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      displayName: ""
    };
  }

  render() {
    return (
      <ViewContainer gradient="true">
        <Image style={styles.logo} source={require('../../assets/img/logoWhite.png')} />
          <Text style={styles.welcome}>
            BlockOut
          </Text>
          <Text style={styles.instructions}>
            Hi there!
            {this.state.displayName}
          </Text>
          <TextInput style={styles.input}
            ref="email"
            selectionColor="#ffffff"
            underlineColorAndroid="#ffffff"
            placeholder="What's your email?"
            placeholderTextColor="#ffffff"
            onChangeText={ (email) => {this.setState({email})} }
          />
          <TextInput style={styles.input}
            ref="password"
            selectionColor="#ffffff"
            underlineColorAndroid="#ffffff"
            placeholder="What's your password?"
            placeholderTextColor="#ffffff"
            onChangeText={ (password) => {this.setState({password})} }
          />

          <TouchableNativeFeedback
            onPress={Actions.home}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={Actions.signup}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>New User?</Text>
            </View>
          </TouchableNativeFeedback>

      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({
  logo :{
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
  input: {
    color: '#ffffff',
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  button: {
    borderWidth: 1,
    borderColor: '#ffffff',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
  },
  buttonText: {
    margin: 10,
    alignSelf: 'center',
    color: '#ffffff',
  },
});

module.exports = Login;
