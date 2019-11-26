import React from "react";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import ResultDetais from "../ResultDetails";
import { Container, Title, List } from "./styles";

function ResultsList({ title, results, navigation }) {
  if (!results.length) return null;

  return (
    <Container>
      <Title>{title}</Title>
      <List
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ResultsShow", { id: item.id })}
          >
            <ResultDetais result={item} />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}

export default withNavigation(ResultsList);
