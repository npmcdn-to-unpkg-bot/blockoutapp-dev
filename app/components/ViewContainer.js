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
    }
    if(this.props.topbar === "true") {
      return (
        <LinearGradient style={styles.topBar} colors={['#fdac2b', '#fe7b2a']}>
          {this.props.children}
        </LinearGradient>
      )
    } else {
      return (
        <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between',alignItems: 'stretch',}}>
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
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
})

module.exports = ViewContainer
