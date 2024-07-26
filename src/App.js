import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import music_data from './music-data.json';

import SongCard from './components/SongCard';


export default function App() {
  const renderSong = ({item}) => <SongCard song = {item} />;

  const renderSeperator = () => <View style = {styles.seperator} />

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList 
            keyExtractor={(item) => item.id}
            data = {music_data}
            renderItem = {renderSong}
            ItemSeparatorComponent={renderSeperator}
          />
        </View>
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

