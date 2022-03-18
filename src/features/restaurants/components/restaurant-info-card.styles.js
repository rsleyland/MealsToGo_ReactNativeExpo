import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const Title = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.h5};
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${(props) => props.theme.fonts.body};
`;
export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const Closed = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    color: red;
    fontSize:  ${(props) => props.theme.fontSizes.caption};
    margin-right: ${(props) => props.theme.space[2]};
`;
export const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    box-shadow: 0px 2px 4px ${(props) => props.theme.colors.ui.primary};
    shadowOpacity: 0.5;
    elevation: 10;
    margin-bottom: ${(props) => props.theme.space[4]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
    padding-left: ${(props) => props.theme.space[3]};
    padding-right: ${(props) => props.theme.space[3]};
    padding-top: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};    
`;
export const RatingAndDetails = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const Rating = styled.View`
    flex-direction: row;
    padding: ${(props) => props.theme.space[2]} 0;
`;

export const Details = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex: 0.8;
`;
export const Icon = styled.Image`
    width: ${(props) => props.theme.sizes[2]};
    height: ${(props) => props.theme.sizes[2]};
    margin-left: ${(props) => props.theme.space[2]}
`;