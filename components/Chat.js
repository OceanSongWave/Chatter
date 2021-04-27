import React, { Component } from "react";
import { View, Platform, KeyboardAvoidingView } from "react-native";


export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    let name = this.props.route.params.name;
    let color = this.props.route.params.color;
    this.props.navigation.setOptions({ title: name });

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: color,
        }}
      >
      </View>
    );
  }
}