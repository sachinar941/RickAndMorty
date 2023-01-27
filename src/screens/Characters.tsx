import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { colors, styles } from './../theme';
import { getCharacters } from 'rickmortyapi'
import { ProfileCard } from '../components';
import { Character, Info } from '../utils/interface';
import { TextView } from '../components/TextView';

export const Characters = () => {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [loader, setLoader] = useState<boolean>(true);
    let info: Info = {current: 0, pages: 1};

    useEffect(() => {
        fetchCharacters()
    }, []);

    const fetchCharacters = async () => {
        if(info.current < info.pages){
            setLoader(true);
            const response = await getCharacters({ page: info.current});
            console.log(response?.data)
            const data = response.data;
            if(response.status == 200 && data && data?.results){
                setCharacters(characters.concat(data?.results))
                info = {...info, current: info.current+1, pages: data?.info?.pages? data.info.pages : 0}
                setLoader(false);
            }else{
                setLoader(false);
            }
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={characters}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => <ProfileCard character={item}/>}
                ListHeaderComponent={()=> <TextView textStyle={componentStyles.title}>Rick And Morty</TextView>}
                onEndReached={fetchCharacters}
                onEndReachedThreshold={0.5}
            />
            {loader && <ActivityIndicator style={componentStyles.loader} color={colors.primary} size={'small'}/>}
        </View>
    );
};

const componentStyles = StyleSheet.create({
    title: {
        margin: 20,
        color: 'white',
        ...styles.h3,
        alignSelf:'center',
    },
    loader: {
        margin: 20,
    },
});