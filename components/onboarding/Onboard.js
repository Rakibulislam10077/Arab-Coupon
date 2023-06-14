import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { transform } from 'typescript'


const slides = [
    {
        id: 1,
        title: 'Best Coupon',
        description: 'It is a long established fact that a reader will be distracted by the readable content ',
        cloud: require('../../assets/images/Cloud.png'),
        vector: require('../../assets/images/Putul1.png')

    },
    {
        id: 2,
        title: 'Shopping ',
        description: 'It is a long established fact that a reader will be distracted by the readable content ',
        cloud: require('../../assets/images/Cloud.png'),
        vector: require('../../assets/images/Putul-2.png')
    },
    {
        id: 3,
        title: 'Explore & Enjoy',
        description: 'It is a long established fact that a reader will be distracted by the readable content ',
        cloud: require('../../assets/images/Cloud.png'),
        vector: require('../../assets/images/Putul-3.png')

    },
]



const Onboard = () => {
    const [showHomePage, setShowHomePage] = React.useState(false)

    if (!showHomePage) {
        return (
            < AppIntroSlider
                data={slides}
                activeDotStyle={{ backgroundColor: '#57467A', width: 24 }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Image
                                style={[StyleSheet.absoluteFillObject, styles.image]}
                                source={require('../../assets/images/onBoardBackground.png')}
                                resizeMode='cover'
                            />
                            <View style={styles.imgContainer}>
                                <Image
                                    style={styles.cloud}
                                    source={item.imageTwo}
                                />
                                <Image
                                    source={item.vector}
                                />
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text style={styles.desc}>
                                    {item.description}
                                </Text>
                            </View>

                        </View>
                    )
                }}
            />
        )
    }
    return (
        <View style={styles.container}>
        </View>
    )
}

export default Onboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    imageTwo: {
        top: 80,
        width: '100%'
    },
    imgContainer: {
        position: "relative",
        marginTop: 150
    },
    ImageThree: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        // transform: translateX(-40)
    },
    ImageFour: {
        position: 'absolute',
        bottom: 40
    },
    /* // imageTwo: {
    //     top: 80,
    //     width: '100%'
    // },
    // ImageThree: {
    //     position: 'absolute',
    //     top: 355,
    //     left: 60
    // },
    // ImageFour: {
    //     position: 'absolute',
    //     top: 118
    // }, */
    textContainer: {
        position: 'absolute',
        top: 560,
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    desc: {
        textAlign: 'center',
        width: '70%',
        alignSelf: 'center',
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.5)',
    },
})