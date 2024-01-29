import React, { useState, useEffect } from "react";
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
import BombService from "../../services/BombApp";
import api from "../../services/api/api";

export default function PlaySolo() {
  const navigation = useNavigation();
  const [started, setStarted] = useState(false);
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("03");
  const [seconds, setSeconds] = useState("00");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [intervalId, setIntervalId] = useState("");
  const [pin, setPin] = useState(["", "", "", ""]);
  function handleStartGame() {
    BombService.bombStartGame({ setStarted, hours, minutes, seconds });
  }

  async function fetchQuestion() {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    const { data } = await api.get(`questions/${randomNumber}`);

    setQuestion(data?.question);
    setAnswer(data?.answer);
  }

  useEffect(() => {
    fetchQuestion();
  }, []);

  function handleStartBomb() {
    const diffTime = BombService.getDiffTime({ hours, minutes, seconds });
    BombService.startCountdown({
      setSeconds,
      setMinutes,
      setHours,
      setStarted,
      diffTime,
      setIntervalId,
      intervalId,
      navigation,
    });
  }
  function handleDisarmBomb() {
    BombService.disarmBomb({
      setStarted,
      answer,
      navigation,
      pin,
      setPin,
      intervalId,
    });
  }
  function handleGiveUp() {
    BombService.giveUpGame({ intervalId, navigation });
  }

  function handleToHome() {
    navigation.goBack();
  }

  useEffect(() => {
    if (started) {
      handleStartBomb();
    }
  }, [started]);

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
          <TextTimer>
            {hours} : {minutes} : {seconds}
          </TextTimer>
        </Timer>
      </ImageBackground>

      {!started ? null : (
        <HintContainer>
          <HintTitle>Sua dica:</HintTitle>
          <HintText>{question}</HintText>
        </HintContainer>
      )}
      <PasswordInput pin={pin} setPin={setPin} started={started} />
      {!started ? (
        <>
          <ButtonComponent
            buttonText={"Iniciar"}
            handlePress={handleStartGame}
          />
          <ButtonComponent
            buttonText={"Página Inicial"}
            handlePress={handleToHome}
          />
        </>
      ) : (
        <>
          <ButtonComponent
            buttonText={"Desarmar"}
            handlePress={handleDisarmBomb}
          />
          <ButtonComponent buttonText={"Desistir"} handlePress={handleGiveUp} />
        </>
      )}
    </Container>
  );
}
