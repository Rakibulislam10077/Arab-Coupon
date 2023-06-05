import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { Divider } from 'react-native-paper';

const MyProfile = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <View style={styles.headingCon}>
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
                    <Text style={styles.heading}>My profile</Text>
                </View>
                {/* profile setup */}

                <View style={styles.profileCon}>
                    <TouchableOpacity>
                        <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M12 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H6C6.53043 7 7.03914 6.78929 7.41421 6.41421C7.78929 6.03914 8 5.53043 8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5C16 5.53043 16.2107 6.03914 16.5858 6.41421C16.9609 6.78929 17.4696 7 18 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V12.5" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M16 19H22" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M19 16V22" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M9 13C9 13.7956 9.31607 14.5587 9.87868 15.1213C10.4413 15.6839 11.2044 16 12 16C12.7956 16 13.5587 15.6839 14.1213 15.1213C14.6839 14.5587 15 13.7956 15 13C15 12.2044 14.6839 11.4413 14.1213 10.8787C13.5587 10.3161 12.7956 10 12 10C11.2044 10 10.4413 10.3161 9.87868 10.8787C9.31607 11.4413 9 12.2044 9 13Z" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round" />
                        </Svg>
                    </TouchableOpacity>
                    {/* profile box */}
                    <View style={styles.profileBox}>
                    </View>
                    {/* ============== */}
                    <TouchableOpacity>
                        <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M7 12H21M21 12L18 9M21 12L18 15" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round" />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <View style={styles.UserDetailContainer}>
                    <View style={styles.inputFieldAndText}>
                        <Text style={styles.text}>Name</Text>
                        <Text style={styles.userName} >Abdul karim</Text>
                    </View>
                    <Divider style={{ marginBottom: 30 }} />
                    <View style={styles.inputFieldAndText}>
                        <Text style={styles.text}>Email</Text>
                        <Text style={styles.userName} >abdulkarimmail@gmail.com</Text>
                    </View>
                    <Divider style={{ marginBottom: 30 }} />
                    <View style={styles.inputFieldAndText}>
                        <Text style={styles.text}>Phone Number</Text>
                        <Text style={styles.userName} >+880</Text>
                    </View>
                    <Divider style={{ marginBottom: 30 }} />
                    <View style={styles.inputFieldAndText}>
                        <Text style={styles.text}>Country</Text>
                        <Text style={styles.userName} >Bangladesh</Text>
                    </View>
                    <Divider />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    headingCon: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        marginBottom: 22,
        height: 64,
        marginBottom: 10
    },
    heading: {
        fontSize: 18,
        fontWeight: 700,
        marginLeft: 22,
        color: 'rgba(0, 0, 0, 0.6)'
    },
    profileCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop: 24,
        paddingBottom: 50
    },
    profileBox: {
        width: 100, height: 100,
        borderRadius: 50, borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        marginHorizontal: 43,
    },
    UserDetailContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    inputFieldAndText: {
        marginLeft: 30,
        marginBottom: 15
    },
    text: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.3)',
        marginBottom: 15
    },
    userName: {
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.6)'
    }
})