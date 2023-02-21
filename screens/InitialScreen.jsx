import { View, Text, StyleSheet, Pressable } from 'react-native'

const InitialScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text>Login</Text>
                </Pressable>
                <Pressable
                    style={styles.registerButton}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text>Register</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '60%',
        marginBottom: 250,
    },
    loginButton: {
        backgroundColor: 'lightgreen',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 30,
    },
    registerButton: {

        backgroundColor: 'yellow',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
})

export default InitialScreen