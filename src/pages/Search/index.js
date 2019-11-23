import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../../components/SearchBar";
import ResultsList from "../../components/ResultsList";
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
      <ResultsList title="Cost Effective" />
      <ResultsList title="Bit Prieier" />
      <ResultsList title="Big Spender" />
    </View>
  );
}

const styles = StyleSheet.create({});
