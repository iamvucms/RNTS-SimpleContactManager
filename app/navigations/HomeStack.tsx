import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddContact, { AddContactRouteParams } from '../screens/AddContact'
import EditContact, { EditContactRouteParams } from '../screens/EditContact'
import ContactDetail, { ContactDetailRouteParams } from '../screens/ContactDetail'
import Home from '../screens/Home'
import { createStackNavigator, StackNavigationOptions, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    ContactDetail: ContactDetailRouteParams;
    AddContact: AddContactRouteParams;
    EditContact: EditContactRouteParams
};
const stack = createStackNavigator()
const HomeStack = () => {
    const stackGroupOptions: StackNavigationOptions = {
        headerShown: false,
    }
    return (
        <stack.Navigator screenOptions={stackGroupOptions}>
            <stack.Screen component={Home} name="Home" />
            <stack.Screen
                component={AddContact} name="AddContact" />
            <stack.Screen options={{ animationEnabled: false }}
                component={ContactDetail} name="ContactDetail" />
            <stack.Screen options={{}}
                component={EditContact} name="EditContact" />
        </stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})
