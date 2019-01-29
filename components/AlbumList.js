import React, { Component } from 'react';
import {View, ScrollView, Alert } from 'react-native';
import AlbumDetail from './AlbumDetail'
import axios from 'axios';

class AlbumList extends Component {
  state = {
    albums : []
  }
  componentWillMount() {
    axios.get('http://www.json-generator.com/api/json/get/bVyBwSeGyG?indent=2')
    .then(response => this.setState({albums: response.data}));
  }
  renderAlbums() {
    return this.state.albums.map(album => 
    <AlbumDetail key={album.name} album={album}/>
    );
  }
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    ); 
  }
}

export default AlbumList;
