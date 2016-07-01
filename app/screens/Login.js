'use strict'
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ViewContainer from '../components/ViewContainer';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
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
          </Text>
          <TextInput style={styles.input}
            ref="name"
            selectionColor="#ffffff"
            underlineColorAndroid="#ffffff"
            onFocus={this._onPressButton}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            placeholder="What's your name?"
            placeholderTextColor="#ffffff"
          />
          <TextInput style={styles.input}
            ref="postal"
            selectionColor="#ffffff"
            underlineColorAndroid="#ffffff"
            onFocus={this._onPressButton}
            onChangeText={(postal) => this.setState({postal})}
            value={this.state.postal}
            placeholder="What's your postal code?"
            placeholderTextColor="#ffffff"
          />

          <TouchableNativeFeedback
            onPress={Actions.home}
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
