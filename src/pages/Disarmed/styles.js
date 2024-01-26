import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
  padding-top: ${getStatusBarHeight() + RFValue(50)}px;
`;

export const Logo = styled.Image`
  width: ${RFValue(270)}px;
  height: ${RFValue(50)}px;
  margin: 0 auto;
`;

export const Title = styled.Text`
  color: white;
  margin-top: ${RFValue(70)}px;
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;

export const SuccessImg = styled.Image`
  width: ${RFValue(270)}px;
  height: ${RFValue(150)}px;
  margin: ${RFValue(50)}px auto;
`;
