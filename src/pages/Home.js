import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { SkillCard } from "../components/SkillCard";

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

      <Input
        placeholder="New skill"
        value={newSkill}
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill}>Add</Button>

      <Text style={[styles.title, { marginVertical: 30 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <SkillCard>{item}</SkillCard>}
      />
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
});
