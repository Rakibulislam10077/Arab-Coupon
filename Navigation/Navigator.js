import React from 'react';
import { Image, View, Text } from 'react-native';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
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
import OfferBottomSheet from '../components/OfferBottomSheet';
import MyProfile from '../components/MyProfile';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Onboard from '../components/onboarding/Onboard';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const HomeScreen = () => {
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 70, position: 'absolute', bottom: 20,
                    marginHorizontal: 20, borderRadius: 40, paddingTop: 9,
                    paddingBottom: 14, paddingHorizontal: 28,
                    shadowColor: '#797979', shadowOffset: {
                        width: 10,
                        height: 10,
                    },
                    shadowOpacity: .25,
                    elevation: 20,
                    borderTopColor: '#fff'
            },

            }}

        >
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                source={focused ? require("../assets/images/ActiveHome.png") : require('../assets/images/defaultHome.png')}
                                resizeMode="contain"
                                style={{ width: 30, height: 30, alignSelf: 'center' }}
                            />
                            <Text style={{
                                color: focused ? '#283D27' : 'rgba(0, 0, 0, 0.5)',
                                fontWeight: focused ? 600 : 400,
                                fontSize: 12,
                            }}>Home</Text>
                        </View>
                    );
                },
                headerShown: false,
                headerStyle: { height: 100, },
                headerTitleStyle: { marginTop: 30 }
            }} name='Home' component={Home} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Image
                                    source={focused ? require("../assets/images/ActiveStore.png") : require('../assets/images/defaultStore.png')}
                                    resizeMode="contain"
                                    style={{ width: 30, height: 30, alignSelf: 'center' }}
                                />
                                <Text style={{
                                    color: focused ? '#283D27' : 'rgba(0, 0, 0, 0.5)',
                                    fontWeight: focused ? 600 : 400,
                                    fontSize: 12,
                                }}>Store</Text>
                            </View>
                        );

                    },
                    headerShown: false,
                }}
                name='Store' component={Store} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Image
                                    source={focused ? require("../assets/images/ActiveCoupon.png") : require('../assets/images/defaultCoupon.png')}
                                    resizeMode="contain"
                                    style={{ width: 30, height: 30, alignSelf: 'center' }}
                                />
                                <Text style={{
                                    color: focused ? '#283D27' : 'rgba(0, 0, 0, 0.5)',
                                    fontWeight: focused ? 600 : 400,
                                    fontSize: 12,
                                }}>Coupon</Text>
                            </View>
                        );

                    },
                    headerShown: false
                }}
                name='Coupon' component={Coupon} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Image
                                    source={focused ? require("../assets/images/ActiveFavorite.png") : require('../assets/images/defaultFavorite.png')}
                                    resizeMode="contain"
                                    style={{ width: 30, height: 30, alignSelf: 'center' }}
                                />
                                <Text style={{
                                    color: focused ? '#283D27' : 'rgba(0, 0, 0, 0.5)',
                                    fontWeight: focused ? 600 : 400,
                                    fontSize: 12,
                                }}>Favorite</Text>
                            </View>
                        );

                    },
                    headerShown: false
                }}
                name='Favorite' component={Favorite} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Image
                                    source={focused ? require("../assets/images/ActiveAccount.png") : require('../assets/images/defaultAccount.png')}
                                    resizeMode="contain"
                                    style={{ width: 30, height: 30, alignSelf: 'center' }}
                                />
                                <Text style={{
                                    color: focused ? '#283D27' : 'rgba(0, 0, 0, 0.5)',
                                    fontWeight: focused ? 600 : 400,
                                    fontSize: 12,
                                }}>Account</Text>
                            </View>
                        );

                    },
                    headerShown: false
                }}
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
            <Stack.Screen
                options={{ headerShown: false }}
                name='OfferBottomSheet' component={OfferBottomSheet} />
            <Stack.Screen
                options={{ headerShown: false }}
                name='MyProfile' component={MyProfile} />
            <Stack.Screen
                options={{ headerShown: false }}
                name='Login' component={Login} />
            <Stack.Screen
                options={{ headerShown: false }}
                name='SignUp' component={SignUp} />
            <Stack.Screen
                options={{ headerShown: false }}
                name='Onboard' component={Onboard} />
        </Stack.Navigator>

    )
}

export default Navigator

