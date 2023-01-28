import {ToastAndroid, Alert, Platform} from 'react-native';

export const actions = {
  toast(text: string) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(text, ToastAndroid.LONG);
    } else {
      Alert.alert(text);
    }
  },
};
