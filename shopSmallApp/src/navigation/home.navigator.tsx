import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../scenes/layouts/home.component';

const Stack = createStackNavigator();

export const HomeNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
);