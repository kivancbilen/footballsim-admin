import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { MainStack, MainRoutes } from './routes'

import DashboardScreen from '../pages/dashboard'
import LoginSection from '../pages/login'
import CreatePlayerScreen from '../pages/createTemplatePlayer'
import CreateAttributeScreen from '../pages/createAttribute'
import CreatePositionScreen from '../pages/createPosition'


const MainNavigation = (): React.ReactElement => {

    return (
        <NavigationContainer>
            <MainStack.Navigator >
                <MainStack.Screen name={MainRoutes.Login} component={LoginSection} />
                <MainStack.Screen name={MainRoutes.Dashboard} component={DashboardScreen} />
                <MainStack.Screen name={MainRoutes.CreatePlayer} component={CreatePlayerScreen} />
                <MainStack.Screen name={MainRoutes.CreateAttribute} component={CreateAttributeScreen} />
                <MainStack.Screen name={MainRoutes.CreatePosition} component={CreatePositionScreen} />
                <MainStack.Screen name={MainRoutes.CreatePosition} component={CreatePositionRelationshipScreen} />

            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation