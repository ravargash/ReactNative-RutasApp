
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MapScreen } from '../Screens/MapScreen';
import { PermissionsScreen } from '../Screens/PermissionsScreen';

const Stack = createStackNavigator();

export const StackNavigationController = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: 'white'
                    }
                }}
            >
                <Stack.Screen name="Home" component={ MapScreen } />
                <Stack.Screen name="PermissionsScreen" component={ PermissionsScreen } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

