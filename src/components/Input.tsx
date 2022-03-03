import React from "react";
import { Platform, StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input(props: TextInputProps) {
  return (
    <TextInput style={styles.input} placeholderTextColor="#555555" {...props} />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#1f1e25",
    color: "#ffffff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
