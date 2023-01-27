import React from 'react'
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import { colors, fonts, styles } from './../theme';
import { Character } from '../utils/interface';
import { TextView } from './TextView';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

export const ProfileCard = (props: {character: Character}) => {
    const { character } = props;

    return (
        <View style={componentStyle.card}>
            <Image source={{uri: character?.image}} style={componentStyle.profile} />
            <Text style={componentStyle.name}>{character.name}</Text>
            <View style={styles.flexRow}>
                <Text style={componentStyle.species}>{character.species}</Text>
                <Text style={componentStyle.species}>{character.species}</Text>
            </View>
        </View>
    )
}

const componentStyle = StyleSheet.create({
    name: {
        fontSize: fonts.fontSizeH6,
        marginVertical: 5,
    },
    species: {
        color: colors.secondary
    },
    card: {
        padding: 10,
        elevation: 2,
        margin: 5,
        borderRadius: 10,
        ...styles.centerContent,
        maxWidth: SCREEN_WIDTH/3 - 10,
        backgroundColor: colors.primary,
    },

    profile: {
        height: 100,
        width: (SCREEN_WIDTH/3)-30,
        borderRadius: 10,
        alignSelf: 'center',
        resizeMode: 'contain'
    }
});
