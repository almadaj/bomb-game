import React from "react";
import { Container, Title, BombMessage, ScrollContainer } from "./styles";
import InputTimer from "../../components/PlayDuo/InputTimer";
import HintInput from "../../components/PlayDuo/HintInput";
import InputPassword from "../../components/PlayDuo/InputPassword";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/Buttons";
import { Alert } from "react-native";

export default function PlayDuo() {
  const navigation = useNavigation();
  function handleToHome() {
    navigation.goBack();
  }

  function handleStartGame() {
    Alert.alert("Começouuuu");
  }
  return (
    <ScrollContainer>
      <Container>
        <Title>Bomb Game Duo</Title>
        <InputTimer />
        {/* <BombMessage>Mensagem de erro temporário!</BombMessage> */}
        <HintInput />
        <InputPassword />
        <ButtonComponent buttonText={"Iniciar"} handlePress={handleStartGame} />
        <ButtonComponent
          buttonText={"Página Inicial"}
          handlePress={handleToHome}
        />
      </Container>
    </ScrollContainer>
  );
}
