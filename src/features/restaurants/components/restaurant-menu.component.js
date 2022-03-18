import React from 'react';
import { List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

export const RestaurantMenu = () => {

    const getIcon = (iconName) => {
        return (
        <Ionicons name={iconName} color={'orangered'} size={30} />
        );
    }

    return (
        <ScrollView>
            <List.AccordionGroup>
                <List.Accordion
                    title="Breakfast"
                    id="1"
                    left={props => <List.Icon {...props} icon={() => getIcon('alarm-outline')} />}>
                    <List.Item title="Eggs Benedict" />
                    <List.Item title="Classic Breakfast" />
                </List.Accordion>
                <List.Accordion
                    title="Lunch"
                    id="2"
                    left={props => <List.Icon {...props} icon={() => getIcon('fast-food-outline')} />}>
                    <List.Item title="Burger &#38; Fries" />
                    <List.Item title="Steak Sandwich" />
                    <List.Item title="Poutine" />
                </List.Accordion>
                <List.Accordion
                    title="Dinner"
                    id="3"
                    left={props => <List.Icon {...props} icon={() => getIcon('pizza-outline')} />}>
                    <List.Item title="Spaghetti Bolognese" />
                    <List.Item title="Veal Cutlet" />
                    <List.Item title="Steak Frites" />
                </List.Accordion>
                <List.Accordion
                    title="Drinks"
                    id="4"
                    left={props => <List.Icon {...props} icon={() => getIcon('beer-outline')} />}>
                    <List.Item title="Beer" />
                    <List.Item title="Wine" />
                    <List.Item title="Soft Drinks" />
                </List.Accordion>
            </List.AccordionGroup>
        </ScrollView>
    )
};