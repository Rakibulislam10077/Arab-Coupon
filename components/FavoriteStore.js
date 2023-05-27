import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const FavoriteStore = () => {
    return (
        <ScrollView>
            <View style={{ paddingTop: 30, backgroundColor: '#fff' }}>
                <Text style={{ marginLeft: 20 }}>Favorite Stores</Text>
            </View>
        </ScrollView>
    )
}

export default FavoriteStore

const styles = StyleSheet.create({})