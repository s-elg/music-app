import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import music_data from './music-data.json';

import SongCard from './components/SongCard';


export default function App() {

  const renderSong = ({item}) => <SongCard song = {item} />;


  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList 
            keyExtractor={(item) => item.id}
            data = {music_data}
            renderItem = {renderSong}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

