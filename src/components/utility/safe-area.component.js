import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const SafeZone = styled.SafeAreaView`
    flex: 1;
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px;`};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;