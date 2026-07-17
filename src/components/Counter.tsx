import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

export default function Counter() {
  // useState<number> tells TypeScript this state will ALWAYS hold a number
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, [count]);

  const increment = (): void => {
    setCount((prev) => prev + 1);
  };

  const decrement = (): void => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.row}>
        <CustomButton
          label="−"
          onPress={decrement}
          color="#e74c3c"
          disabled={count === 0}
        />
        <CustomButton label="+" onPress={increment} color="#2ecc71" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
  },
});