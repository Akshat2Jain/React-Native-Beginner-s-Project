import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: item.image_url }} />
      <Text>{item.name} </Text>
      <Text>
        {item.rating} stars, {item.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default ResultItem;
