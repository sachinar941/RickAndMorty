import React from 'react';
import { Text } from 'react-native';
import { colors } from '../theme';

export const TextView = (props: any) => {
  return (
    <Text style={[{ fontFamily: 'get_schwifty'}, props.textStyle]} {...props} />
  );
};