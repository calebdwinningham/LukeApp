import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import styles from "./style/styles.js";
import Home from "./screens/Home.js";

export default function App() {
  return (
    <View style={styles.fullScreen}>
    <SafeAreaView style={styles.main}>
      <Home/>
    </SafeAreaView>
    </View>
  );
}
