import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MainRoutes } from '../routing/routes';
import { MainNavigationProp } from '../routing/types';
import fetchApiCall from '../services/adminlogin';


type LoginScreenProps = {
    navigation: MainNavigationProp<MainRoutes.Login>
}
export default function LoginSection({ navigation }: LoginScreenProps): React.ReactElement {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function onPress() {
        // const adminlogin: AdminLogin = {
        //     email,
        //     password,
        // };
        // const resp = await fetchApiCall(adminlogin);
        // globalThis.token = resp['token'];
        navigation.navigate(MainRoutes.Dashboard);
    };
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn}
                onPress={onPress}>
                <Text>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        backgroundColor: "#808080",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#808080",
    },
});
