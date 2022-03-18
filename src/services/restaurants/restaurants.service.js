import { mockImages, mocks } from './mock';
import camelize from 'camelize';


export const restaurantsRequest = (location) => {
    
    return new Promise((resolve, reject) => {
        const mock = mocks[`${location.lat},${location.lng}`];
        if (!mock) reject('Mock not found');
        resolve(mock);
    });
};

export const restaurantsTransform = ({results = []}) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photo = mockImages[Math.ceil(Math.random()*(mockImages.length - 1))];
        restaurant.icon = restaurant.icon ? restaurant.icon : restaurant.ix;
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_staus === 'CLOSED TEMPORARILY',
        }
    })

    return camelize(mappedResults);
}