//LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  const handleOpenApple = () => {
    alert('Opening Apple...');
  };

  const handleOpenGoogle = () => {
    alert('Opening Google...');
  };

  const handleOpenFacebook = () => {
    alert('Opening Facebook...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading1}>Jobizz</Text>
        <Text style={styles.heading2}>Welcome Back👋</Text>
        <Text style={styles.heading3}>Let's log in. Apply to jobs!!</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>or continue with</Text>
        <View style={styles.separatorLine} />
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={handleOpenApple}>
          <Image source={require('../assets/one.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={handleOpenGoogle}>
          <Image source={require('../assets/two.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={handleOpenFacebook}>
          <Image source={require('../assets/three.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.lastTextBox}>
        <Text style={styles.lastText}>Haven't create an account? <Text style={styles.register}>Register</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  headingContainer: {
    position: 'absolute',
    top: 90,
    left: 20,
    alignItems: 'flex-start',
  },
  heading1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007acc',
  },
  heading2: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  heading3: {
    fontSize: 12,
    marginTop: 10,
    color: '#666',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007acc',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 30,
    width: '100%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    bottom:200,
    opacity:0.7
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#666',
    fontSize: 14,
    fontWeight: 'bold',
    opacity: 0.6
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    bottom:200
  },
  iconButton: {
    alignItems: 'center',
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  lastTextBox: {
    position: 'absolute',
    bottom: 130,
  },
  lastText: {
    opacity: 0.4,
  },
  register: {
    color: '#006994',
  },
});

export default LoginScreen;
