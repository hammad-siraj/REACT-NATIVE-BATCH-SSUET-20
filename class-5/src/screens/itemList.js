import React from 'react';
import {Text, View} from 'react-native';

export default function ItemList(props) {
  return (
    <>
      {console.log('item list', props.route.params.itemsArr)}
      <View>
        {props.route.params.itemsArr.map(val => (
          <Text style={{textAlign: 'center'}}>{val}</Text>
        ))}
      </View>
    </>
  );
}
