import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      <View style={styles.spacer} />

      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <View style={styles.spacer} />

      <Button title="Go to Users" onPress={() => navigation.navigate('Users')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  spacer: { height: 12 },
});