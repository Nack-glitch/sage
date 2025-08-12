import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.centered}>
      <Text style={styles.heading}>About Capra-Nack</Text>
      <Text style={styles.text}>
        We specialize in web and mobile development, branding, and digital content creation.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 28, fontWeight: 'bold', color: '#6A0DAD', marginBottom: 20, textAlign: 'center' },
  text: { fontSize: 16, textAlign: 'center' },
});
