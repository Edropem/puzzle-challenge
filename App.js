import React from 'react';
import {
  View,
} from 'react-native';
import Carousel from './components/Carousel';
import apiCall from './fake-api'

const images = apiCall

export default function App() {

  return (
    <View style={{top: 150}}>
      <Carousel blocks={images} />
    </View>
  );
}

