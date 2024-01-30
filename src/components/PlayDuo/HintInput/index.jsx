import React from "react";
import {
  Container,
  Input,
  HintTitle,
  InputContainer,
  HintText,
} from "./styles";

export default function HintInput({ started, question, setQuestion }) {
  return (
    <Container>
      <HintTitle>Dica de senha:</HintTitle>
      {!started ? (
        <InputContainer>
          <Input
            placeholder="Dica para sua dupla"
            value={question}
            onChangeText={(value) => {
              setQuestion(value);
            }}
          />
        </InputContainer>
      ) : (
        <HintText>{question}</HintText>
      )}
    </Container>
  );
}
