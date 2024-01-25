import React from "react";
import {
  Container,
  Timer,
  Title,
  TextTimer,
  HintContainer,
  HintTitle,
  HintText,
} from "./styles";
import bombImg from "../../assets/bomba.png";
import { Alert, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PasswordInput from "../../components/PasswordInput";
import ButtonComponent from "../../components/Buttons";

export default function PlaySolo() {
  const navigation = useNavigation();
  function handleStartGame() {
    Alert.alert("Começouuuu");
  }
  function handleToHome() {
    navigation.goBack();
  }

  return (
    <Container>
      <Title>Bomb Game{"\n"}Solo</Title>
      <ImageBackground
        source={bombImg}
        resizeMode="cover"
        style={{
          minHeight: 130,
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Timer>
          <TextTimer>00 : 05 : 00</TextTimer>
        </Timer>
      </ImageBackground>

      <HintContainer>
        <HintTitle>DICA:</HintTitle>
        <HintText>Sua dica estará aqui!</HintText>
      </HintContainer>

      <PasswordInput />
      <ButtonComponent buttonText={"Iniciar"} handlePress={handleStartGame} />
      <ButtonComponent
        buttonText={"Página Inicial"}
        handlePress={handleToHome}
      />
    </Container>
  );
}
