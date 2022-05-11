import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "../style/styles.js";
import TaskHeader from "../components/TaskHeader.js"
import Tasks from "../components/Tasks.js"

export default function Home() {
  return (
    <View style={styles.home}>
      <TaskHeader />
      <Tasks />
    </View>
  );
}
