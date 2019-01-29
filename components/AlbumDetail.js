import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { name, company, picture, url } = album;
  const {
    headerContentStyle,
    pictureStyle,
    pictureContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={pictureContainerStyle}>
          <Image style={pictureStyle} source={{ uri: picture }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{company}</Text>
          <Text>{name}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: picture }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  pictureStyle: {
    height: 50,
    width: 50,
  },
  pictureContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default AlbumDetail;
