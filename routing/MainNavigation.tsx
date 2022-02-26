import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { MainStack, MainRoutes } from './routes'

import DashboardScreen from '../pages/dashboard'
import LoginSection from '../pages/login'
import CreatePlayerScreen from '../pages/createTemplatePlayer'
import CreateAttributeScreen from '../pages/createAttribute'
import CreatePositionScreen from '../pages/createPosition'
import CreatePositionRelationshipScreen from '../pages/createPositionRelationship'
import CreatePersonalityScreen from '../pages/createPersonality'
import CreatePersonalityRelationshipScreen from '../pages/createPersonalityRelationship'


const MainNavigation = (): React.ReactElement => {

    return (
        <NavigationContainer>
            <MainStack.Navigator >
                <MainStack.Screen name={MainRoutes.Login} component={LoginSection} />
                <MainStack.Screen name={MainRoutes.Dashboard} component={DashboardScreen} />
                <MainStack.Screen name={MainRoutes.CreatePlayer} component={CreatePlayerScreen} />
                <MainStack.Screen name={MainRoutes.CreateAttribute} component={CreateAttributeScreen} />
                <MainStack.Screen name={MainRoutes.CreatePosition} component={CreatePositionScreen} />
                <MainStack.Screen name={MainRoutes.CreatePersonality} component={CreatePersonalityScreen} />
                <MainStack.Screen name={MainRoutes.CreatePositionRelationship} component={CreatePositionRelationshipScreen} />
                <MainStack.Screen name={MainRoutes.CreatePersonalityRelationship} component={CreatePersonalityRelationshipScreen} />


            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation