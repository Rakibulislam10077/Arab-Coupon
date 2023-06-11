import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Login = () => {
    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <Text style={styles.loginText}>Login Account</Text>
                <View>
                    <View style={styles.eAndPField}>
                        <TextInput style={{ fontSize: 18 }} placeholder='Email' />
                    </View>
                    <View style={styles.eAndPField}>
                        <TextInput style={{ fontSize: 18 }} placeholder='Password' />
                    </View>
                </View>
                <View>
                    <View>
                        <TouchableOpacity
                            activeOpacity={.6}
                            style={styles.LoginBtn}><Text style={{ color: '#fff', fontSize: 20, alignSelf: 'center' }}>Log in</Text></TouchableOpacity>
                    </View>
                    <Text style={{ alignSelf: 'center', fontSize: 16, color: 'rgba(0,0,0,0.5)', marginVertical: 30 }}>Or</Text>
                    <View>
                        <TouchableOpacity
                            activeOpacity={.6}
                            style={styles.googleBtn}>
                            <Image style={{ width: 30, height: 30 }} source={require('../assets/images/Google.png')} />
                            <Text style={{ fontSize: 16, marginLeft: 20, color: 'rgba(0,0,0,0.6)' }}>
                                Continue with google
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        height: '100%'
    },
    eAndPField: {
        backgroundColor: '#EAEEF0',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 20,
        marginBottom: 30
    },
    LoginBtn: {
        backgroundColor: '#283D27',
        height: 50,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
    },
    loginText: {
        fontSize: 24,
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 50,
    },
    googleBtn: {
        width: '80%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#797979',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})