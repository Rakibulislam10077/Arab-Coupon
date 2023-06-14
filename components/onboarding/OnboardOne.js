import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const OnboardOne = () => {
    return (
        <View>
            <Image
                source={require('../../assets/images/Cloud.png')}
                resizeMode='cover'
            />
        </View>
    )
}

export default OnboardOne

const styles = StyleSheet.create({})