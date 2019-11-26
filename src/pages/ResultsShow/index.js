import React, { useState, useEffect } from "react";
import yelp from "../../api/yelp";

import { Container, Text, List, Image } from "./styles";

export default function ResultsShow({ navigation }) {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  async function getResult(id) {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;

  return (
    <Container>
      <Text>{result.name}</Text>
      <List
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => <Image source={{ uri: item }} />}
      />
    </Container>
  );
}
