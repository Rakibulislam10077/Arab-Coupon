import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider } from 'react-native-paper';

const Notifications = ({ navigation }) => {

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: '#fff' }}>
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
                    <Text style={{ fontSize: 18, fontWeight: 700, marginLeft: 22 }}>Notification</Text>
                </View>
                <Text style={{ fontSize: 18, opacity: .5, marginLeft: 55, marginTop: 10, marginBottom: 18 }}>You have <Text style={{ fontWeight: 700 }}>{3}</Text> Notification Today</Text>
                <Divider style={{ width: '90%', alignSelf: 'center' }} />
            </View>
            <View style={{ backgroundColor: '#fff' }}>
                <Text style={{ fontSize: 14, opacity: .4, marginTop: 20, marginBottom: 12, marginLeft: 20 }}>Today</Text>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('ViewStore')} onFocus={backgroundColor = '#fff'} activeOpacity={.4} style={{ backgroundColor: '#797979', opacity: .2, marginBottom: 10, height: 66, paddingHorizontal: 20 }}>
                        <View></View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Notifications

const styles = StyleSheet.create({})