import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import React from 'react';
import All from './All';
import Coupons from './Coupons';
import Deal from './Deal';
import HowToUse from './HowToUse';
import { Divider } from 'react-native-paper';

const ViewStore = ({ navigation }) => {
    const [selected, setSelected] = React.useState(0)
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: '#fff', marginBottom: 10 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center', paddingTop: 20,
                    paddingLeft: 25
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
                    <Text style={{ fontSize: 16, opacity: .5, marginLeft: 22 }}>Store Details</Text>
                </View>
            </View>
            <View style={styles.TabNavigateContainer}>
                <TouchableOpacity onPress={() => { setSelected(0) }}
                    style={{
                        borderBottomColor: selected == 0 ? '#283D27' : '#fff',
                        borderBottomWidth: 2, paddingBottom: 10,
                        width: 70,
                        marginBottom: 0
                    }}>
                    <Text style={{
                        color: selected == 0
                            ?
                            '#000' : '#797979',
                        fontWeight: selected == 0
                            ?
                            700 : 400,
                        marginLeft: 25
                    }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setSelected(1) }}
                    style={{
                        borderBottomColor: selected == 1 ? '#283D27' : '#fff',
                        borderBottomWidth: 2, paddingBottom: 10,
                        width: 80,
                        marginBottom: 0
                    }}
                >
                    <Text style={{
                        color: selected == 1
                            ?
                            '#000' : '#797979',
                        fontWeight: selected == 1
                            ?
                            700 : 400,
                        marginLeft: 10
                    }} >Coupon</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setSelected(2) }}
                    style={{
                        borderBottomColor: selected == 2 ? '#283D27' : '#fff',
                        borderBottomWidth: 2, paddingBottom: 10,
                        width: 80,
                        marginBottom: 0
                    }}
                >
                    <Text style={{
                        color: selected == 2
                            ?
                            '#000' : '#797979',
                        fontWeight: selected == 2
                            ?
                            700 : 400,
                        marginLeft: 20
                    }} >Deal</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setSelected(3) }}
                    style={{
                        borderBottomColor: selected == 3 ? '#283D27' : '#fff',
                        borderBottomWidth: 2, paddingBottom: 10,
                        width: 100,
                        marginBottom: 0
                    }}
                >
                    <Text style={{
                        color: selected == 3
                            ?
                            '#000' : '#797979',
                        fontWeight: selected == 3
                            ?
                            700 : 400,
                        marginLeft: 8
                    }} >How to Use</Text>
                </TouchableOpacity>
            </View>
            <Divider />
            {
                selected == 0 ? (<All />) : selected == 1 ? (<Coupons />) : selected == 2 ? (<Deal />) : (<HowToUse />)
            }
        </SafeAreaView>
    )
}

export default ViewStore

const styles = StyleSheet.create({
    TabNavigateContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 10
    },
    // TouchContainer: {
    //     borderBottomColor: selected == 0 ? '#000' : '#fff',
    //     borderBottomWidth: 1, paddingBottom: 10,
    //     width: 70,
    //     marginBottom: 0
    // }
})