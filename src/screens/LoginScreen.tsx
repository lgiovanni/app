import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const backgroundImage = require('../../assets/fondoHome.webp');
const googleLogo = require('../../assets/Google.png');
const facebookLogo = require('../../assets/Facebook.png');

const LoginScreen = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    const handleFacebookLogin = () => {
        // Aquí iría la lógica para iniciar sesión con Facebook
        navigation.navigate('MainTabs');
    };

    const handleGoogleLogin = () => {
        // Aquí iría la lógica para iniciar sesión con Google
        navigation.navigate('MainTabs');
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity style={[styles.centeredButton, styles.facebookButton]} onPress={handleFacebookLogin}>
                    <Image source={facebookLogo} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.buttonText}>Login with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.centeredButton, styles.googleButton]} onPress={handleGoogleLogin}>
                    <Image source={googleLogo} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.buttonText}>Login with Google</Text>
                </TouchableOpacity>
                <View style={styles.separator}></View>
                <View style={styles.bottomButtonsContainer}>
                    <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('EmailLogin')}>
                        <Icon name="envelope" size={30} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('MobileLogin')}>
                        <Icon name="mobile" size={30} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: 200, // Ancho fijo para los botones de Facebook y Google
    },
    bottomButtonsContainer: {
        flexDirection: 'row',
    },
    separator: {
        height: 1,
        width: '80%',
        backgroundColor: '#FFF',
        marginVertical: 20,
    },
    facebookButton: {
        backgroundColor: '#4267B2',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    googleButton: {
        backgroundColor: '#DB4437',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    logo: {
        width: 30, // Tamaño fijo para las imágenes de los logos
        height: 30,
        marginRight: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
    bottomButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#007BFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    }
});

export default LoginScreen;