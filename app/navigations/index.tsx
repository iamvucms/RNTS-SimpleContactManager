import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { navigationRef } from '../../rootNavigation';
import HomeStack from './HomeStack';

const stack = createStackNavigator()
const index = () => {
    const screenOptions: StackNavigationOptions = {
        headerShown: false
    }
    return (
        <NavigationContainer ref={navigationRef}>
            <stack.Navigator screenOptions={screenOptions}>
                <stack.Screen component={HomeStack} name="Home" />
                <stack.Screen component={HomeStack} name="Home2" />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default index

const styles = StyleSheet.create({})
