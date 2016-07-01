'use strict'
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewContainer from '../components/ViewContainer';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

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

          <TopBar>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('red')}
              delayPressIn={0}>
              <View>
                  <Icon name="chevron-left" size={25} color="#ffffff" style={styles.topBarButtons} />
              </View>
            </TouchableNativeFeedback>
            <View>
              <Text style={styles.topBarButtons}>Home</Text>
            </View>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('red')}
              delayPressIn={0}>
              <View>
                  <Icon name="ellipsis-v" size={30} color="#ffffff" style={styles.topBarButtons} />
              </View>
            </TouchableNativeFeedback>
          </TopBar>



        <TouchableNativeFeedback
          onPress={Actions.login}
          background={TouchableNativeFeedback.Ripple('red')}
          delayPressIn={0}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Back to Login</Text>
          </View>
        </TouchableNativeFeedback>

        <BottomBar />

      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({
  topBarButtons: {
    width: 50,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    color: '#ffffff',
  },

  bottomBarInner: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomBarButtons: {
    height: 50,
    backgroundColor: '#ff0000',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  logo: {
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
  button: {
    borderWidth: 1,
    borderColor: '#ffffff',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
  },
  buttonText: {
    margin: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#ffffff',
  },
});

module.exports = Home;
