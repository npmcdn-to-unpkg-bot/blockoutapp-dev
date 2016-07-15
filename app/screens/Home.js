'use strict'
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewContainer from '../components/ViewContainer';
import ChatList from '../screens/ChatList';

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

        <ChatList />

      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({

});

module.exports = Home;
