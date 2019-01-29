import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './components/header';
import AlbumList from './components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('Project', () => App);
