import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import { useForm } from "react-hook-form"

const ConfirmEmailScreen = () => {
    const route = useRoute();
    const emailUser = route?.params;
    const navigation = useNavigation();
    const { control,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const [loading, setLoading] = useState(false);
    const [resend, setResend] = useState(false);

    const onConfirmPressed = async (data) => {
        if (loading) {
            return;
        }
        setLoading(true);

        await Auth.confirmSignUp(emailUser, data.Code).then(res => {
            //navigation.navigate('Mix Balls')
            navigation.navigate('Sign In')
            setLoading(false);
        }).catch(error => {
            //console.log('response error', error)
            setLoading(false);
            Alert.alert('Error Confirming', error.message)
        })

    }

    const onResendCodePress = async () => {
        if (resend) {
            return;
        }
        setResend(true);

        await Auth.resendSignUp(emailUser).then(res => {
            //navigation.navigate('Mix Balls')
            //navigation.navigate('Sign In')
            Alert.alert('Sent successfully!', 'if you don´t see the code on your email, please check spam')
            setResend(false);
        }).catch(error => {
            //console.log('response error', error)
            setResend(false);
            Alert.alert('Error Resend Code', error.message)
        })
    }

    const onSignInPress = () => {
        navigation.navigate('Sign In')
    }
    return (

        <View style={styles.viewP}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Confirm your email {emailUser}</Text>
                <CustomInput
                    name="Code"
                    placeholder="Enter your confirmation code"
                    control={control}
                    rules={{ required: 'Confirmation code is required' }} />
                <CustomButton
                    onPress={handleSubmit(onConfirmPressed)}
                    text={loading ? "Confirming..." : "Confirm"}
                />
                <CustomButton
                    onPress={onResendCodePress}
                    text={resend ? "Sending code..." : "Resend Code"}
                    type="secondary"
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

export default ConfirmEmailScreen