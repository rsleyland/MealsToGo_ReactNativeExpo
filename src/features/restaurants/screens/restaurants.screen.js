import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SearchView } from './restaurants.styles';
import { SafeZone } from '../../../components/utility/safe-area.component';
import { useContext, useState } from 'react';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { ActivityIndicator } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';
import { Search } from '../components/search.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
import { RestaurantList } from '../components/restaurant-list.styles';

export const RestaurantsScreen = ({ navigation }) => {

    const { restaurants, isLoading } = useContext(RestaurantsContext);
    const { favourites } = useContext(FavouritesContext);
    const [isToggled, setIsToggled] = useState(false);


    const navigateToRestaurantDetail = (restaurant) => {
      navigation.navigate("Restaurant Detail", {restaurant});
    }

    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigateToRestaurantDetail(item)}>
      <RestaurantInfoCard restaurant={item} />
      </TouchableOpacity>
    );


    return (
    <SafeZone>

        <SearchView>
          <Search onFavouritesToggled={() => setIsToggled(!isToggled)} isFavouritesToggled={isToggled}/>
        </SearchView>
        {isToggled && <FavouritesBar favourites={favourites} navigate={navigateToRestaurantDetail}/>}
        {isLoading ? <View style={{marginTop: '30%'}}><ActivityIndicator animating={true} size={70} color={'orangered'}/></View> :
         <RestaurantList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        >
        </RestaurantList>}
        
        

    </SafeZone>

    )
};
