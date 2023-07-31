import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        placeholderTextColor="black"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
      {/* <Text>Search Bar</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#d3d3d3",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 15,
  },
  inputStyle: {
    // borderColor: "black",
    // borderWidth: 1,
    flex: 1,
    fontSize: 18,
    color: "black",
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
