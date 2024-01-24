import React, { useRef } from "react";
import { Container, Input, InputContainer } from "./styles";
import { Keyboard } from "react-native";

export default function PasswordInput({ pin, setPin, starter }) {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  return (
    <Container>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input1}
          onChangeText={(value) => {
            value && input2.current.focus();
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input2}
          onChangeText={(value) => {
            value && input3.current.focus();
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input3}
          onChangeText={(value) => {
            value && input4.current.focus();
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input4}
          onChangeText={() => {
            Keyboard.dismiss();
          }}
        />
      </InputContainer>
    </Container>
  );
}
