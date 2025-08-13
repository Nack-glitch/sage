import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function ProjectsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Projects</Text>
      <View style={styles.projectCard}>
        <Image source={require("../assets/placeholder.jpg")} style={styles.projectImage} />
        <Text style={styles.projectName}>Project 1</Text>
      </View>
      <View style={styles.projectCard}>
        <Image source={require("../assets/placeholder.jpg")} style={styles.projectImage} />
        <Text style={styles.projectName}>Project 2</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  projectCard: { marginBottom: 20, alignItems: "center" },
  projectImage: { width: 300, height: 180, borderRadius: 15 },
  projectName: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
});
