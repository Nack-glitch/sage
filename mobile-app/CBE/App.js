import { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, ScrollView, Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [fingerprintSet, setFingerprintSet] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadFingerprint = async () => {
    setLoading(true);
    const fp = await AsyncStorage.getItem("fingerprint");
    setFingerprintSet(fp === "true");
    setLoading(false);
  };


  const resetFingerprint = async () => {
    await AsyncStorage.removeItem("fingerprint");
    setFingerprintSet(false);
    Alert.alert("Reset", "Fingerprint setup reset. You can scan it again.");
  };

  const scanFingerprint = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    if (!compatible) {
      alert("Fingerprint hardware not available");
      return;
    }

    const enrolled = await LocalAuthentication.isEnrolledAsync();
    if (!enrolled) {
      alert("No fingerprints enrolled on this device");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Scan your Fingerprint",
    });

    if (result.success) {
      // Store locally
      await AsyncStorage.setItem("fingerprint", "true");
      setFingerprintSet(true);

      try {
        await fetch("https://your-backend.com/api/storeFingerprint", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: "USER_ID_HERE", fingerprintSet: true }),
        });
      } catch (error) {
        console.log("Failed to store on backend:", error);
      }

      Alert.alert("Success", "Fingerprint stored successfully!");
    } else {
      alert("Failed to scan Fingerprint");
    }
  };

  useEffect(() => {
    loadFingerprint();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fingerprint Setup</Text>

      <Button
        title={fingerprintSet ? "Fingerprint ✅" : "Setup Fingerprint"}
        onPress={scanFingerprint}
      />
      <View style={{ height: 20 }} />
      <Button title="🔄 Reset Fingerprint" onPress={resetFingerprint} />

      <View style={{ height: 40 }} />
      <Text style={styles.infoTitle}>Stored Fingerprint Info:</Text>
      <Text>{fingerprintSet ? "Fingerprint is set ✅" : "Fingerprint not set ❌"}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 30 },
  infoTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});
