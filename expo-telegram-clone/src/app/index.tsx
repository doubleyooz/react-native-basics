import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return <Redirect href={"/(home)/(tabs)"} />;
  /*
  return (
    <View style={styles.titleContainer}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />{" "}
    </View>
  );
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  }
});
