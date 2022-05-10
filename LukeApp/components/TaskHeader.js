import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "../style/styles.js";

export default function TaskHeader() {
  return (
    <View style={styles.taskHeader}>
        <Text style={styles.arrow}>{"<"}</Text>
        <Text style={styles.date}>{new Date().toDateString()}</Text>
        <Text style={styles.arrow}>{">"}</Text>
    </View>
  );
}
