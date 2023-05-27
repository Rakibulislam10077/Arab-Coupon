import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect, Image } from 'react-native-svg';
import { Menu, PaperProvider } from 'react-native-paper';

const Search = ({ }) => {
    const [visible, setVisible] = React.useState(false)
    return (
        <PaperProvider>
            <View style={{
                paddingLeft: 22,
                paddingRight: 15,
                height: 60, width: '90%', alignSelf: 'center', borderRadius: 40,
                marginTop: 30, marginBottom: 20, flexDirection: 'row', alignItems: 'center',
                backgroundColor: '#fff'
            }}>
                <View style={{ opacity: .8 }}>
                    <Svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                        <G clip-path="url(#clip0_106_1688)">
                            <Path d="M17.5 17.5L12.5 12.5" stroke="black" stroke-opacity="0.5" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M2.5 8.33333C2.5 9.09938 2.65088 9.85792 2.94404 10.5657C3.23719 11.2734 3.66687 11.9164 4.20854 12.4581C4.75022 12.9998 5.39328 13.4295 6.10101 13.7226C6.80875 14.0158 7.56729 14.1667 8.33333 14.1667C9.09938 14.1667 9.85792 14.0158 10.5657 13.7226C11.2734 13.4295 11.9164 12.9998 12.4581 12.4581C12.9998 11.9164 13.4295 11.2734 13.7226 10.5657C14.0158 9.85792 14.1667 9.09938 14.1667 8.33333C14.1667 7.56729 14.0158 6.80875 13.7226 6.10101C13.4295 5.39328 12.9998 4.75022 12.4581 4.20854C11.9164 3.66687 11.2734 3.23719 10.5657 2.94404C9.85792 2.65088 9.09938 2.5 8.33333 2.5C7.56729 2.5 6.80875 2.65088 6.10101 2.94404C5.39328 3.23719 4.75022 3.66687 4.20854 4.20854C3.66687 4.75022 3.23719 5.39328 2.94404 6.10101C2.65088 6.80875 2.5 7.56729 2.5 8.33333Z" stroke="black" stroke-opacity="0.5" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_106_1688">
                                <Rect width="20" height="20" fill="white" />
                            </ClipPath>
                        </Defs>
                    </Svg>
                </View>

                <TextInput
                    style={{
                        backgroundColor: "transparent",
                        flex: 3,
                        marginLeft: 15,
                        height: 50
                    }}
                    placeholder='Search'
                />
                <View >
                    <Menu
                        contentStyle={{ backgroundColor: '#fff', borderRadius: 10, width: 119 }} visible={visible}
                        onDismiss={() => setVisible(false)}
                        anchor={<TouchableOpacity onPress={() => setVisible(true)}>
                            <Svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Rect width="30" height="30" rx="15" fill="#717171" fill-opacity="0.81" />
                                <G clip-path="url(#clip0_124_3880)">
                                    <Path d="M8.33337 13.3333C8.33337 13.7753 8.50897 14.1992 8.82153 14.5118C9.13409 14.8244 9.55801 15 10 15C10.4421 15 10.866 14.8244 11.1786 14.5118C11.4911 14.1992 11.6667 13.7753 11.6667 13.3333C11.6667 12.8913 11.4911 12.4673 11.1786 12.1548C10.866 11.8422 10.4421 11.6666 10 11.6666C9.55801 11.6666 9.13409 11.8422 8.82153 12.1548C8.50897 12.4673 8.33337 12.8913 8.33337 13.3333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M10 8.33337V11.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M10 15V21.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M13.3334 18.3333C13.3334 18.7753 13.509 19.1992 13.8215 19.5118C14.1341 19.8244 14.558 20 15 20C15.4421 20 15.866 19.8244 16.1786 19.5118C16.4911 19.1992 16.6667 18.7753 16.6667 18.3333C16.6667 17.8913 16.4911 17.4673 16.1786 17.1548C15.866 16.8422 15.4421 16.6666 15 16.6666C14.558 16.6666 14.1341 16.8422 13.8215 17.1548C13.509 17.4673 13.3334 17.8913 13.3334 18.3333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M15 8.33337V16.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M15 20V21.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M18.3334 10.8333C18.3334 11.2753 18.509 11.6992 18.8215 12.0118C19.1341 12.3244 19.558 12.5 20 12.5C20.4421 12.5 20.866 12.3244 21.1786 12.0118C21.4911 11.6992 21.6667 11.2753 21.6667 10.8333C21.6667 10.3913 21.4911 9.96734 21.1786 9.65478C20.866 9.34222 20.4421 9.16663 20 9.16663C19.558 9.16663 19.1341 9.34222 18.8215 9.65478C18.509 9.96734 18.3334 10.3913 18.3334 10.8333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M20 8.33337V9.16671" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M20 12.5V21.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_124_3880">
                                        <Rect width="20" height="20" fill="white" transform="translate(5 5)" />
                                    </ClipPath>
                                </Defs>
                            </Svg>
                        </TouchableOpacity>}>
                        <Menu.Item style={styles.menuItem} onPress={() => { }} titleStyle={{ color: '#797979' }} title="Store" />
                        <Menu.Item style={styles.menuItem} onPress={() => { }} titleStyle={{ color: '#797979' }} title="Coupon" />
                        <Menu.Item style={styles.menuItem} onPress={() => { }} titleStyle={{ color: '#797979' }} title="Deals" />
                    </Menu>
                </View>
            </View>
        </PaperProvider>
    )
}

export default Search;

const styles = StyleSheet.create({
    menuItem: {
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center'
    }
})