import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'


const CustomButton = ({ onPress, text, type = "primary", backgColor, foregColor }) => {
    return (
        <Pressable onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                backgColor ? { backgroundColor: backgColor } : {}
            ]}>
            <Text style={[
                styles.text,
                styles[`text_${type}`],
                foregColor ? { color: foregColor } : {}
            ]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,

    },
    container_primary: {
        backgroundColor: '#3B71F3'
    },
    container_tertiary: {},
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_tertiary: {
        color: 'gray'
    }
})


export default CustomButton