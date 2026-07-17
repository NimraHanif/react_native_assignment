import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import apiClient from '../api/apiClient';
import UserCard, { User } from '../components/UserCard';

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // The actual API call — reused for both initial load AND pull-to-refresh
  const fetchUsers = async () => {
    try {
      setError(null);
      const response = await apiClient.get<User[]>('/users');
      setUsers(response.data);
    } catch (err) {
      setError('Something went wrong while fetching users. Please try again.');
    }
  };

  // Runs once when the screen first mounts
  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      await fetchUsers();
      setLoading(false);
    };
    loadInitialData();
  }, []);

  // Runs when the user pulls down to refresh
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchUsers();
    setRefreshing(false);
  }, []);

  // --- Loading state ---
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2ecc71" />
        <Text style={styles.loadingText}>Loading users...</Text>
      </View>
    );
  }

  // --- Error state ---
  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  // --- Success state ---
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <UserCard user={item} />}
      contentContainerStyle={styles.listContent}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 10, color: '#555' },
  errorText: { color: '#e74c3c', fontSize: 16, textAlign: 'center', paddingHorizontal: 20 },
  listContent: { paddingVertical: 10 },
});