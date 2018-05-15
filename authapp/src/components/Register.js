import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginOrCreateForm from './common/LoginOrCreateForm';

class Register extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoginOrCreateForm create/>
      </View>
    );
  }
}

export default Register;
