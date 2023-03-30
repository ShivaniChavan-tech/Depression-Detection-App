import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Define the NotificationScreen component
const NotificationScreen = () => {
  return (
    // Use a View to enclose the Text component
    <View style={styles.container}>
      <Text>Notification Screen</Text>
    </View>
  );
};

export default NotificationScreen;

// Define styles using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex: 1 to ensure that the container fills the screen
    alignItems: "center", // Align items to the center horizontally
    justifyContent: "center", // Align items to the center vertically
  },
});