import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";

export default ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading....</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={users}
          keyExtractor={(x) => String(x.id)}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => {
                navigation.navigate("Post", {
                  name: item.username,
                  user_id: item.id,
                });
              }}
              title={item.name}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: {
    alignSelf: "stretch",
  },
});
