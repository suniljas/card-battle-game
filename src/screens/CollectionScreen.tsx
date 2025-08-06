import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import cards from '../../data/cards.json';

export default function CollectionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Card Collection</Text>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name} - Power: {item.power}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  }
});
