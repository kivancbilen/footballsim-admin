
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export enum MainRoutes {
    Login = 'Login',
    Dashboard = 'Dashboard',
    CreatePlayer = 'Create Player',
    CreateAttribute = "CreateAttribute",
    CreatePosition = "CreatePosition",
    CreatePositionRelationship = "CreatePositionRelationship",
    CreatePersonality = "CreatePersonality",
    CreatePersonalityRelationship = "CreatePersonalityRelationship"
}

export type MainStackParamList = {
    [MainRoutes.Dashboard]: undefined
    [MainRoutes.Login]: undefined
    [MainRoutes.CreatePlayer]:undefined
    [MainRoutes.CreateAttribute]:undefined
    [MainRoutes.CreatePosition]:undefined
    [MainRoutes.CreatePositionRelationship]:undefined
    [MainRoutes.CreatePersonality]:undefined
    [MainRoutes.CreatePersonalityRelationship]:undefined


}

export const MainStack = createNativeStackNavigator<MainStackParamList>()