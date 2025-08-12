import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Capra-Nack</Text>
      <Text style={styles.text}>
        We provide top-notch digital solutions including web development, mobile apps, branding, and video content.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, justifyContent: 'center', backgroundColor: '#6A0DAD' },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#eee',
    lineHeight: 26,
    textAlign: 'center',
  },
});
