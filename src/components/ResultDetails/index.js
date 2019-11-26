import React from "react";

import { Container, Name, Rating, Image } from "./styles";

export default function ResultDetails({ result }) {
  return (
    <Container>
      <Image source={{ uri: result.image_url }} />
      <Name>{result.name}</Name>
      <Rating>
        {result.rating} Stars, {result.review_count} reviews
      </Rating>
    </Container>
  );
}
