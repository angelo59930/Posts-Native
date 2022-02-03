import React from "react";
import { TouchableOpacity,Text, StyleSheet } from "react-native";

export default ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
      height:60,
      justifyContent:'center',
      borderBottomWidth:1,
      borderBottomColor:'#eeee',
      paddingHorizontal:16
  },
  text: {
    fontSize: 20,
  }
});
