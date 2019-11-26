import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

import SearchBar from "../../components/SearchBar";
import ResultsList from "../../components/ResultsList";
import useResults from "../../hooks/useResults";

export default function Search() {
  const [search, setSearch] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  function filterResultsByPrice(price) {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => result.price === price);
  }

  return (
    <>
      <SearchBar
        value={search}
        setValue={value => setSearch(value)}
        inputAction={() => searchApi(search)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Prieier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
}
