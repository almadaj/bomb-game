import React from "react";
import { Container, Title, BombMessage } from "./styles";
import InputTimer from "../../components/PlayDuo/InputTimer";

export default function PlayDuo() {
  return (
    <Container>
      <Title>Bomb Game Duo</Title>
      <InputTimer />
      <BombMessage>Mensagem de erro temporário!</BombMessage>
    </Container>
  );
}
