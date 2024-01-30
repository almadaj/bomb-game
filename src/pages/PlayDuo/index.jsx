import React, { useState, useEffect } from "react";
import { Container, Title, BombMessage, ScrollContainer } from "./styles";
import InputTimer from "../../components/PlayDuo/InputTimer";
import HintInput from "../../components/PlayDuo/HintInput";
import PasswordInput from "../../components/PlayDuo/InputPassword";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/Buttons";
import BombService from "../../services/BombApp";

export default function PlayDuo() {
  const navigation = useNavigation();
  const [started, setStarted] = useState(false);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [intervalId, setIntervalId] = useState("");
  const [pin, setPin] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");

  function handleToHome() {
    navigation.goBack();
  }

  function handleStartGame() {
    BombService.bombActivationDuo({
      question,
      pin,
      hours,
      minutes,
      seconds,
      setMessage,
      setStarted,
      setPin,
      handleStartBomb,
      setAnswer,
    });
  }

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
    BombService.bombDisarmDuo({
      pin,
      answer,
      setStarted,
      intervalId,
      setPin,
      setAnswer,
      navigation,
    });
  }
  function handleGiveUp() {
    BombService.giveUpGame({ intervalId, navigation });
  }
  return (
    <ScrollContainer>
      <Container>
        <Title>Bomb Game Duo</Title>
        <InputTimer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />

        {message ? <BombMessage>{message ? message : null}</BombMessage> : null}
        <HintInput
          started={started}
          question={question}
          setQuestion={setQuestion}
        />
        <PasswordInput pin={pin} setPin={setPin} />
        {!started ? (
          <>
            <ButtonComponent
              buttonText="Iniciar"
              bgColor={true}
              handlePress={handleStartGame}
            />
            <ButtonComponent
              buttonText="Página Inicial"
              bgColor={true}
              handlePress={handleToHome}
            />
          </>
        ) : (
          <>
            <ButtonComponent
              buttonText="Desarmar"
              bgColor={true}
              handlePress={handleDisarmBomb}
            />
            <ButtonComponent
              buttonText="Desistir"
              bgColor={true}
              handlePress={handleGiveUp}
            />
          </>
        )}
      </Container>
    </ScrollContainer>
  );
}
