import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../../components/SearchBar";
import useResults from "../../hooks/useResults";

export default function Search() {
  const [search, setSearch] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        value={search}
        setValue={value => setSearch(value)}
        inputAction={() => searchApi(search)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{results.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
