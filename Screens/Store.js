import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import React, { useEffect } from 'react'
import { Divider } from 'react-native-paper';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const Store = ({ navigation }) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => {
                console.warn(err)
            })
            .finally(() => setIsLoading(false))
    }, [])


    // refreshing controller
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {

            setRefreshing(false);
        }, 2000);
    }, []);


    // render Item for every single store 
    renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('ViewStore')}
                style={styles.store}>
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
                </View>
            </TouchableOpacity>
        )
    }




    return (

        <SafeAreaView>
            <View style={{ marginBottom: 10 }}>
                <View style={styles.headingCon}>
                    <View style={styles.headingAndArrow}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ opacity: .8 }}>
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
                        <Text style={styles.heading}>Coupons Stores</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Search')}
                        style={styles.search}>
                        <View style={{ opacity: .5 }}>
                            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G clip-path="url(#clip0_106_1688)">
                                    <Path d="M2.5 8.33333C2.5 9.09938 2.65088 9.85792 2.94404 10.5657C3.23719 11.2734 3.66687 11.9164 4.20854 12.4581C4.75022 12.9998 5.39328 13.4295 6.10101 13.7226C6.80875 14.0158 7.56729 14.1667 8.33333 14.1667C9.09938 14.1667 9.85792 14.0158 10.5657 13.7226C11.2734 13.4295 11.9164 12.9998 12.4581 12.4581C12.9998 11.9164 13.4295 11.2734 13.7226 10.5657C14.0158 9.85792 14.1667 9.09938 14.1667 8.33333C14.1667 7.56729 14.0158 6.80875 13.7226 6.10101C13.4295 5.39328 12.9998 4.75022 12.4581 4.20854C11.9164 3.66687 11.2734 3.23719 10.5657 2.94404C9.85792 2.65088 9.09938 2.5 8.33333 2.5C7.56729 2.5 6.80875 2.65088 6.10101 2.94404C5.39328 3.23719 4.75022 3.66687 4.20854 4.20854C3.66687 4.75022 3.23719 5.39328 2.94404 6.10101C2.65088 6.80875 2.5 7.56729 2.5 8.33333Z" stroke="black" stroke-opacity="0.5" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M17.5 17.5L12.5 12.5" stroke="black" stroke-opacity="0.5" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_106_1688">
                                        <Rect width="20" height="20" fill="white" />
                                    </ClipPath>
                                </Defs>
                            </Svg>
                        </View>
                    </TouchableOpacity>
                </View>
                <Divider style={{ width: '90%', alignSelf: 'center' }} />




                {/* this is Top Stores  section*/}

                <View style={styles.topStoreCon}>
                    <Text style={styles.topStoreHeading}>Top Used Store</Text>
                    {
                        isLoading ?
                            <ActivityIndicator color={'#797979'} size={'small'} />
                            : 
                            <FlatList
                                data={data}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => <TouchableOpacity
                                    activeOpacity={.7}
                                    style={{ width: 70, marginRight: 20, paddingTop: 20, }}
                                    onPress={() => navigation.navigate('ViewStore')}>
                                    <View>
                                        <View
                                            style={styles.topUsedItem}
                                            keyExtractor={item => item.id}
                                        >
                                            <Image />
                                        </View>
                                        <Text>{item.name.slice(0, 8)}</Text>
                                    </View>
                                </TouchableOpacity>}
                            />
                    }
                </View>
            </View>

            {/* this is all store section */}

            <View style={styles.allStoreMainCon}>
                <Text style={styles.allStoreText}>All Stores</Text>
                {
                    isLoading ? <ActivityIndicator />
                        : 
                        <FlatList
                            refreshControl={
                                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                            }
                            contentContainerStyle={{ paddingRight: 20, justifyContent: 'space-between' }}
                            data={data}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            // scrollEnabled={true}
                            renderItem={this.renderItem}
                            height={655}
                        /> 
                }
            </View>

        </SafeAreaView>
    )
}

export default Store

const styles = StyleSheet.create({
    headingCon: {
        backgroundColor: '#fff',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headingAndArrow: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    heading: {
        marginLeft: 22,
        fontSize: 18,
        fontWeight: 700,
    },
    search: {
        height: 40,
        width: 40,
        borderColor: '#e6e6e6',
        borderWidth: 2,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topStoreCon: {
        paddingVertical: 20,
        paddingLeft: 20,
        backgroundColor: '#fff'
    },
    topStoreHeading: {
        fontSize: 16,
        color: '#000', opacity: .5,

    },
    topUsedItem: {
        width: 60,
        height: 60,
        marginRight: 35,
        borderRadius: 40,
        shadowColor: '#797979',
        elevation: 20,
        shadowOffset: {
            width: 0,
            height: 10
        },
        backgroundColor: '#fff',
        marginBottom: 15,
    },
    topItem: {
        shadowColor: '#797979',
        elevation: 10
    },
    allStoreMainCon: {
        paddingVertical: 20,
        backgroundColor: '#fff'
    },
    allStoreText: {
        fontSize: 16,
        opacity: .5,
        marginBottom: 20,
        marginLeft: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    flatList: {
        height: 50,
        backgroundColor: 'red'
    },
    store: {
        marginTop: 20,
        width: '47%',
        marginLeft: '3.5%',
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: 'lightgrey',
        elevation: 40,
    }
})