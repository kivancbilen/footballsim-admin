import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import fetchApiCall from './services/adminlogin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './pages/dashboard';
import MainNavigation from './routing/MainNavigation';
import { Provider } from 'react-redux';
import store from './redux';
import { MainNavigationProp } from './routing/types';
import { MainRoutes } from './routing/routes';




export default function App({ navigation }: HomeScreenProps) {
  return (
    <Provider store={store}>
      <StatusBar hidden />
      <MainNavigation />
    </Provider>
  );
}


