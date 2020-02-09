import React from 'react';
import {Text, Button} from 'react-native';

export function ItemList(props) {
  return (
    <>
      {console.log('item list', props)}
      <Text>Item list</Text>
      <Button
        title="go to item"
        onPress={() => props.navigation.navigate('ITEM')}
      />
    </>
  );
}
