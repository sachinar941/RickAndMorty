import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextView } from '../components/TextView';
import { colors, styles } from './../theme';

export const Episodes = () => {

    return (
        <View style={styles.container}>
            <Image style={componentStyles.rick} source={require('../assets/images/rick.png')}/>
            <TextView textStyle={componentStyles.holdMsg}>Let him join first so he can complete this screen</TextView>
        </View>
    );
};

const componentStyles = StyleSheet.create({
    rick: {
        height: 120,
        width: 120,
    },
    holdMsg: {
        color: colors.primary,
        fontSize: 24,
        margin: 20,
        lineHeight: 40,
        textAlign: 'center',
    },

});
