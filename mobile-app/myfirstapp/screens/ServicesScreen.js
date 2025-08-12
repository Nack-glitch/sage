import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const SERVICES = [
  { id: '1', title: 'Website Development', description: 'Responsive websites, e-commerce' },
  { id: '2', title: 'Mobile Apps', description: 'iOS & Android apps (React Native)' },
  { id: '3', title: 'Video Editing', description: 'Promo videos, ads, YouTube content' },
  { id: '4', title: 'Branding & Design', description: 'Logo, identity, print' },
];

export default function ServicesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Our Services</Text>
      {SERVICES.map(service => (
        <TouchableOpacity
          key={service.id}
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => alert(`You tapped ${service.title}`)}
        >
          <Text style={styles.cardTitle}>{service.title}</Text>
          <Text style={styles.cardDesc}>{service.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6A0DAD',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#F3E8FF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#6A0DAD',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4B0082',
  },
  cardDesc: {
    marginTop: 6,
    fontSize: 16,
    color: '#4B0082',
  },
});
