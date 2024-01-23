import React from "react";
import { Container, Logo, Title, SubTitle, Rules } from "./styles";
import ButtonComponent from "../../components/Buttons";

export default function Start() {
  const handleNavToPlaySolo = () => {
    console.log("jogando solo");
  };
  const handleNavToPlayDuo = () => {
    console.log("jogando duo");
  };
  const handleNavToRules = () => {
    console.log("regras");
  };
  return (
    <Container>
      <Logo
        source={require("../../assets/logoDark.png")}
        style={{ resizeMode: "contain" }}
      />
      <Title>Bem-Vindo ao {"\n"}Bomb Game!</Title>
      <SubTitle>Escolha modo de jogo:</SubTitle>
      <ButtonComponent
        buttonText={"UM JOGADOR"}
        handlePress={handleNavToPlaySolo}
      />
      <ButtonComponent
        buttonText={"DOIS JOGADORES"}
        handlePress={handleNavToPlayDuo}
      />
      <Rules onPress={handleNavToRules}>Ver regras do jogo</Rules>
    </Container>
  );
}
