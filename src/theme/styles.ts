import {StyleSheet, Platform} from 'react-native';
import fonts from './fonts';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgColor,
  },
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  m1: {
    margin: 10,
  },
  m2: {
    margin: 20,
  },
  h1: {
    fontSize: fonts.fontSizeH1,
  },
  h2: {
    fontSize: fonts.fontSizeH2,
  },
  h3: {
    fontSize: fonts.fontSizeH3,
  },
  h4: {
    fontSize: fonts.fontSizeH4,
  },
  h5: {
    fontSize: fonts.fontSizeH5,
  },
  h6: {
    fontSize: fonts.fontSizeH6,
  },
  fontFamily:
    Platform.OS === 'android'
      ? {
          fontFamily: 'get_schwifty',
        }
      : {},
  alignSelf: {
    alignSelf: 'center',
  },
});
