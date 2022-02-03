import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";

export default ({ navigation }) => {
  const userName = navigation.getParam("name");
  const userId = navigation.getParam("user_id");
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading....</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={posts.filter((x) => x.userId === userId)}
          keyExtractor={(x) => String(x.id)}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => {
                navigation.navigate("Detail", {
                  name: userName,
                  title: item.title,
                  body: item.body,
                });
              }}
              title={item.title}
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
