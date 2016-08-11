import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';



class GoneNative extends Component {
  render() {
    return (
      <Text>{"\n"}Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('GoneNative',()=>GoneNative);
