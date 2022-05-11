import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, CheckBox } from "react-native";
import styles from "../style/styles.js";
import favicon from "../assets/favicon.png";

export default function TaskCard() {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.task}> This is the task </Text>
        <Text style={styles.due}> {"4:00PM"} </Text>
      </View>
    </View>
  );
}
