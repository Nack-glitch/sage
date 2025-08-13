import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/placeholder.jpg")} style={styles.heroImage} />
      <Text style={styles.title}>Welcome to My Portfolio</Text>
      <Text style={styles.subtitle}>React Native Developer | Designer</Text>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.button}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Projects")} style={styles.button}>
          <Text style={styles.buttonText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Contact")} style={styles.button}>
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  heroImage: { width: 200, height: 200, borderRadius: 100, marginBottom: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 18, color: "gray", marginBottom: 20 },
  buttons: { flexDirection: "row", gap: 10 },
  button: { backgroundColor: "black", padding: 15, borderRadius: 10 },
  buttonText: { color: "white", fontWeight: "bold" },
});
