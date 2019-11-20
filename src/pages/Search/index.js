import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../../components/SearchBar";
import yelp from "../../api/yelp";

// import { Container } from './styles';

export default function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  async function searchApi() {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          location: "san jose",
          term: search
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong");
    }
  }

  return (
    <View>
      <SearchBar
        value={search}
        setValue={value => setSearch(value)}
        inputAction={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{results.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
