import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


class Home extends Component {

  handleRequest() {
    // This request will only succeed if the Authorization header
    // contains the API token
    axios
      .get('/auth/logout/')
      .then(response => {
        Actions.auth()
      })
      .catch(error =>  console.log(error));
  }

  render() {
    const { buttonContainerStyle } = styles;
    return (
      <View style={buttonContainerStyle}>
        <Button title="Logout" onPress={this.handleRequest.bind(this)}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  buttonContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});

export default Home;
