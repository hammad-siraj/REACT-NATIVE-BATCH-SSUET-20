import React from 'react';
import {Text, View} from 'react-native';

export default function ChildComponent({appData}) {
  return (
    <>
      {console.log(appData)}
      <Text>{appData ? `hello` : `not found`}</Text>
    </>
  );
}
