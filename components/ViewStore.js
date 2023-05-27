import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import React from 'react';

const ViewStore = ({ navigation }) => {
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
                    <Text style={{ fontSize: 16, opacity: .5, marginLeft: 22 }}>Store Details</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ViewStore

const styles = StyleSheet.create({})