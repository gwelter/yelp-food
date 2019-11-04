import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../../components/SearchBar";

// import { Container } from './styles';

export default function Search() {
  const [search, setSearch] = useState("");

  return (
    <View>
      <SearchBar
        value={search}
        setValue={value => setSearch(value)}
        inputAction={() => console.log("OPA")}
      />
      <Text>{search}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
