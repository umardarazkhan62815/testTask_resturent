import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, StatusBar } from 'react-native';
import { StackActions } from "@react-navigation/native";


const SplashScreen = ({ navigation }) => {

    const token = '';
    
    useEffect(() => {

        setTimeout(() => {
            console.log('==============', token)
            skipLogin()

        }, 2000);
    }, [token])

    const skipLogin = () => {
        if (token == '') {
            navigation.dispatch(StackActions.replace('Home'))
        }
    }

    return (
        <View style={style.mainContainer}>
            <Image style={{ height: 400, width: 400 }} source={require('../Assets/Images/restaurant.jpg')} resizeMode='contain' />
        </View>
    );
}
export default SplashScreen;
const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
