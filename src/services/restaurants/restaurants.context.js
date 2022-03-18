import React from 'react';
const { createContext, useState, useEffect } = require("react");
import { useContext } from 'react';
import { restaurantsRequest, restaurantsTransform } from './restaurants.service';
import { LocationContext } from '../location/location.context';


export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);


    const retrieveRestaurants = () => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            restaurantsRequest(location).then(restaurantsTransform).then((results) => {
                setRestaurants(results);
                setIsLoading(false);
            }).catch(err => {
                setError(err);
                setIsLoading(false);
            });
        }, 2000);
    }
    useEffect(() => {
        retrieveRestaurants();
    }, [location]);



    return (
        <RestaurantsContext.Provider value={{restaurants, isLoading, error}}>
            {children}
        </RestaurantsContext.Provider>
    )

};

