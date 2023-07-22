import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

const SignInScreen = () => {

    const [emailUser, setEmailUser] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();

    const onSignInPressed = () => {

    }

    const onForgotPasswordPressed = () => {

    }

    const onSignInGoogle = () => {

    }

    const onSignInFacebook = () => {

    }

    const onSignUpPress = () => {

    }
    return (

        <View style={styles.viewP}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode='contain'
                />
                <CustomInput
                    placeholder="Email"
                    value={emailUser}
                    setValue={setEmailUser} />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true} />
                <CustomButton
                    onPress={onSignInPressed}
                    text="Sign In"
                />
                <CustomButton
                    onPress={onForgotPasswordPressed}
                    text="Forgot Password"
                    type="tertiary"
                />
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
                    onPress={onSignUpPress}
                    text="Don't have an account? Create one"
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
    logo: {
        width: '80%',
        maxWidth: 300,
        maxHeight: 200,
        alignSelf: 'center',
    },

})

export default SignInScreen