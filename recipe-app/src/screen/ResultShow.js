import React, { useEffect, useState } from "react";
import { Image, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";
const ResultShow = ({ navigation }) => {
  // console.log(result);

  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  const getResults = async (id) => {
    const res = await yelp.get(`/${id}`);
    setResult(res.data);
  };

  useEffect(() => {
    getResults(id);
  }, []);
  if (!result) {
    return;
  }
  // console.log(result);
  return (
    <>
      <Text>Name: {result.name}</Text>
      <Text>Location :{result.location.address1}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(e) => e}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultShow;
