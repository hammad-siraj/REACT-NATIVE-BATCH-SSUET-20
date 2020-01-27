import React, {Component} from 'react';
import {Text, Button, StyleSheet, View} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'hammad',
    };
  }
  changeName = () => {
    let {name} = this.state;
    // name = 'hammad siraj'; wrong way

    this.setState({
      name: 'hammad siraj',
    });

    // alert(this.state.name);
  };

  render() {
    let {name} = this.state;
    return (
      <>
        <View style={styles.container}>
          <Text style={[styles.text,styles.color]}>{`hello ${name}`}</Text>
          <Button title="CHANGE NAME" onPress={this.changeName} />
        </View>
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
  color:{
    color:"yellow"
  }
});
// export const App = () => {
//   return (
//     <>
//       <Text>HELLO WORLD</Text>

//       <Text>hello world 2</Text>
//     </>
//   );
// };

//  const App2 = ()=>{
//   return(
//     <Text>hello world</Text>
//   )
// }

//  export default App2;
