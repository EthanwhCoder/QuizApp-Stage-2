import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View>
      <Text style = {styles.text}>Welcome to your grade 9 Algebraic expression quiz!</Text>

<TouchableOpacity style = {styles.button} onPress={this.props.navigation.navigate('Question1Screen')}>
<Text style = {styles.buttonText}>Start Quiz</Text>
</TouchableOpacity>
</View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
fontSize: 20,
alignSelf: 'center',
marginTop: 150,

  },
  button:{
        alignItems: "center",
    backgroundColor: "cyan",
marginTop: 50,
marginLeft: 100,
width: 120,
height: 50,
borderRadius: 100,
  },
  buttonText:{
    alignSelf: 'center',
    fontSize: 22,
    marginTop: 9,
  },
});
