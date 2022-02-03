import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default ({ navigation }) => {
  const userName = navigation.getParam("name");
  const title = navigation.getParam("title");
  const detail = navigation.getParam("body");
  
  return (
    <View style={styles.container}>
      <Text>{userName}</Text>
      <Text>{title}</Text>
      <Text>{detail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
