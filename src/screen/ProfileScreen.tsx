import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Counter from '../components/Counter';
import { useData } from '../context/DataContext';

export default function ProfileScreen() {
  const { users, loading } = useData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      {loading ? (
        <Text style={styles.info}>Loading user count...</Text>
      ) : (
        <Text style={styles.info}>Total users loaded: {users.length}</Text>
      )}

      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 14, color: '#555', marginBottom: 20 },
});