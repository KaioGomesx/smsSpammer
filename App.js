import React, { useState } from "react";
import { TextInput } from "react-native";

import {
  Container,
  NumbersInput,
  TitleArea,
  SeparatorSimple,
  DelayInput,
} from "./styles";

export default function App() {
  const [phoneNumbers, setPhoneNumbers] = useState("");
  const [] = useState(0);

  return (
    <Container>
      <TitleArea>Numeros alvos</TitleArea>
      <NumbersInput
        multiline
        numberOfLines={10}
        maxLength={40}
        onChangeText={setPhoneNumbers}
        value={phoneNumbers}
      />
      <SeparatorSimple />
      <TitleArea>Tempo de delay(em milisegundos)</TitleArea>
      <DelayInput />
    </Container>
  );
}
