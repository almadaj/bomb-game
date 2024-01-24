import styled from "styled-components";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: 0px 20px;
  padding-top: ${getStatusBarHeight() + RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Icon = styled(MaterialIcons)`
  font-size: ${RFValue(30)}px;
  margin-bottom: ${RFValue(20)}px;
  color: white;
`;

export const ScrollTextRules = styled.ScrollView.attrs({
  showsVerticalIndicator: false,
})``;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  margin-left: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Paragraph = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: ${RFValue(10)}px;
  margin-top: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const NumberParagraph = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textLight};
`;
