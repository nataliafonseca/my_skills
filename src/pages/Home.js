import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  const handleAddNewSkill = () => {
    setMySkills([...mySkills, newSkill]);
    setNewSkill("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Natália</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555555"
        value={newSkill}
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 30 }]}>My Skills</Text>

      {mySkills.map((skill, index) => (
        <TouchableOpacity key={index} style={styles.buttonSkill}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#ffffff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },
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
