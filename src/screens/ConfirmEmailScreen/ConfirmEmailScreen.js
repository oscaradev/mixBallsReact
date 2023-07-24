import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from "react-hook-form"

const ConfirmEmailScreen = () => {

    const navigation = useNavigation();
    const { control,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onConfirmPressed = () => {
        navigation.navigate('Mix Balls')
    }

    const onResendCodePress = () => {

    }

    const onSignInPress = () => {
        navigation.navigate('Sign In')
    }
    return (

        <View style={styles.viewP}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Confirm your email</Text>
                <CustomInput
                    name="Code"
                    placeholder="Enter your confirmation code"
                    control={control}
                    rules={{ required: 'Confirmation code is required' }} />
                <CustomButton
                    onPress={handleSubmit(onConfirmPressed)}
                    text="Confirm"
                />
                <CustomButton
                    onPress={onResendCodePress}
                    text="Resend Code"
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