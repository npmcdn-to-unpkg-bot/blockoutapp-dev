'use strict'
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableNativeFeedback, View } from 'react-native';
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
      displayName: "displayName",
      postal: "",
      dob: "",
      occupation: "",
    };
  }
  // To update function to include more profile data
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
        <ScrollView style={{flex: 1}}>
          <Text style={styles.welcome}>
            Few more details...
          </Text>
          <Text style={styles.instructions}>
            This way we can link you up to the right people and help with breaking the ice!
          </Text>
          {/* ToDo: build a way to upload profile picture */}
          <View style={styles.profilePic}>

          </View>
          {/* To test if name was stored to Firebase and successfully pulled back to app */}
          <Text style={{textAlign: 'center'}}>
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
          <TextInput style={styles.input}
            ref="dob"
            selectionColor="#ffffff"
            underlineColorAndroid="#ffffff"
            placeholder="Date of Birth?"
            placeholderTextColor="#ffffff"
            keyboardType="numeric"
            maxLength={8}
            onChangeText={ (dob) => {this.setState({dob})} }
          />
          <TextInput style={styles.input}
            ref="occupation"
            selectionColor="#ffffff"
            underlineColorAndroid="#ffffff"
            placeholder="What do you work as?"
            placeholderTextColor="#ffffff"
            onChangeText={ (occupation) => {this.setState({occupation})} }
          />
          <TextInput style={styles.input}
            ref="postal"
            selectionColor="#ffffff"
            underlineColorAndroid="#ffffff"
            placeholder="What's your postal code?"
            placeholderTextColor="#ffffff"
            keyboardType="numeric"
            onChangeText={ (postal) => {this.setState({postal})} }
          />

          {/* To update function to update more profile info */}
          <TouchableNativeFeedback
            onPress={this._updateProfile.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Done!</Text>
            </View>
          </TouchableNativeFeedback>
        </ScrollView>
      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({
  profilePic :{
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginBottom: 15,
  },
  welcome: {
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 15,
    marginLeft: 40,
    marginRight: 40,
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
