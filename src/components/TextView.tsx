import React from 'react';
import {Text} from 'react-native';
import {styles} from '../theme';

export const TextView = (props: any) => {
  return <Text style={[props.textStyle, styles.fontFamily]} {...props} />;
};
