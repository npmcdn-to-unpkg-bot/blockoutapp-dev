'use strict'
import React, { Component } from 'react';
import { Image, ListView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewContainer from '../components/ViewContainer';
import TopBar from '../components/TopBar';
import ChatComposer from '../components/ChatComposer';

class Chat extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      text: '',
      dataSource: ds.cloneWithRows(['Louis', 'Scarlett']),
    };
  }

  render() {
    return (
      <ViewContainer>

        <TopBar>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('red')}
            delayPressIn={0}
            onPress={Actions.home}>
            <View>
                <Icon name="chevron-left" size={20} color="#ffffff" style={styles.topBarButtons} />
            </View>
          </TouchableNativeFeedback>
          <View>
            <Text style={styles.topBarTitle}>#427972</Text>
          </View>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('red')}
            delayPressIn={0}>
            <View>
                <Icon name="ellipsis-v" size={20} color="#ffffff" style={styles.topBarButtons} />
            </View>
          </TouchableNativeFeedback>
        </TopBar>

        <View style={{flex: 1}}>
          <View style={styles.listOuter}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) =>
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.Ripple('red')}
                  delayPressIn={0}
                  onPress={Actions.chat}>
                  <View style={styles.row}>
                    <Text style={styles.rowInner}>
                      {rowData}
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              }
            />
          </View>
        </View>


        <ChatComposer />


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
  topBarTitle: {
    height: 50,
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    color: '#ffffff',
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

module.exports = Chat;
