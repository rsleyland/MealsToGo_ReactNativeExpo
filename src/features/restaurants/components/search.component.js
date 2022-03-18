import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location.context';

export const Search = ({onFavouritesToggled, isFavouritesToggled}) => {

    const { search, keyword } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <Searchbar
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'} 
        onIconPress={onFavouritesToggled}
        placeholder='search'
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
        />
    )
};