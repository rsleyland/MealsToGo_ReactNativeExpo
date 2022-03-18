import styled from "styled-components/native";
import { colors } from '../../../infrastructure/theme/colors';
import {Button, TextInput} from 'react-native-paper';

export const AccountBackground = styled.ImageBackground.attrs({
    source: require('../../../../assets/home_bg.jpeg'),
})`
    flex: 1;
`;

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    align-items: center;
    justify-content: center;
`;

export const AccountContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary,
    mode:'contained',
})`
    margin-bottom: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[1]}; 
`;

export const AuthInput = styled(TextInput)`
    height: 50px;
    width: 250px;
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Title = styled.Text`
    font-size: 30px;
    font-family: ${(props) => props.theme.fonts.body};
`;

export const AnimationWrapper = styled.View`
    width: 100%;
    height: 40%;
    position: absolute;
    top: 30px;
    padding: ${(props) => props.theme.space[2]};
`;