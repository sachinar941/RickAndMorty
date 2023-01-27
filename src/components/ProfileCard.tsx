import React from 'react'
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import { colors, fonts, styles } from './../theme';
import { Character } from '../utils/interface';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

export const ProfileCard = (props: {character: Character}) => {
    const { character } = props;

    return (
        <View key={character.id} style={componentStyle.card}>
            <Image source={{uri: character?.image}} style={componentStyle.profile} />
            <Text numberOfLines={1} style={componentStyle.name}>{character.name}</Text>
            <View style={[styles.flexRow, styles.centerContent]}>
                <View style={componentStyle.dot}/>
                <Text style={componentStyle.species}>{character.species}</Text>
                <View style={componentStyle.dot}/>
                <Text style={componentStyle.status}>{character.status}</Text>
            </View>
        </View>
    )
}

const componentStyle = StyleSheet.create({
    name: {
        fontSize: fonts.fontSizeH5,
        textAlign: 'center',
        marginVertical: 5,
        color: colors.secondary,
        fontWeight: 'bold'
    },
    species: {
        fontSize: fonts.fontSizeH6,
        textAlign: 'center',
        marginRight: 5,
        color: colors.secondary,
    },
    status: {
        fontSize: fonts.fontSizeH6,
        textAlign: 'center',
        color: colors.secondary,
    },
    dot: {
        height: 4,
        width: 4, 
        marginRight: 5,
        borderRadius: 2,
        backgroundColor: colors.secondary
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
