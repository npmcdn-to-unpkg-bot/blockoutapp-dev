'use strict'
import React, { Component, Platform } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableNativeFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ViewContainer from '../components/ViewContainer';
import FBLoginView from '../components/FBLoginView';

const firebase = require('../services/firebase');
const auth = require('../services/firebase/auth');

const { FBLogin, FBLoginManager } = require('react-native-facebook-login');
const LoginBehavior = {
  'ios': FBLoginManager.LoginBehaviors.Browser,
  'android': FBLoginManager.LoginBehaviors.Native
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <ViewContainer gradient="true">
        <ScrollView style={{flex: 1,}}>
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

          {/* This button should authenticate via email then send them to home page on success */}
          <TouchableNativeFeedback
            onPress={function() {
              Actions.home();
            }
            }>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableNativeFeedback>

          <FBLogin
            buttonView={<FBLoginView />}
            loginBehavior={LoginBehavior[Platform]}
            permissions={["email","user_friends"]}
            onLogin={function(e){
              console.log(e);
              Actions.home();
              ToastAndroid.show("Logged In", ToastAndroid.LONG);
            }}
            onLoginFound={function(e){console.log(e)}}
            onLoginNotFound={function(e){console.log(e)}}
            onLogout={function(e){
                console.log(e);
                ToastAndroid.show("Logged Out", ToastAndroid.LONG);
              }}
            onCancel={function(e){console.log(e)}}
            onPermissionsMissing={function(e){console.log(e)}}
          />

          <TouchableNativeFeedback
            onPress={Actions.signup}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>New User?</Text>
            </View>
          </TouchableNativeFeedback>

        </ScrollView>
      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({
  logo :{
    width: 175,
    height: 175,
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
