import React from 'react';
import { ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import AsyncStorage from '@react-native-community/async-storage';

import HomeScene from "../Scene/HomeScene/home.scene";
import LoginScene from '../Scene/LoginScene/login.scene';

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScene },
    Login: { screen: LoginScene }
});

const persistNavigationState = async (navState) => {
    try {
        await AsyncStorage.setItem("AppNavigationState", JSON.stringify(navState))
    } catch (err) {
        // handle the error according to your needs
    }
}

const loadNavigationState = async () => {
    const jsonString = await AsyncStorage.getItem(persistenceKey)
    return JSON.parse(jsonString)
}

export function getPersistenceFunctions() {
    return __DEV__ ? {
        persistNavigationState,
        loadNavigationState,
        renderLoadingExperimental: () => < ActivityIndicator />
    } : undefined;
}

export default createAppContainer(AppNavigator);