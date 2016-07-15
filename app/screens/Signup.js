'use strict'
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableNativeFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ViewContainer from '../components/ViewContainer';

const firebase = require('../services/firebase');
const auth = require('../services/firebase/auth');

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  _createUser() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
      function() {
        ToastAndroid.show("Account Created", ToastAndroid.LONG);
        Actions.setupProfile();
      }, function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      }
    )
  }
  _deleteUser() {
    var user = firebase.auth().currentUser;
    if(user) {
      user.delete().then(function() {
        ToastAndroid.show("Account Deleted", ToastAndroid.LONG);
      }, function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      });
    } else {
      ToastAndroid.show("No Such User", ToastAndroid.LONG);
    }
  }

  render() {
    return (
      <ViewContainer gradient="true">
        <View>
          <Text style={styles.welcome}>
            Just a few steps away from reaching your neighbours...
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
            placeholder="Set a password"
            placeholderTextColor="#ffffff"
            onChangeText={ (password) => {this.setState({password})} }
          />

          <TouchableNativeFeedback
            onPress={this._createUser.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </TouchableNativeFeedback>

          {/* To test signup and allow you to easily delete user */}
          <TouchableNativeFeedback
            onPress={this._deleteUser.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Delete Me!</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 40,
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

module.exports = Signup;
