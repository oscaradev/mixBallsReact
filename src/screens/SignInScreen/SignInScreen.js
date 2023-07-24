import React from 'react'
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import { useForm } from "react-hook-form"


const SignInScreen = () => {

    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const { control,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSignInPressed = async (data) => {
        // console.log('data', data)
        // const response = await Auth.signIn(data.username, data.password);
        // console.log('response', response)
        //navigation.navigate('Mix Balls')
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('Forgot Password')
    }

    const onSignInGoogle = () => {

    }

    const onSignInFacebook = () => {

    }

    const onSignUpPress = () => {
        navigation.navigate('Sign Up')
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
                    name="Email"
                    placeholder="Email"
                    control={control}
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: EMAIL_REGEX,
                            message: 'Format email is incorrect'
                        }
                    }} />
                <CustomInput
                    name="Password"
                    placeholder="Password"
                    control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password should be minimun 8 characters long'
                        },
                        maxLength: {
                            value: 8,
                            message: 'Password should be maximum 8 characters long'
                        }
                    }}
                    secureTextEntry={true} />

                <CustomButton
                    onPress={handleSubmit(onSignInPressed)}
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