'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

class ChatComposer extends Component {

  render() {
      return (
        <View style={styles.bottomBar}>
          <View style={styles.bottomBarInner}>

            <TextInput style={styles.composer}
              ref="composer"
              selectionColor="#ffffff"
              underlineColorAndroid="#ffffff"
              onChangeText={ (message) => {this.setState({message})} }
            />

            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('red')}
              delayPressIn={0}>
              <View>
                <Icon name="paper-plane" size={20} color="#fdac2b" style={styles.sendButton} />
              </View>
            </TouchableNativeFeedback>

          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  bottomBarInner: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  sendButton: {
    height: 50,
    width: 50,
    backgroundColor: 'transparent',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  composer: {
    backgroundColor: '#fefefe',
    padding: 5,
    flex: 1,
    borderRadius: 100,
    margin: 10,
    marginRight: 0,
  }
})

module.exports = ChatComposer
