import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from "react-hook-form"
import { Auth } from 'aws-amplify'

const ForgotPasswordScreen = () => {

    const navigation = useNavigation();
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const { control,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const [loading, setLoading] = useState(false);

    const onSendPressed = async (data) => {
        if (loading) {
            return;
        }
        setLoading(true);

        await Auth.forgotPassword(data.Email).then(() => {
            //console.log('response res', res)
            Alert.alert('Sent successfully!', 'A code has been sent to your email to recover access, if you don´t see the code on your email, please check spam')
            navigation.navigate('Confirm New Password', data.Email)
            setLoading(false);
        }).catch(error => {
            //console.log('response error', error)
            setLoading(false);
            Alert.alert('Error', error.message)
        })
    }

    const onSignInPress = () => {
        navigation.navigate('Sign In')
    }
    return (

        <View style={styles.viewP}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Reset your password</Text>
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
                <CustomButton
                    onPress={handleSubmit(onSendPressed)}
                    text={loading ? "Sending..." : "Send"}
                />
                <CustomButton
                    onPress={onSignInPress}
                    text="Back to Sign In"
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

export default ForgotPasswordScreen