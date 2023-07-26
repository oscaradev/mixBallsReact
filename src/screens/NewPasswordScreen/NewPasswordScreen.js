import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useForm } from "react-hook-form"
import { Auth } from 'aws-amplify'

const NewPasswordScreen = () => {
    const route = useRoute();
    const emailUser = route?.params;
    const navigation = useNavigation();
    const { control,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const [loading, setLoading] = useState(false);

    const onSubmitPressed = async (data) => {
        if (loading) {
            return;
        }
        setLoading(true);

        await Auth.forgotPasswordSubmit(emailUser, data.Code, data.NewPassword).then(() => {
            Alert.alert('Password change successful!', 'Please sign in with your new password')
            navigation.navigate('Sign In')
            setLoading(false);
        }).catch(error => {
            setLoading(false);
            Alert.alert('Error change password', error.message)
        })
    }

    const onResendCodePress = () => {

    }

    const onSignInPress = () => {
        navigation.navigate('Sign In')
    }
    return (

        <View style={styles.viewP}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Reset password to {emailUser} </Text>
                <CustomInput
                    name="Code"
                    placeholder="Enter de code received"
                    control={control}
                    rules={{ required: 'Code is required' }} />
                <CustomInput
                    name="NewPassword"
                    placeholder="Enter new password"
                    control={control}
                    rules={{
                        required: 'New password is required',
                        minLength: {
                            value: 8,
                            message: 'New password should be minimun 8 characters long'
                        },
                        maxLength: {
                            value: 8,
                            message: 'New password should be maximum 8 characters long'
                        }
                    }}
                    secureTextEntry={true} />
                <CustomButton
                    onPress={handleSubmit(onSubmitPressed)}
                    text={loading ? "Changing..." : "Submit"}
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

export default NewPasswordScreen