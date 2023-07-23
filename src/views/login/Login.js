import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            Alert.alert('Login Successful', 'Welcome, ' + username + '!');
        } else {
            Alert.alert('Login Failed', 'Invalid username or password.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.loginText}>Đăng nhập</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                {/* <TouchableOpacity
                    style={styles.passwordIconContainer}
                    onPress={toggleShowPassword}
                >
                    <Icon
                        name={showPassword ? 'eye' : 'eye-slash'}
                        size={20}
                        color="gray"
                    />
                </TouchableOpacity> */}

                <TouchableOpacity style={[styles.input, styles.button]}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    inputContainer: {
        width: '80%',
        marginBottom: 16,
        padding: '10%',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        // shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: 'white',
    },
    loginText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 24,
        marginBottom: 24,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#0033FF',
        justifyContent: 'center'
    }
});

export default Login;
