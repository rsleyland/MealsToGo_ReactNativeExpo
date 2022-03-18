import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import { Search } from '../components/search.component';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { useContext, useEffect, useState } from 'react';
import { MapCallout } from '../components/map-callout.component';

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  top: 30px;
`;

const Map = styled(MapView)`
    width: 100%;
    height: 100%;
`;

export const MapScreen = ({navigation}) => {

    const {restaurants = [] } = useContext(RestaurantsContext);
    const { location } = useContext(LocationContext);
    const [latDelta, setLatDelta] = useState(0);
    const {lat, lng, viewport} = location;

    useEffect(() => {
        const northeastlat = viewport.northeast.lat;
        const southwestlat = viewport.southwest.lat;
        const latDeltaNew = northeastlat - southwestlat;
        setLatDelta(latDeltaNew);
    }, [location, viewport]);

    return (
        <>
            <SearchView>
                <Search />
            </SearchView>
            <Map region={{latitude: lat, longitude: lng, latitudeDelta: latDelta, longitudeDelta: 0.04}}>
                {restaurants.map((restaurant) => {
                    return <MapView.Marker
                    key={restaurant.name}
                    title={restaurant.name}
                    coordinate={{latitude: restaurant.geometry.location.lat, longitude: restaurant.geometry.location.lng}}
                    >
                    <MapView.Callout onPress={() => navigation.navigate("Restaurant Detail", {restaurant})}>
                        <MapCallout restaurant={restaurant}/>
                    </MapView.Callout>
                </MapView.Marker>
                })}
            </Map>
        </>
    );
};