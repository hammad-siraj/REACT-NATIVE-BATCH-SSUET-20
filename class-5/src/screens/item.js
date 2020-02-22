import React from 'react';
import {View, Button, Text} from 'react-native';

const ITEMS = [
  {
    id: 0,
    name: 'TOYS',
    items: ['ball', 'bat', 'football'],
  },
  {
    id: 1,
    name: 'BOOKS',
    items: ['BOOK-1', 'BOOK-2', 'BOOK-3'],
  },
  {
    id: 2,
    name: 'GROCERY',
    items: ['rice', 'sugar', 'milk'],
  },
];

export default function Item(props) {
  return (
    <>
      {console.log(props)}
      {ITEMS.map(obj => (
        <View key={obj.id} style={{justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>{obj.name}</Text>
          <Button
            title="SHOW MORE"
            onPress={() =>
              props.navigation.navigate('ITEM_LIST', {
                itemsArr: obj.items,
              })
            }
          />
          <Button
            title="UPDATE TITLE"
            onPress={() =>
              props.navigation.setOptions({
                title: 'Updated!',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              })
            }
          />
        </View>
      ))}
    </>
  );
}
