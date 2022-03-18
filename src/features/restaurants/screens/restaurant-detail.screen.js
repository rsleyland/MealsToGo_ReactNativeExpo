import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeZone } from '../../../components/utility/safe-area.component';
import { RestaurantMenu } from '../components/restaurant-menu.component';

export const RestaurantDetailScreen = ({navigation, route}) => {
    const { restaurant } = route.params;
    return (
        <SafeZone>
            <RestaurantInfoCard restaurant={restaurant} />
            <RestaurantMenu />
        </SafeZone>
    );
};