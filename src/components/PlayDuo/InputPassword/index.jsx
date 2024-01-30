import React, { useRef } from "react";
import { Container, Input, InputContainer } from "./styles";
import { Keyboard } from "react-native";
export default function InputPassword({ pin, setPin }) {
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
          value={pin[0]}
          onChangeText={(value) => {
            value && input2.current.focus();
            setPin([value, pin[1], pin[2], pin[3]]);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input2}
          pin={pin[1]}
          onChangeText={(value) => {
            value && input3.current.focus();
            setPin([pin[0], value, pin[2], pin[3]]);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input3}
          pin={pin[2]}
          onChangeText={(value) => {
            value && input4.current.focus();
            setPin([pin[0], pin[1], value, pin[3]]);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input4}
          pin={pin[3]}
          onChangeText={(value) => {
            setPin([pin[0], pin[1], pin[2], value]);
            Keyboard.dismiss();
          }}
        />
      </InputContainer>
    </Container>
  );
}
