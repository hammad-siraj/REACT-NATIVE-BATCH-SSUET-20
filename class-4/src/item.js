import React from 'react';
import {Text} from 'react-native';

export default function Item(props) {
  return (
    <>
      {console.log('item comp', props)}
      <Text> item component</Text>
    </>
  );
}
