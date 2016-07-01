'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class ViewContainer extends Component {

  render() {
    if(this.props.gradient === "true") {
      return (
        <LinearGradient style={styles.viewContainer} colors={['#fdac2b', '#fe7b2a']}>
          {this.props.children}
        </LinearGradient>
      )
    } else {
      return (
        <View style={styles.viewContainer}>
          {this.props.children}
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  }
})

module.exports = ViewContainer
