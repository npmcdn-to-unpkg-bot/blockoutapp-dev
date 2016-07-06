'use strict'
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ViewContainer from '../components/ViewContainer';
import { firebase, auth } from '../services/firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    // const firebaseRef = new Firebase("https://blockoutmvp.firebaseio.com");

    const config = {
      apiKey: "AIzaSyCwDtcip464eCOW9L5yTP7uPjqt0tXATOw",
      authDomain: "blockoutmvp.firebaseapp.com",
      databaseURL: "https://blockoutmvp.firebaseio.com"
    };
    firebase.initializeApp(config);
    const rootRef =  firebase.database().ref();
    firebaseRef.set({
      title: 'Hello World!',
      author: 'Simon'
    })

  }

  _createUser() {
    var email = this.state.email;
    var password = this.state.password;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
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
          </Text>
          <TextInput style={styles.input}
            ref="email"
            selectionColor="#ffffff"
            underlineColorAndroid="#ffffff"
            onFocus={this._onPressButton}
            value={this.state.email}
            placeholder="What's your email?"
            placeholderTextColor="#ffffff"
            onChange={ (e) => {this.setState({email: e.nativeEvent.email})} }
          />
          <TextInput style={styles.input}
            ref="password"
            selectionColor="#ffffff"
            underlineColorAndroid="#ffffff"
            onFocus={this._onPressButton}
            value={this.state.password}
            placeholder="What's your password?"
            placeholderTextColor="#ffffff"
            onChange={ (e) => {this.setState({password: e.nativeEvent.password})} }
          />

          <TouchableNativeFeedback
            onPress={this._createUser.bind(this)}
            background={TouchableNativeFeedback.Ripple('rgba(3, 155, 229, 0.3)')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Let's get started!</Text>
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
    marginTop: 20,
  },
  buttonText: {
    margin: 10,
    alignSelf: 'center',
    color: '#ffffff',
  },
});

module.exports = Login;
