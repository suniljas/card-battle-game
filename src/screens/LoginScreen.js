import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CARD CLASH</Text>
      <Text style={styles.subtitle}>LEGENDS ARENA</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('DeckBuilder')}>
        <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4c2d7a', alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 32, color: '#FFD700', fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#fff', marginBottom: 40 },
  input: { width: '100%', backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 10 },
  forgot: { color: '#87CEFA', alignSelf: 'flex-end', marginBottom: 20 },
  loginBtn: { backgroundColor: '#1E90FF', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center', marginBottom: 10 },
  loginText: { color: '#fff', fontWeight: 'bold' },
  signupBtn: { backgroundColor: '#FFD700', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center' },
  signupText: { color: '#000', fontWeight: 'bold' },
});
