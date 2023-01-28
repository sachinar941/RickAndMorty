import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {colors, styles} from './../theme';
import {getCharacters} from 'rickmortyapi';
import {ProfileCard} from '../components';
import {Character, Info} from '../utils/interface';
import {TextView} from '../components/TextView';

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [info, setInfo] = useState<Info>({current: 0, pages: 1});

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCharacters = async () => {
    if (info.current < info.pages) {
      setLoader(true);
      const response = await getCharacters({page: info.current + 1});
      const data = response.data;
      if (response.status === 200 && data && data?.results) {
        setCharacters(characters.concat(data?.results));
        setInfo({
          ...info,
          current: info.current + 1,
          pages: data?.info?.pages ? data.info.pages : 0,
        });
        setLoader(false);
      } else {
        setLoader(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={characters}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ProfileCard character={item} />}
        // eslint-disable-next-line react/no-unstable-nested-components
        ListHeaderComponent={() => (
          <TextView textStyle={componentStyles.title}>Rick And Morty</TextView>
        )}
        onEndReached={fetchCharacters}
        onEndReachedThreshold={0.5}
      />
      {loader && <ActivityIndicator color={colors.primary} size={'small'} />}
    </SafeAreaView>
  );
};

const componentStyles = StyleSheet.create({
  title: {
    margin: 20,
    color: colors.light,
    ...styles.h2,
    alignSelf: 'center',
  },
});
