import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const heroes = [
  { name: 'Knight', level: 1 },
  { name: 'Wizard', level: 1 },
  { name: 'Giant', level: 1 },
  { name: 'Bandit', level: 1 },
  { name: 'Barbarian', level: 1 },
  { name: 'Golem', level: 1 },
];

export default function HeroCollectionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>HERO COLLECTION</Text>
      <FlatList
        data={heroes}
        keyExtractor={(item) => item.name}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.name}</Text>
            <Text style={styles.level}>Level {item.level}</Text>
            <Text style={styles.progress}>0/2</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#e6f0fa' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: '#cce6ff', padding: 10, margin: 5, borderRadius: 10, flex: 1, alignItems: 'center' },
  level: { fontSize: 12, fontWeight: 'bold' },
  progress: { fontSize: 12, color: '#ff9900' },
});
