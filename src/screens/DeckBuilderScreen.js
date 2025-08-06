import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const mockBattleDeck = ['Knight', 'Archer', 'Mage', 'Wizard', 'Viking', 'Paladin'];
const mockCardCollection = ['Barbarian', 'Hooded', 'Orc'];

export default function DeckBuilderScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>DECK BUILDER</Text>
      <Text style={styles.subheader}>BATTLE DECK</Text>
      <FlatList
        data={mockBattleDeck}
        keyExtractor={(item) => item}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
            <Text style={styles.level}>Level 2</Text>
          </View>
        )}
      />
      <Text style={styles.subheader}>CARD COLLECTION</Text>
      <FlatList
        data={mockCardCollection}
        keyExtractor={(item) => item}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
            <Text style={styles.add}>+ Add</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('HeroCollection')}>
        <Text style={styles.navigate}>Go to Hero Collection →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f4f4' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subheader: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
  card: { backgroundColor: '#ddd', padding: 15, margin: 5, borderRadius: 10, alignItems: 'center', flex: 1 },
  cardText: { fontWeight: 'bold' },
  level: { fontSize: 12 },
  add: { color: 'green' },
  navigate: { color: '#007BFF', textAlign: 'center', marginTop: 20 },
});
