// Import necessary modules from 'react' and 'react-native'
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Create a functional component 'MessageScreen'
const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Message Screen</Text>
    </View>
  );
}; 

// Export the functional component 'MessageScreen' as the default export
export default MessageScreen;

// Define the styles of the 'container' using StyleSheet module 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});