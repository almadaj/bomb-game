import React from "react";
import { Container, Input, HintTitle, InputContainer } from "./styles";

export default function HintInput() {
  return (
    <Container>
      <HintTitle>Dica de senha:</HintTitle>
      <InputContainer>
        <Input placeholder="Dica para sua dupla" />
      </InputContainer>
    </Container>
  );
}
