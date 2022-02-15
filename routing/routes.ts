
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export enum MainRoutes {
    Login = 'Login',
    Dashboard = 'Dashboard',
    CreatePlayer = 'Create Player',
    CreateAttribute = "CreateAttribute",
    CreatePosition = "CreatePosition"
}

export type MainStackParamList = {
    [MainRoutes.Dashboard]: undefined
    [MainRoutes.Login]: undefined
    [MainRoutes.CreatePlayer]:undefined
    [MainRoutes.CreateAttribute]:undefined
    [MainRoutes.CreatePosition]:undefined

}

export const MainStack = createNativeStackNavigator<MainStackParamList>()