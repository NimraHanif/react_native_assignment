import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// This is a "type" — a contract that says exactly what props this component expects
type CustomButtonProps = {
  label: string;
  onPress: () => void;   // a function that takes nothing and returns nothing
  color: string;
  disabled?: boolean;    // the "?" means this prop is OPTIONAL
};

export default function CustomButton({ label, onPress, color, disabled }: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? '#ccc' : color },
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});