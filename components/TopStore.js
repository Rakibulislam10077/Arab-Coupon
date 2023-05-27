import { StyleSheet, FlatList, Text, View, Pressable, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const TopStore = ({ navigation }) => {

    const DATA = [
        { id: 1, name: 'Trending' },
        { id: 2, name: 'Newest' },
        { id: 3, name: 'Fashion' },
        { id: 4, name: 'Electronics' },
        { id: 5, name: 'Trending' },
    ]

    return (
        <>
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
        </>
    )
}

export default TopStore

const styles = StyleSheet.create({})