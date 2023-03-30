import React, { useState } from "react";
import { View, Text, Button, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from "react-native";
import Background from './Background';
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// Login Screen Component
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function that handles SignIn button click
  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // Navigate to Home screen upon successful login
        navigation.navigate("Home");
      })
      .catch((error) => {
        // Handle login errors
        if (error.code === "auth/user-not-found") {
          alert("This user does not exist. Please register.");
        } else if (error.code === "auth/invalid-email") {
          alert("Invalid email address.");
        } else if (error.code === "auth/wrong-password") {
          alert("Invalid password for this email.");
        } else {
          console.log("error code: " + error.code + "\n" + "error message" + error.message);
        }
      });
  };

  // Login screen UI 
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image style={styles.logo} source={require('../assets/image/logo2.jpeg')}/>
      <View style={styles.title}>
        <Text style={styles.titleText}>LOG IN</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry // Mask the password 
        />
      </View>
      <View style={styles.buttonContainer}>
        {/* Login Button Component */}
        <TouchableOpacity style={styles.button} onPress={handleLogIn}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {/* Register Button Component */}
        <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={() => {navigation.navigate("Register");}}>
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.logo3} source={require('../assets/image/logo3.jpeg')}/>
    </KeyboardAvoidingView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  title: {
    marginBottom: 30,
  },
  titleText: {
    borderTopLeftRadius: 130,
    fontSize: 40,
    fontWeight: "700",
    color: "#ffa500",
    marginTop: 5,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 400,
  },
  button: {
    backgroundColor: "#ff8c00",
    width: "100%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 6,
    borderColor: "#ff8c00",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#ffa500",
    fontWeight: "700",
    fontSize: 16,
  },
  logo:{
    marginTop: 130,
    alignItems: 'center',
    height: '15%',
    width: '100%',
  },
  logo3:{
    width: '90%',
    height: '32%',
    position: "absolute",
    resizeMode: 'contain',
    bottom: 40,
  },
});

// Export the LoginScreen Component
export default LoginScreen;