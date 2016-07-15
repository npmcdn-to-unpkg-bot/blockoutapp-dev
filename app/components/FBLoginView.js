'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
  Example FBLoginView class
  Please note:
  - this is not meant to be a full example but highlights what you have access to
  - If you use a touchable component, you will need to set the onPress event like below
**/
class FBLoginView extends React.Component {
  static contextTypes = {
    isLoggedIn: React.PropTypes.bool,
    login: React.PropTypes.func,
    logout: React.PropTypes.func,
    props: React.PropTypes.object
    };

  constructor(props) {
      super(props);
    }

    render(){
        return (
          <TouchableNativeFeedback
            onPress={() => {
              if(!this.context.isLoggedIn){
                this.context.login()
              }else{
                this.context.logout()
              }
            }}>
            <View style={styles.buttonWrap}>
              <View style={styles.button}>
                <Icon
                  color={"#3B5998"} name={"facebook"}  size={20}>
                </Icon>
                <Text style={styles.buttonText}>
                  Login with Facebook
                </Text>
              </View>
            </View>
          </TouchableNativeFeedback>
      )
    }
}

const styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: 'transparent',
    borderColor: '#3B5998',
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#3B5998',
    marginLeft: 10,
  },
});

module.exports = FBLoginView;
