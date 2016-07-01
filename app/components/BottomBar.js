'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

class BottomButtons extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('red')}
        delayPressIn={0}>
        <View style={{flex: 1}}>
          {this.props.children}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

class BottomBar extends Component {

  render() {
      return (
        <View style={styles.bottomBar}>
          <View style={styles.bottomBarInner}>

            <BottomButtons>
              <Icon name="home" size={25} color="#ffffff" style={[styles.bottomBarButtons, styles.active]} />
            </BottomButtons>
            <BottomButtons>
              <Icon name="comment" size={25} color="#ffffff" style={[styles.bottomBarButtons, this.props.isActive && styles.active]} />
            </BottomButtons>
            <BottomButtons>
              <Icon name="calendar" size={25} color="#ffffff" style={[styles.bottomBarButtons, this.props.isActive && styles.active]} />
            </BottomButtons>
            <BottomButtons>
              <Icon name="cog" size={25} color="#ffffff" style={[styles.bottomBarButtons, this.props.isActive && styles.active]} />
            </BottomButtons>

          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: '#fe7b2a'
  },
  bottomBarInner: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomBarButtons: {
    height: 50,
    backgroundColor: '#fdac2b',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})

module.exports = BottomBar
