import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Btn({ bgColor, btnLabel, textColor, Press }) {
  const styles = {
    button: {
      backgroundColor: bgColor,
      borderRadius: 25,
      alignItems: 'center',
      width: 350,
      height: 70,
      paddingVertical: 10,
      marginVertical: 35,
      justifyContent: 'center',
    },
    buttonText: {
      color: textColor,
      fontSize: 35,
      fontWeight: 'bold',
    },
  };

  return (
    <TouchableOpacity onPress={Press} style={styles.button}>
      <Text style={styles.buttonText}>{btnLabel}</Text>
    </TouchableOpacity>
  );
}