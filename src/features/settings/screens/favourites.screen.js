import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { useContext } from "react";
import styled from "styled-components";
import { SafeZone } from '../../../components/utility/safe-area.component';
import { TouchableOpacity } from "react-native";
import { RestaurantList } from '../../restaurants/components/restaurant-list.styles';
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const FavouritesArea = styled(SafeZone)`
    align-items: center;
    justify-content: center;
`;

const FavouritesText = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: 26px;
`;

export const FavouritesScreen = ({navigation}) => {

    const { favourites } = useContext(FavouritesContext);

    const navigateToRestaurantDetail = (restaurant) => {
        navigation.navigate("Restaurant Detail", {restaurant});
      }
  
      const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigateToRestaurantDetail(item)}>
        <RestaurantInfoCard restaurant={item} />
        </TouchableOpacity>
      );

    if (!favourites.length) return (
        <FavouritesArea>
            <FavouritesText>No Favourites yet</FavouritesText>
        </FavouritesArea>
    )
    
    return (
        <SafeZone>
            <RestaurantList
                data={favourites}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            >
            </RestaurantList>
        </SafeZone>
    )

}