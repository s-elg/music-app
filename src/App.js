import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import music_data from './music-data.json';


export default function App() {



  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList 
            data = {music_data}
            renderItem = {({item}) => <Text>{item.title}</Text>}
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

