import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.centered}>
      <Text style={styles.heading}>Contact Us</Text>
      <Text style={styles.text}>
        Email: contact@capra-nack.com{'\n'}
        Phone: +251 123 456 789{'\n'}
        Address: Sheger, Ethiopia
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 28, fontWeight: 'bold', color: '#6A0DAD', marginBottom: 20, textAlign: 'center' },
  text: { fontSize: 16, textAlign: 'center' },
});
