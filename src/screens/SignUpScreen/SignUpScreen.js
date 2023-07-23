import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {

    const [name, setName] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('Confirm Email')
    }

    const onTermsOfUsePressed = () => {

    }

    const onPrivacyPolicyPressed = () => {

    }

    const onSignInGoogle = () => {

    }

    const onSignInFacebook = () => {

    }

    const onSignInPress = () => {
        navigation.navigate('Sign In')
    }
    return (

        <View style={styles.viewP}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    placeholder="Name"
                    value={name}
                    setValue={setName} />
                <CustomInput
                    placeholder="Email"
                    value={emailUser}
                    setValue={setEmailUser} />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true} />
                <CustomInput
                    placeholder="Repeat Password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry={true} />
                <CustomButton
                    onPress={onRegisterPressed}
                    text="Register"
                />
                <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
                </Text>
                <CustomButton
                    onPress={onSignInGoogle}
                    text="Sign In Google"
                    backgColor="#FAE9EB"
                    foregColor="#DD4D45"
                />
                <CustomButton
                    onPress={onSignInFacebook}
                    text="Sign In Facebook"
                    backgColor="#E7EAF5"
                    foregColor="#4765A8"
                />
                <CustomButton
                    onPress={onSignInPress}
                    text="Have an account? Sign In"
                    type="tertiary"
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    viewP: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#D5FCFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#051C61",
        marginTop: 30,
        alignSelf: 'center',
    },
    text: {
        color: "gray",
        marginVertical: 10,
    },
    link: {
        color: "#FDB076",
        fontWeight: "bold"
    }

})

export default SignUpScreen