import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location.context';

export const Search = () => {

    const { search, keyword } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <Searchbar 
        placeholder='search'
        icon='map'
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
        />
    )
};