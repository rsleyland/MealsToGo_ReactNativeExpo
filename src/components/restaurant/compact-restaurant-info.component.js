import React from 'react';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import { Platform } from 'react-native';

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 120px;
`;

const CompactWebView = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 120px;
`;

const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
    justify-content: center;
`;

const ItemText = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    padding-top: 5px;
    font-family: ${(props) => props.theme.fonts.body};
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ( {restaurant, isMap }) => {

    const Image = isAndroid && isMap ? CompactWebView : CompactImage;

    return (
        <Item>
            <Image source={{uri: restaurant.photo}}/>
            <ItemText>{restaurant.name}</ItemText>
        </Item>
    );

};