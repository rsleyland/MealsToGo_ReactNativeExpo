import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';
import { SettingsNavigator } from './settings.navigator';

const Tab = createBottomTabNavigator();

  

const createScreenOptions = ( { route } ) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;
    switch (route.name) {
      case 'Restaurants':
        iconName = "md-restaurant";
        break;
      case 'Map':
        iconName = "md-map";
          break;
      case 'Settings-nav':
        iconName = "md-settings"
        break;
      default: iconName = "close-circle-outline"
    }
    return <Ionicons name={iconName} color={color} size={size} />
  },
  tabBarActiveTintColor: "orangered",
  tabBarInactiveTintColor: "gray",
  tabBarShowLabel: true,
});

export const AppNavigator = () => {
    return (

      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Tab.Navigator
              screenOptions={ createScreenOptions }>
            <Tab.Screen 
              options={{headerShown:false}}
              name="Restaurants" component={ RestaurantsNavigator }/>
            <Tab.Screen 
              options={{headerShown:false}} 
              name="Map" component={ MapScreen }/>
            <Tab.Screen 
              options={{headerShown:false, tabBarLabel:'Settings'}}
              
              name="Settings-nav" component={ SettingsNavigator }/>
            </Tab.Navigator>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    )
};