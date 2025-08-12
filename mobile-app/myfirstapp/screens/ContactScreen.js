import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit() {
    if (!name || !email || !message) {
      Alert.alert('Please fill in all fields');
      return;
    }
    Alert.alert('Thank you!', `We received your message, ${name}.`);
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.heading}>Contact Us</Text>

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
          placeholder="Your Message"
          placeholderTextColor="#aaa"
          multiline
          value={message}
          onChangeText={setMessage}
        />
        

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>

        {/* Social media icons row */}
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => Alert.alert('Facebook')}>
            <Icon name="facebook" size={40} color="#3b5998" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Alert.alert('Twitter')}>
            <Icon name="twitter" size={40} color="#00acee" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Alert.alert('Instagram')}>
            <Icon name="instagram" size={40} color="#C13584" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Alert.alert('LinkedIn')}>
            <Icon name="linkedin" size={40} color="#0077b5" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#6A0DAD' },
  scrollContainer: { padding: 30, paddingBottom: 50 },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#fff',
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4B0082',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
});
