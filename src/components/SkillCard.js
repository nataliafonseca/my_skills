import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function SkillCard({ children }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
  },
  textSkill: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
