'use strict'
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableNativeFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ViewContainer from '../components/ViewContainer';

const firebase = require('../services/firebase');
const auth = require('../services/firebase/auth');

class SetupProfile extends Component {
  componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      return;
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      userName: "myname",
      displayName: "displayName"
    };
  }

  _updateProfile() {
    var user = firebase.auth().currentUser;
    var app = this;

    user.updateProfile({
      displayName: this.state.userName,
    }).then(function() {
      var displayName = user.displayName;
      app.setState({displayName: displayName})
    }, function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    });

    if (user != null) {
      this.setState({ userName: user.displayName })
    }
  }

  render() {
    return (
      <ViewContainer gradient="true">
        <Text>
          {this.state.displayName}
        </Text>
        <TextInput style={styles.input}
          ref="name"
          selectionColor="#ffffff"
          underlineColorAndroid="#ffffff"
          placeholder="What's your name?"
          placeholderTextColor="#ffffff"
          onChangeText={ (userName) => {this.setState({userName})} }
        />

        <TouchableNativeFeedback
          onPress={this._updateProfile.bind(this)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Done!</Text>
          </View>
        </TouchableNativeFeedback>

      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({
  logo :{
    width: 100,
    height: 100,
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

module.exports = SetupProfile;
