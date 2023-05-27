import { Image, RefreshControl, TextInput, StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import Svg, { Path, G, Rect, ClipPath, Defs } from 'react-native-svg';
import { Badge, Provider, } from 'react-native-paper';
import React from 'react';





const Home = ({ navigation }) => {

    const [refreshing, setRefreshing] = React.useState(false);

    const DATA = [
        {
            id: 1, name: 'Trending', img: <Svg width="30" height="30" viewBox="0 0 20 20" fill="none" >
                <G clip- path="url(#clip0_106_1695)" >
                    <Path d="M2.5 14.1666L7.5 9.16659L10.8333 12.4999L17.5 5.83325" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M11.6665 5.83325H17.4998V11.6666" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                </G >
                <Defs>
                    <ClipPath id="clip0_106_1695">
                        <Rect width="20" height="20" fill="white" />
                    </ClipPath>
                </Defs>
            </Svg >
        },
        {
            id: 2, name: 'Newest', img: <Svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <G clip-path="url(#clip0_106_1701)">
                    <Path d="M5.86481 3.75C5.04335 4.29297 4.33686 4.99239 3.78564 5.80833" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M2.65504 8.50757C2.46329 9.47258 2.46329 10.4659 2.65504 11.4309" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M3.75 14.135C4.29297 14.9565 4.99239 15.663 5.80833 16.2142" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M8.50732 17.345C9.47018 17.5358 10.4611 17.5358 11.424 17.345" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M14.1348 16.25C14.9562 15.707 15.6627 15.0076 16.2139 14.1917" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M17.3452 11.4924C17.537 10.5274 17.537 9.5341 17.3452 8.56909" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M16.2502 5.86506C15.7073 5.0436 15.0078 4.3371 14.1919 3.78589" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M11.4927 2.65495C10.5288 2.4577 9.53544 2.45204 8.56934 2.63829" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M10.0002 6.66675L8.3335 10.0001H11.6668L10.0002 13.3334" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M10 17.5C11.9891 17.5 13.8968 16.7098 15.3033 15.3033C16.7098 13.8968 17.5 11.9891 17.5 10C17.5 8.01088 16.7098 6.10322 15.3033 4.6967C13.8968 3.29018 11.9891 2.5 10 2.5" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                </G>
                <Defs>
                    <ClipPath id="clip0_106_1701">
                        <Rect width="20" height="20" fill="white" />
                    </ClipPath>
                </Defs>
            </Svg>
        },
        {
            id: 3, name: 'Fashion', img: <Svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <G clip-path="url(#clip0_106_1715)">
                    <Path d="M10 7.5L3.3575 11.19C3.09755 11.3344 2.88095 11.5456 2.73017 11.8019C2.57939 12.0582 2.49992 12.3502 2.5 12.6475V13.3333C2.5 13.7754 2.67559 14.1993 2.98816 14.5118C3.30072 14.8244 3.72464 15 4.16667 15H5" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M15.0002 15H15.8335C16.2755 15 16.6994 14.8244 17.012 14.5118C17.3246 14.1993 17.5002 13.7754 17.5002 13.3333V12.6475C17.5002 12.3502 17.4208 12.0582 17.27 11.8019C17.1192 11.5456 16.9026 11.3344 16.6427 11.19L10.0002 7.5C8.786 6.825 8.33933 5.55583 8.3335 4.16667C8.3335 3.72464 8.50909 3.30072 8.82165 2.98816C9.13421 2.67559 9.55814 2.5 10.0002 2.5C10.4422 2.5 10.8661 2.67559 11.1787 2.98816C11.4912 3.30072 11.6668 3.72464 11.6668 4.16667" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M5 14.9999C5 14.5579 5.17559 14.134 5.48816 13.8214C5.80072 13.5088 6.22464 13.3333 6.66667 13.3333H13.3333C13.7754 13.3333 14.1993 13.5088 14.5118 13.8214C14.8244 14.134 15 14.5579 15 14.9999V15.8333C15 16.2753 14.8244 16.6992 14.5118 17.0118C14.1993 17.3243 13.7754 17.4999 13.3333 17.4999H6.66667C6.22464 17.4999 5.80072 17.3243 5.48816 17.0118C5.17559 16.6992 5 16.2753 5 15.8333V14.9999Z" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                </G>
                <Defs>
                    <ClipPath id="clip0_106_1715">
                        <Rect width="20" height="20" fill="white" />
                    </ClipPath>
                </Defs>
            </Svg>
        },
        {
            id: 4, name: 'Electronics', img: <Svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <G clip-path="url(#clip0_106_1722)">
                    <Path d="M10.8333 16.6666H4.16667C3.72464 16.6666 3.30072 16.491 2.98816 16.1784C2.67559 15.8659 2.5 15.4419 2.5 14.9999V7.49992C2.5 7.05789 2.67559 6.63397 2.98816 6.32141C3.30072 6.00885 3.72464 5.83325 4.16667 5.83325H5C5.44203 5.83325 5.86595 5.65766 6.17851 5.3451C6.49107 5.03254 6.66667 4.60861 6.66667 4.16659C6.66667 3.94557 6.75446 3.73361 6.91074 3.57733C7.06702 3.42105 7.27899 3.33325 7.5 3.33325H12.5C12.721 3.33325 12.933 3.42105 13.0893 3.57733C13.2455 3.73361 13.3333 3.94557 13.3333 4.16659C13.3333 4.60861 13.5089 5.03254 13.8215 5.3451C14.134 5.65766 14.558 5.83325 15 5.83325H15.8333C16.2754 5.83325 16.6993 6.00885 17.0118 6.32141C17.3244 6.63397 17.5 7.05789 17.5 7.49992V10.4166" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M7.5 10.8333C7.5 11.4963 7.76339 12.1322 8.23223 12.601C8.70107 13.0699 9.33696 13.3333 10 13.3333C10.663 13.3333 11.2989 13.0699 11.7678 12.601C12.2366 12.1322 12.5 11.4963 12.5 10.8333C12.5 10.1702 12.2366 9.53433 11.7678 9.06548C11.2989 8.59664 10.663 8.33325 10 8.33325C9.33696 8.33325 8.70107 8.59664 8.23223 9.06548C7.76339 9.53433 7.5 10.1702 7.5 10.8333Z" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M15.8332 13.3333L14.1665 15.8333H17.4998L15.8332 18.3333" stroke="#283D27" stroke-linecap="round" stroke-linejoin="round" />
                </G>
                <Defs>
                    <ClipPath id="clip0_106_1722">
                        <Rect width="20" height="20" fill="white" />
                    </ClipPath>
                </Defs>
            </Svg>
        },
    ]


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Coupon')}
                style={{
                    marginTop: 20,
                    width: '45.5%',
                    marginLeft: '3%',
                    height: 200,
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    shadowColor: 'gray',
                    shadowOffset: { width: 10, height: 14 },
                    shadowOpacity: 0.2,
                    elevation: 20,
                    shadowColor: 'gray',

                }}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                showsVerticalScrollIndicator={false}>
                <Provider>
                    {/* top header */}
                    <View style={{ backgroundColor: '#fff', marginBottom: 10, }}>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ marginTop: 70, paddingLeft: 14, paddingRight: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: 700, color: 'black', marginBottom: 15 }} >Arab Coupon Daily</Text>
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#595959' }}>Enjoy the best buying experience with discount</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Notifications')}
                                style={{
                                    position: 'absolute',
                                    top: 20, right: 20,
                                    borderWidth: 2, padding: 12,
                                    borderColor: '#e6e6e6',
                                    borderRadius: 50,
                                }}>
                                <Badge
                                    width={20}
                                    style={{
                                        position: 'absolute', top: -6, left: 30, backgroundColor: 'red',
                                    }} ><Text style={{ fontSize: 16, color: '#fff', }}>{9}</Text></Badge>
                                <Svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                                    <G clip-path="url(#clip0_106_1679)">
                                        <Path d="M8.3335 4.16667C8.3335 3.72464 8.50909 3.30072 8.82165 2.98816C9.13421 2.67559 9.55814 2.5 10.0002 2.5C10.4422 2.5 10.8661 2.67559 11.1787 2.98816C11.4912 3.30072 11.6668 3.72464 11.6668 4.16667C12.6238 4.61919 13.4397 5.32361 14.0269 6.20442C14.6141 7.08523 14.9505 8.10923 15.0002 9.16667V11.6667C15.0629 12.1848 15.2464 12.6809 15.5358 13.1151C15.8253 13.5493 16.2127 13.9095 16.6668 14.1667H3.3335C3.78761 13.9095 4.175 13.5493 4.46449 13.1151C4.75397 12.6809 4.93745 12.1848 5.00016 11.6667V9.16667C5.0498 8.10923 5.38625 7.08523 5.97345 6.20442C6.56066 5.32361 7.37649 4.61919 8.3335 4.16667Z" stroke="black" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M7.5 14.1667V15.0001C7.5 15.6631 7.76339 16.299 8.23223 16.7678C8.70107 17.2367 9.33696 17.5001 10 17.5001C10.663 17.5001 11.2989 17.2367 11.7678 16.7678C12.2366 16.299 12.5 15.6631 12.5 15.0001V14.1667" stroke="black" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </G>
                                    <Defs>
                                        <ClipPath id="clip0_106_1679">
                                            <Rect width="20" height="20" fill="white" />
                                        </ClipPath>
                                    </Defs>
                                </Svg>
                            </TouchableOpacity>
                        </View>
                        {/* this is searchbar */}
                        <TouchableOpacity
                            style={{
                                paddingLeft: 22, borderWidth: 2, borderColor: '#E6E6E6',
                                height: 60, width: '90%', alignSelf: 'center', borderRadius: 40,
                                marginTop: 30, marginBottom: 20, flexDirection: 'row', alignItems: 'center'
                            }}
                            activeOpacity={.5} onPress={() => navigation.navigate('Search')} >
                            <View style={{ opacity: .5 }}>
                                <Svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                                    <G clip-path="url(#clip0_106_1688)">
                                        <Path d="M17.5 17.5L12.5 12.5" stroke="black" stroke-opacity="0.5" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M2.5 8.33333C2.5 9.09938 2.65088 9.85792 2.94404 10.5657C3.23719 11.2734 3.66687 11.9164 4.20854 12.4581C4.75022 12.9998 5.39328 13.4295 6.10101 13.7226C6.80875 14.0158 7.56729 14.1667 8.33333 14.1667C9.09938 14.1667 9.85792 14.0158 10.5657 13.7226C11.2734 13.4295 11.9164 12.9998 12.4581 12.4581C12.9998 11.9164 13.4295 11.2734 13.7226 10.5657C14.0158 9.85792 14.1667 9.09938 14.1667 8.33333C14.1667 7.56729 14.0158 6.80875 13.7226 6.10101C13.4295 5.39328 12.9998 4.75022 12.4581 4.20854C11.9164 3.66687 11.2734 3.23719 10.5657 2.94404C9.85792 2.65088 9.09938 2.5 8.33333 2.5C7.56729 2.5 6.80875 2.65088 6.10101 2.94404C5.39328 3.23719 4.75022 3.66687 4.20854 4.20854C3.66687 4.75022 3.23719 5.39328 2.94404 6.10101C2.65088 6.80875 2.5 7.56729 2.5 8.33333Z" stroke="black" stroke-opacity="0.5" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                    </G>
                                    <Defs>
                                        <ClipPath id="clip0_106_1688">
                                            <Rect width="20" height="20" fill="white" />
                                        </ClipPath>
                                    </Defs>
                                </Svg>
                            </View>

                            <Text style={{ marginLeft: 20, opacity: .5 }}>Search for stores</Text>
                        </TouchableOpacity>
                        <FlatList
                            style={{ marginBottom: 20, marginLeft: 20 }}
                            data={DATA}
                            renderItem={({ item }) => <TouchableOpacity
                                style={{ flexDirection: 'row', alignItems: 'center', }}
                            >
                                <View style={{ marginRight: 10 }}>{item.img}</View>
                                <Text
                                    style={{ fontSize: 14, color: '#000', marginRight: 22 }}
                                >{item.name} </Text>
                            </TouchableOpacity>}
                            horizontal
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    {/* this is top stores section */}
                    <View style={{ flex: 1, backgroundColor: '#fff', paddingLeft: 20, paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20 }}>
                        <Text style={{ color: '#000', fontSize: 18 }}>Top Stores</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Store')}><Text style={{ color: '#283D27', fontSize: 12 }}>See All</Text></TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: '#fff', paddingBottom: 20, paddingLeft: 20 }}>
                        <View>
                            <FlatList

                                data={DATA}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => <Pressable
                                    onPress={() => navigation.navigate('ViewStore')}
                                    style={{
                                        height: 150,
                                        borderWidth: 1,
                                        borderRadius: 15,
                                        width: 200,
                                        marginRight: 20,
                                        marginTop: 20,
                                        borderColor: '#E6E6E6'
                                    }}>
                                    <Text>{item.name}</Text>
                                </Pressable>}
                            />
                        </View>
                    </View>

                    {/* this is carousel section */}
                    <View style={{ height: 220 }}>

                    </View>

                    {/* this is best coupon section */}

                    <View style={{ paddingTop: 20, backgroundColor: '#fff', }}>
                        <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18 }}>Best Coupons</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Coupon')}><Text style={{ fontSize: 12, color: '#283D27' }}>See All</Text></TouchableOpacity>
                        </View>
                        <View>
                            <FlatList
                                data={DATA}
                                numColumns={2}
                                renderItem={this.renderItem}
                            />
                        </View>
                    </View>
                </Provider>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})