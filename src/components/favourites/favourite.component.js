import React from 'react';
import styled from 'styled-components/native';
import { useContext } from 'react';
import { FavouritesContext } from '../../services/favourites/favourites.context';
import { AntDesign } from '@expo/vector-icons';

const FavouriteButton = styled.TouchableOpacity`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9;
`;

export const Favourite = ({restaurant}) => {

    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);

    const isFavourite = favourites.find((r)=> r.placeId === restaurant.placeId);

    const handlePress = () => {
        isFavourite ? removeFromFavourites(restaurant) : addToFavourites(restaurant);
    };

    return (
        <FavouriteButton  onPress={handlePress}>
            <AntDesign name={isFavourite ? 'heart' : 'hearto'} size={24} color={isFavourite ? 'red' : 'white'}/>
        </FavouriteButton>
    );

};