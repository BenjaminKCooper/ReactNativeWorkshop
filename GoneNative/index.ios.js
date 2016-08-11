import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';



class GoneNative extends Component {
  render() {
    return (
      // <Text style={{color: 'red'}}>{"\n"}Hello world!</Text>
      <View>
  <Text style={redStyle}>{"\n"}Hello world!</Text>
  <Text style={redStyle}>Hey there</Text>
  <Text style={redStyle}>Its a great day</Text>
  <Text style={redStyle}>truly great</Text>
</View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

const redStyle = {
  color: 'red'
}

AppRegistry.registerComponent('GoneNative',()=>GoneNative);
