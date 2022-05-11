import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "../style/styles.js";
import TaskCard from "../components/TaskCard.js";

export default function Tasks() {
  return (
    <View style={styles.taskHeader}>
        <TaskCard />
    </View>
  );
}
