import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ActivityIndicator, Text, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getEpisode, getLocation } from 'rickmortyapi';
import { TextView } from '../components/TextView';
import { Character } from '../utils/interface';
import { colors, styles, fonts } from './../theme';

const url = 'https://rickandmortyapi.com/api/';
const { width: SCREEN_WIDTH } = Dimensions.get('screen');

export const Profile = ({ route, navigation } : any) => {

    const [profile, setProfile] = useState<any>({});
    const [loader, setLoader] = useState<any>({});
    const { character, location, origin, episodes } = profile;

    useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
        return () => {
            navigation.getParent()?.setOptions({ tabBarStyle: { display: 'flex', backgroundColor: colors.secondary, borderTopWidth: 0 } });
        };
    }, []);

    useEffect(() => {
        const {character} = route?.params;
        fetchCharacterDetail(character);
    }, []);

    const fetchCharacterDetail = async (character: Character) => {
        setLoader(true);
        let location: any, origin : any, episodes: any;
        const list = character.episode.map(item => parseInt(item?.replace(url + 'episode/', '')));
        const locationValue = parseInt(character?.location?.url?.replace(url + 'location/', ''));
        const originValue = parseInt(character?.origin?.url?.replace(url + 'location/', ''));
        if (list.length > 0)
            {episodes = await getEpisode(list);}
        if (locationValue)
            {location = await getLocation([locationValue]);}
        if (originValue)
            {origin = await getLocation([originValue]);}
        setProfile({character, location: location?.data, origin: origin?.data, episodes: episodes?.data});
        setLoader(false);
    };

    return (
        <View style={[styles.flex1, {backgroundColor: colors.bgColor}]}>
            {loader ?
                <View style={[styles.centerContent, styles.flex1]}>
                    <ActivityIndicator size={'large'}/>
                </View>
            :
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{margin: 20}}>
                    <View style={[styles.flexRow, componentStyle.profileView]}>
                        <Image source={{uri: character?.image}} style={componentStyle.profile} />
                        <View style={[styles.flex1, styles.centerContent]}>
                            <TextView textStyle={componentStyle.name}>{character?.name}</TextView>
                            <View style={[styles.flexRow, styles.centerContent, styles.m1]}>
                                <Text style={componentStyle.subTitle}>{character?.species}</Text>
                                <View style={componentStyle.dot}/>
                                <Text style={componentStyle.subTitle}>{character?.gender}</Text>
                                <View style={componentStyle.dot}/>
                                <Text style={componentStyle.subTitle}>{character?.status}</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={componentStyle.heading}>Current Location</Text>
                    <View style={[styles.centerContent, componentStyle.sectionView]}>
                        <Text style={[componentStyle.name, {marginTop: 0}]}>{location?.name ? location?.name : 'Unknown'}</Text>
                        <View style={[styles.flexRow, styles.centerContent, styles.m1]}>
                            <Text style={componentStyle.subTitle}>{'dimension: ' + (location?.dimension ? location?.dimension : 'Unknown')}</Text>
                            <View style={componentStyle.dot}/>
                            <Text style={componentStyle.subTitle}>{'Residents: ' + (location?.residents?.length ? location?.residents?.length : 'Unknown')}</Text>
                        </View>
                    </View>
                    <Text style={componentStyle.heading}>Origin Location</Text>
                    <View style={[styles.centerContent, componentStyle.sectionView]}>
                        <Text style={[componentStyle.name, {marginTop: 0}]}>{origin?.name ? origin?.name : 'Unknown'}</Text>
                        <View style={[styles.flexRow, styles.centerContent, styles.m1]}>
                            <Text style={componentStyle.subTitle}>{'dimension: ' + (origin?.dimension ? origin?.dimension : 'Unknown')}</Text>
                            <View style={componentStyle.dot}/>
                            <Text style={componentStyle.subTitle}>{'Residents: ' + (origin?.residents?.length ? origin?.residents?.length : 'Unknown')}</Text>
                        </View>
                    </View>
                    <Text style={[componentStyle.heading, {alignSelf: 'center'}]}>{'Was In Episodes (' + (episodes.length ? episodes.length : '0') + ')'}</Text>
                    <View style={[componentStyle.mapView, styles.centerContent]}>
                        {episodes.length > 0 ?
                            episodes.map((episode: any) => {
                                return (
                                    <View key={episode.id} style={[styles.centerContent, componentStyle.episode]}>
                                        <Text style={componentStyle.subTitle}>{episode?.episode}</Text>
                                        <Text style={[componentStyle.subTitle, styles.h6]}>{episode?.name}</Text>
                                    </View>
                                );
                            })
                        :
                            null
                        }
                    </View>
                </ScrollView>
            }
        </View>
    );
};

const componentStyle = StyleSheet.create({
    sectionView: {
        elevation: 5,
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 10,
    },
    profileView: {
        elevation: 5,
        backgroundColor: colors.secondary,
        padding: 20,
        borderRadius: 10,
    },
    mapView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 30,
    },
    heading: {
        marginTop: 20,
        marginBottom: 5,
        fontSize: fonts.fontSizeH6,
        color: colors.muted,
    },
    episode: {
        elevation: 5,
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    name: {
        fontSize: fonts.fontSizeH3,
        textAlign: 'center',
        marginTop: 20,
        lineHeight: 30,
        color: colors.light,
    },
    subTitle: {
        fontSize: fonts.fontSizeH5,
        textAlign: 'center',
        color: colors.light,
    },
    profile: {
        height: (SCREEN_WIDTH / 3),
        width: (SCREEN_WIDTH / 3),
        borderRadius: (SCREEN_WIDTH / 6),
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    dot: {
        height: 4,
        width: 4,
        marginHorizontal: 10,
        borderRadius: 2,
        backgroundColor: colors.light,
    },
});
