import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { Details } from './pages/Details/index'
import { Incident } from './pages/Incidents/index'

const AppStack = createStackNavigator()

//
export const Routes = () => {
    return (
        // headerShown: false, desabilitar o cabeçalho da Rota
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incident" component={Incident} />
                <AppStack.Screen name="Details" component={Details} />
            </AppStack.Navigator>

        </NavigationContainer>
    )
}