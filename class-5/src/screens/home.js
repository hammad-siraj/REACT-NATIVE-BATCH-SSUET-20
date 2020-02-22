import React from 'react';
import {Text, View, Button} from 'react-native';
export default function Home(props) {
  return (
    <>
      {console.log('HOME', props)}
      <View>
        <Text>HOME</Text>
        <Button
          title="GO TO ITEM PAGE"
          onPress={() => props.navigation.navigate('ITEMS')}
        />
        <Button
          title="OPEN DRAWER"
          onPress={() => props.navigation.openDrawer()}
        />
        <Text></Text>
        <Button
          title="CLOSE DRAWER"
          onPress={() => props.navigation.closeDrawer()}
        />
      </View>
    </>
  );
}
