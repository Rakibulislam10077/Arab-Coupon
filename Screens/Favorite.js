import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { Button, Divider } from 'react-native-paper';
import FavoriteStore from '../components/FavoriteStore';
import FavoriteCoupon from '../components/FavoriteCoupon';

const Favorite = ({ navigation, }) => {
    const [storeActive, setStoreActive] = React.useState(false);
    const [selectedTab, setSelectedTab] = React.useState(0)
    const [showStore, setShowStore] = React.useState(false);
    const [couponActive, setCouponActive] = React.useState(false);
    const [showCoupon, setShowCoupon] = React.useState(false)
    const storeBtn = () => {
        setStoreActive(true);
        setShowStore(true)
    }
    const couponBtn = () => {
        setCouponActive(true);
        setShowCoupon(true);
    }
    return (
        <SafeAreaView>
            <View>
                <View style={{ backgroundColor: '#fff' }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center', paddingTop: 25,
                        paddingLeft: 20,
                        marginBottom: 22
                    }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G clip-path="url(#clip0_106_1830)">
                                    <Path d="M12.5 5L7.5 10L12.5 15" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_106_1830">
                                        <Rect width="20" height="20" fill="white" />
                                    </ClipPath>
                                </Defs>
                            </Svg>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: 700, marginLeft: 22, }}>Favorite</Text>
                    </View>
                    <Divider style={{ height: 2, backgroundColor: '#e6e6e6' }} />
                </View>
            </View>
            <View style={{
                backgroundColor: '#fff',
                flexDirection: 'row',
                paddingTop: 40,
                paddingBottom: 13,
                paddingLeft: 38,
            }}>
                <TouchableOpacity onPress={() => { setSelectedTab(0) }} mode='text' style={{
                    borderBottomColor: selectedTab == 0 ? "#000" : "#fff",
                    borderBottomWidth: 1, paddingBottom: 10,
                    position: 'absolute',
                    bottom: 0,
                    marginLeft: 31,
                    width: 80
                }}><Text
                    style={{
                        color: selectedTab == 0
                            ?
                            '#000' : '#797979',
                        fontWeight: selectedTab == 0
                            ?
                            700 : 400,
                        width: 80,
                        marginLeft: 20
                    }}
                >Store</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSelectedTab(1) }}
                    style={{
                        borderBottomColor: selectedTab == 1 ? '#000' : '#fff',
                        borderBottomWidth: 1, paddingBottom: 10,
                        position: 'absolute',
                        bottom: 0,
                        marginLeft: 130,
                    }}><Text
                        style={{
                            color: selectedTab == 1
                                ?
                                '#000' : '#797979',
                            fontWeight: selectedTab == 1
                                ?
                                700 : 400,
                            width: 80,
                            marginLeft: 20
                        }}>Coupon</Text></TouchableOpacity>
            </View>
            <Divider style={{ width: '90%', alignSelf: 'center' }} />
            {
                selectedTab == 0 ? (<FavoriteStore />)
                    :
                    (<FavoriteCoupon />)
            }

        </SafeAreaView>
    )
}

export default Favorite

const styles = StyleSheet.create({})