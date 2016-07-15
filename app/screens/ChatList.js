'use strict'
import React, { Component } from 'react';
import { Image, ListView, StyleSheet, Text, TouchableNativeFeedback, ScrollView, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewContainer from '../components/ViewContainer';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

class ChatList extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      text: '',
      dataSource: ds.cloneWithRows(['#437972 | Meyer Home', '#310530 | HDB Hub']),
    };
  }

  render() {
    return (
      <ViewContainer>
        <TopBar>
          <View style={{paddingLeft: 20}}>
            <Text style={styles.topBarTitle}>Chat List</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('red')}
              delayPressIn={0}
              >
              <View>
                  <Icon name="comment" size={20} color="#ffffff" style={styles.topBarButtons} />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('red')}
              delayPressIn={0}>
              <View>
                  <Icon name="ellipsis-v" size={20} color="#ffffff" style={styles.topBarButtons} />
              </View>
            </TouchableNativeFeedback>
          </View>
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

      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({
  listOuter: {

  },
  row: {
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 1,
    backgroundColor: '#fefefe'
  },
  rowInner: {

  },
  topBarButtons: {
    width: 50,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    color: '#ffffff',
  },
  topBarTitle: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: 18
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

module.exports = ChatList;
