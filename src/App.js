import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import music_data from './music-data.json';

import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';


export default function App() {
  const [list, setList] = useState(music_data)

  const renderSong = ({ item }) => <SongCard song={item} />;

  const renderSeperator = () => <View style={styles.seperator} />

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    })

    setList(filteredList);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={(item) => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  seperator: {
    borderWidth: 0.65,
    borderColor: '#e0e0e0'
  }
})

