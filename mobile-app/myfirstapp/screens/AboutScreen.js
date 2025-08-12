import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Capra-Nack</Text>
      <Text style={styles.text}>
        Capra-Nack Digital Solutions specializes in creating innovative web and mobile applications, branding, and digital content.
      </Text>
      <Text style={styles.text}>
        Our mission is to empower businesses and individuals through technology and creativity.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, justifyContent: 'center', backgroundColor: '#6A0DAD' },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#eee',
    lineHeight: 24,
    textAlign: 'justify',
  },
});
