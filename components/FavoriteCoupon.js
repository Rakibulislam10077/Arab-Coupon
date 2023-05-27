import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const FavoriteCoupon = () => {
    return (
        <ScrollView>
            <View style={{ paddingTop: 30, backgroundColor: '#fff' }}>
                <Text style={{ marginLeft: 20 }}>Favorite Coupon</Text>
            </View>
        </ScrollView>
    )
}

export default FavoriteCoupon

const styles = StyleSheet.create({})