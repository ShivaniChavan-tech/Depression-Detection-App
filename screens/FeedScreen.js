import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import Background from './Background';

const FeedScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Welcome to the Depression Companion
        </Text>
        <Text style={styles.description}>
          Taking care of one's mental health can be challenging, which is why we created this app to help you detect early signs of depression and take proactive steps towards better mental health.
        </Text>
        <Text style={styles.message}>
          Our app is designed to provide you with a safe and confidential space to track your mood and detect changes in your mental health. From mild symptoms to severe depression, we're here to support you every step of the way.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  titleText: {
    fontSize: 50,
    fontWeight: "900",
    color: "#ffa500",
    marginVertical: 20,
  },
  description: {
    fontSize: 20,
    textAlign: "left",
    color: "#ffa500",
    marginHorizontal: 20,
    marginBottom: 30,
  },
  message: {
    fontSize: 18,
    textAlign: "left",
    color: "#ffa500",
    marginHorizontal: 20,
  },
});

export default FeedScreen;