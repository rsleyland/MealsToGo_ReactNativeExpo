import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';


const FavouritesWrapper = styled.View`
    padding: 10px;
`;

const FavouriteHeader = styled.Text`
    margin-left: 10px;
    font-family: ${(props) => props.theme.fonts.body}
`;

export const FavouritesBar = ({ favourites, navigate }) => {
    if (!favourites.length) return null;
    return (
        <FavouritesWrapper>
            <FavouriteHeader>Favourites</FavouriteHeader>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => {
                    const key = restaurant.name.split(' ').join("");
                    return (
                        <View key={key} style={{marginRight: 10}}>
                            <TouchableOpacity onPress={() => navigate(restaurant)}>
                                <CompactRestaurantInfo restaurant={restaurant} map={false}/>
                            </TouchableOpacity>
                        </View>
                    )   
                })
                }
            </ScrollView>
        </FavouritesWrapper>
    )

};