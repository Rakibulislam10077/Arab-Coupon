import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Coupon from '../Screens/Coupon';
import Favorite from '../Screens/Favorite';
import Account from '../Screens/Account';
import Search from '../components/Search';
import TopStore from '../components/TopStore';
import ViewStore from '../components/ViewStore';
import Store from '../Screens/Store';
import Notifications from '../components/Notifications';
import Profile from '../components/Profile';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                height: 70,
                position: 'absolute',
                bottom: 20,
                marginHorizontal: 20,
                borderRadius: 40,
                paddingTop: 9,
                paddingBottom: 14,
                paddingHorizontal: 28
            },

        }}>
            <Tab.Screen options={{
                headerShown: false,
                headerStyle: { height: 100, },
                headerTitleStyle: { marginTop: 30 }
            }} name='Home' component={Home} />
            <Tab.Screen
                options={{ headerShown: false, }}
                name='Store' component={Store} />
            <Tab.Screen
                options={{ headerShown: false }}
                name='Coupon' component={Coupon} />
            <Tab.Screen
                options={{ headerShown: false }}
                name='Favorite' component={Favorite} />
            <Tab.Screen
                options={{ headerShown: false }}
                name='Account' component={Account} />
        </Tab.Navigator>
    )
}
const Navigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name='HomeScreen' component={HomeScreen} />
            <Stack.Screen
                options={{ headerShown: false }}
                name='Search' component={Search} />
            <Stack.Screen
                options={{ headerShown: false }}
                name='TopStore' component={TopStore} />
            <Stack.Screen
                options={{ headerShown: false }}
                name='ViewStore' component={ViewStore} />
            <Stack.Screen
                options={{ headerShown: false }}
                name='Notifications' component={Notifications} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>

    )
}

export default Navigator

