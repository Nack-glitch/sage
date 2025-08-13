import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/profile.jpeg")} style={styles.image} />
      <Text style={styles.name}>Naol Gudeta</Text>
      <Text style={styles.bio}>
        MERN stack developer passionate about creating interactive apps with smooth animations.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20 },
  image: { width: 180, height: 180, borderRadius: 90, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  bio: { fontSize: 16, textAlign: "center", color: "gray" },
});
