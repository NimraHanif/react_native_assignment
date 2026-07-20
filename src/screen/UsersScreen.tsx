import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Button,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import UserCard from '../components/UserCard';
import { useData } from '../context/DataContext';

export default function UsersScreen() {
  const { users, loading, error, refetch, clearCache } = useData();

  if (loading && users.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2ecc71" />
        <Text style={styles.loadingText}>Loading users...</Text>
      </View>
    );
  }

  if (error && users.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        <Button title="Retry" onPress={refetch} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <UserCard user={item} />}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
      />
      <View style={styles.clearButton}>
        <Button title="Clear Cache" color="#e74c3c" onPress={clearCache} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 10, color: '#555' },
  errorText: { color: '#e74c3c', fontSize: 16, textAlign: 'center', marginBottom: 12 },
  listContent: { paddingVertical: 10 },
  clearButton: { padding: 16 },
});