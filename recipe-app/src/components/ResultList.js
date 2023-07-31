import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ResultItem from "./ResultItem";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ResultShow", { id: item.id })
                }
              >
                <ResultItem item={item} />
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultList);
