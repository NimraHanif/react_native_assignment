import React from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import {useData} from "../context/DataContext"

export default function HomeScreen({ navigation }: any) {
  const {users, loading} = useData()

  console.log("Data ferom user api\n\n", users)
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={loading} size={"large"} color={"red"} />
      <Text style={styles.title}>Home Screen</Text>

      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      <View style={styles.spacer} />

      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <View style={styles.spacer} />

      <Button title="Go to Users" onPress={() => navigation.navigate('Users')} />
      <View style={styles.spacer} />

      <Button title="Go to Test" onPress={() => navigation.navigate('Test')} />
        <View style={styles.spacer} />
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  spacer: { height: 12 },
});