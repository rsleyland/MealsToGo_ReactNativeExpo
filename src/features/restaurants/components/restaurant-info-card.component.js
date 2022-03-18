import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import {Text} from 'react-native';
import { Favourite } from '../../../components/favourites/favourite.component';
import {
    RestaurantCardCover, RestaurantCard, 
    Info, RatingAndDetails, Rating, Details,
    Title, Address, Closed, Icon
} from './restaurant-info-card.styles'


export const RestaurantInfoCard = ({ restaurant = {} }) => {
    return (
        <RestaurantCard>
            <Favourite restaurant={restaurant}/>
            <RestaurantCardCover key={restaurant.name} source={{ uri: restaurant.photo }} />
            <Info>
                <Title>{ restaurant.name }</Title>
                <RatingAndDetails>
                    <Rating>
                    {restaurant.rating ? 
                    [...Array(Math.round(restaurant.rating))].map((e, i) => (
                        <SvgXml key={'Star'+(i+1)} xml={star} width={20} height={20}/>
                    )) :
                    <Text>no rating yet</Text>}
                    </Rating>
                    <Details>
                        {restaurant.isClosedTemporarily && <Closed>CLOSED TEMPORARILY</Closed>}
                        {restaurant.isOpenNow && <SvgXml xml={open} width={24} height={24}/>}
                        <Icon source={{ uri: restaurant.icon }} />
                    </Details>
                </RatingAndDetails>
                <Address>{ restaurant.vicinity }</Address>
            </Info>
        </RestaurantCard>
    )
};