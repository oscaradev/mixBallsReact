import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import { useForm } from "react-hook-form"

const SignUpScreen = () => {

    const navigation = useNavigation();
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const [loading, setLoading] = useState(false);

    const { control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm()

    const passw = watch('Password')

    const onRegisterPressed = async (data) => {
        const { Email, Name, Password } = data
        if (loading) {
            return;
        }
        setLoading(true);

        await Auth.signUp({
            username: Email,
            password: Password,
            attributes: { name: Name }
        }).then(res => {
            //console.log('response res', res)
            navigation.navigate('Confirm Email', data.Email)
            setLoading(false);
        }).catch(error => {
            //console.log('response error', error)
            setLoading(false);
            Alert.alert('Error', Email + ' ' + error.message)
        })
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
                <CustomInput
                    name="Repeat Password"
                    placeholder="Repeat Password"
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
                        },
                        validate: value => value === passw || 'Password do no match'
                    }}
                    secureTextEntry={true} />
                <CustomInput
                    name="Name"
                    placeholder="Name"
                    control={control}
                    rules={{ required: 'Name is required' }} />
                <CustomButton
                    onPress={handleSubmit(onRegisterPressed)}
                    text={loading ? "Registering..." : "Register"}
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