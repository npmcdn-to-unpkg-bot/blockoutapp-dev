'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class TopBar extends Component {
  render() {
      return (
        <View style={styles.topBar}>
          <LinearGradient style={styles.topBarInner} colors={['#fdac2b', '#fdac2b']}>
            {this.props.children}
          </LinearGradient>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  topBar: {
    height: 50,
  },
  topBarInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
})

module.exports = TopBar
