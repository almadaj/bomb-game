import React from "react";
import { Container, Logo, Title, FailedImg } from "./styles";
import logoImg from "../../assets/logoLightRed.png";
import failedImg from "../../assets/bomba_explodiu.png";
import ButtonComponent from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
export default function Exploded() {
  const navigation = useNavigation();
  function handleStartGame() {
    navigation.navigate("Start");
  }
  // setTimeout(function () {
  //   Vibration.vibrate(4 * 1000);
  // }, 500);
  return (
    <Container>
      <Logo source={logoImg} style={{ resizeMode: "contain" }} />
      <Title>Você falhou!{"\n"}A bomba explodiu!!!</Title>
      <FailedImg source={failedImg} style={{ resizeMode: "contain" }} />
      <ButtonComponent
        buttonText="Página Inicial"
        handlePress={handleStartGame}
      />
    </Container>
  );
}
