import React, {Component} from 'react';
import {
  Text,
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from 'react-native';
import ChildComponent from './src/childComponent';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: ['sameer', 'jhanzaib', 'bilal', 'ali sajjad', 'arsalan'],
      text: '',
    };
  }

  addUser = () => {
    let {text, users} = this.state;
    let userCopy = [...users];
    userCopy.push(text);

    this.setState({
      users: userCopy,
      text: '',
    });
  };

  render() {
    console.log(this.state.text);
    let {users} = this.state;
    return (
      <>
        <ScrollView onMomentumScrollBegin={() => alert('start')}>
          <View style={styles.container}>
            {users.map((user, index) => {
              return (
                <View key={index}>
                  <Text style={styles.text}>{user}</Text>
                </View>
              );
            })}
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                editable={true}
                autoCapitalize={'words'}
                placeholder={`name`}
                onChangeText={text => this.setState({text: text})}
                value={this.state.text}
              />
            </View>
            <Text></Text>
            <TouchableOpacity onPress={this.addUser}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>ADD</Text>
              </View>
            </TouchableOpacity>

            {/* <TouchableHighlight>
          <Text style={styles.text} >hello </Text>
          </TouchableHighlight>
       */}
          </View>
        </ScrollView>
      </>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  color: {
    color: 'yellow',
  },
  button: {
    backgroundColor: '#841584',
    borderWidth: 20,
    borderColor: '#841584',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 5,
    borderRadius: 50,
  },
  inputWrapper: {
    width: '100%',
  },
});
