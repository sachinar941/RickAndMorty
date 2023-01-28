import React from 'react';
import { Text } from 'react-native';

export const TextView = (props: any) => {
  return (
    <Text style={[props.textStyle, { fontFamily: 'get_schwifty' }]} {...props} />
  );
};
