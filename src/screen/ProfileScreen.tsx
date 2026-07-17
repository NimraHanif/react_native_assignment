import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Counter from '../components/Counter';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
