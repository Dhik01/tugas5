import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    // Here you can add the logic to handle the login process
    console.log(`Email: ${email}, Password: ${password}`);
  };
  const register = () => {
    // Here you can add the logic to handle the login process
    console.log(`register page`);
  };
  const forgotPassword = () => {
    // Here you can add the logic to handle the login process
    console.log(`recovery pasword page`);
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/imgs/icon1.png')}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#F2F2F2"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input2}
        placeholder="Password"
        placeholderTextColor="#F2F2F2"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={!isPasswordVisible}
        autoCapitalize="none"
        autoCompleteType="password"
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Ionicons
          name={isPasswordVisible ? "eye-off" : "eye"}
          size={24}
          color="#F2F2F2" style={{transform: [{ translateX: 110 }, { translateY: -23 }]}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={forgotPassword}>
      <Text style={styles.label1}>Lupa kata sandi ?</Text>
      </TouchableOpacity>
      <View style={styles.line}>
        <Text style={styles.text}>atau</Text>
      </View>
      <TouchableOpacity style={styles.button1} onPress={register}>
        <Text style={styles.buttonText1}>Buat akun baru</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  label:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
    marginLeft: 55  
  },
  label1:{
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'stretch',
    marginTop: 5
  },
  line: {
    position: 'relative',
    height: 1,
    width: '80%',
    marginVertical: 38,
    backgroundColor: '#d4d4d4'
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -28 }, { translateY: -11 }],
    backgroundColor: '#FFF',
    color: '#8b8b8b',
    paddingHorizontal: 15
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    paddingLeft: 30,
    backgroundColor: '#5AD72F',
    borderRadius: 25,
    marginBottom: 10,
    color: 'white'
  },
  input2: {
    width: '80%',
    height: 50,
    padding: 10,
    paddingLeft: 30,
    backgroundColor: '#5AD72F',
    borderRadius: 25,
    marginBottom: -15,
    color: 'white'
  },
  button: {
    width: '80%',
    backgroundColor: '#40493B',
    height: 50,
    padding: 13,
    borderRadius: 35,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
    button1: {
    width: '50%',
    backgroundColor: '#5AD72F',
    height: 50,
    padding: 13,
    borderRadius: 35,
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 10,
  },
  tinyLogo: {
    width: 270,
    height: 89,
  },
});

export default Login;
