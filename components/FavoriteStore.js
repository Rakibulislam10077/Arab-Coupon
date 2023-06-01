import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'

const FavoriteStore = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ paddingTop: 30, backgroundColor: '#fff' }}>
                <Text style={{ marginLeft: 20 }}>Favorite Stores</Text>
                <Button mode='outlined' onPress={() => navigation.navigate('ViewStore')}>store Details</Button>
            </View>
        </ScrollView>
    )
}

export default FavoriteStore

const styles = StyleSheet.create({})