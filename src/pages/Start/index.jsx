import React from "react";
import { Container, Logo, Title, SubTitle, Rules } from "./styles";
import ButtonComponent from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

export default function Start() {
  const navigation = useNavigation();

  const handleNavToPlaySolo = () => {
    navigation.navigate("PlaySolo");
  };
  const handleNavToPlayDuo = () => {
    navigation.navigate("PlayDuo");
  };
  const handleNavToRules = () => {
    navigation.navigate("Rules");
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
