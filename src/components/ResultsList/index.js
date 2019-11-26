import React from "react";
import ResultDetais from "../ResultDetails";

import { Container, Title, List } from "./styles";

export default function ResultsList({ title, results }) {
  return (
    <Container>
      <Title>{title}</Title>
      <List
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => <ResultDetais result={item} />}
      />
    </Container>
  );
}
