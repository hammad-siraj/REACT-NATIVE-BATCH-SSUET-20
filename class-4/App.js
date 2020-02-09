import React, {Component} from 'react';
import {
  Text,
  View,
  Picker,
  ActivityIndicator,
  Button,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import REDUX from './public/REDUX.png';
import {ItemList} from './src/itemList';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import Item from './src/item';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       language: '',
//       dataFetch: false,
//       isLoading: true,
//       isModelOpen: false,
//     };
//   }

//   handleData = () => {
//     setTimeout(() => {
//       this.setState({isLoading: false, dataFetch: !this.state.dataFetch});
//     }, 2000);
//   };

//   handleModal = () => {
//     this.setState({isModelOpen: true});
//   };

//   render() {
//     return (
//       <>
//         <View>
//           <Text>PICKER Component</Text>
//           <Picker
//             selectedValue={this.state.language}
//             onValueChange={itemValue => this.setState({language: itemValue})}>
//             <Picker.Item label="Javascript" value="javascript" />
//             <Picker.Item label="Dart" value="dart" />
//           </Picker>
//           <Button title="Get data" onPress={() => this.handleData()} />
//           <ActivityIndicator
//             size={100}
//             color="blue"
//             animating={this.state.dataFetch}
//           />
//           <Button title="OPEN MODAL" onPress={() => this.handleModal()} />

//           <Modal visible={this.state.isModelOpen} animated={'fade-out'}>
//             <Text>MODAL OPEN</Text>
//           </Modal>
//           {/*
//           <Image
//             onLoadStart={() => alert('loading')}
//             onLoadEnd={() => alert('loading end')}
//             source={REDUX}
//             // source={{uri:""}}
//             resizeMode="cover"
//             style={{height: 300, width: 400}}
//           />

//           <ImageBackground
//             source={REDUX}
//             resizeMode="cover"
//             style={{height: 300, width: 400}}>
//             <Text>{this.state.isLoading ? 'hello' : 'no image'}</Text>
//           </ImageBackground>
//  */}

//           <Text></Text>
//           <ItemList />
//           <Item />
//         </View>
//       </>
//     );
//   }
// }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ITEM" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();

export default App;
