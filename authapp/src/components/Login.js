import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginOrCreateForm from './common/LoginOrCreateForm';


class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoginOrCreateForm />
      </View>
    );
  }
}

export default Login;
