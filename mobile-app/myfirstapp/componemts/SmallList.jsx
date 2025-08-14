// components/SmallList.jsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function SmallList({ items }) {
  return (
    <ScrollView style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cce5ff',
    marginVertical: 5,
    borderRadius: 10,
  },
});
