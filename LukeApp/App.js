import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "./style/styles.js";
import Home from "./screens/Home.js";

export default function App() {
  return (
    <View style={styles.main}>
      <Home/>
    </View>
  );
}
