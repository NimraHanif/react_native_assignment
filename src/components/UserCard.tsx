import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// This shape matches the fields JSONPlaceholder's /users endpoint returns
export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: { name: string };
};

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.detail}>{user.email}</Text>
      <Text style={styles.detail}>{user.phone}</Text>
      <Text style={styles.company}>{user.company.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 14,
    marginHorizontal: 16,
    marginVertical: 6,
  },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  detail: { fontSize: 14, color: '#555' },
  company: { fontSize: 13, color: '#888', marginTop: 4, fontStyle: 'italic' },
});