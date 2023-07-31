import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const searchApi = async (searchTerm) => {
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(res.data.businesses);
      // console.log(res.data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      {/* <Text>We have found {results.length}</Text> */}
      <ScrollView>
        <ResultList
          results={filterResultByPrice("$$$$")}
          title="Cost Effective"
        />
        <ResultList results={filterResultByPrice("$$")} title="Bit pricier" />
        <ResultList results={filterResultByPrice("$$$")} title="Moderate" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
