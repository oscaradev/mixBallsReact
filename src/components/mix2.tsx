//import { Fragment } from "react";
import React from 'react';
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Coordenada } from "../types/types";
import Animated, { Keyframe, ZoomIn, ZoomOut } from 'react-native-reanimated';

interface BolaProps {
    valor2: Coordenada;
    long2: number;
    alto2: number;
    ancho2: number;
    pos2: number;
    dir22: string;
    onPress2: any;
    onPressOut2: any;
    bolaSelect2: number;
    movX2: number;
    movY2: number;
    bola2: boolean;
}


export default function Bola2({ valor2, long2, alto2, ancho2, pos2, dir22, onPress2, onPressOut2, bolaSelect2, movX2, movY2, bola2 }: BolaProps): JSX.Element {


    const keyframeIn = new Keyframe({
        0: {
            opacity: 1,
            transform: [{ translateX: 0 }],
        },
        50: {
            opacity: 0.4,
            transform: [{ translateX: Math.floor(ancho2 / 7) - 5 }],
        },
        100: {
            opacity: 0,
            transform: [{ translateX: 0 }],
        },
    }).duration(400);

    const keyframeIn2 = new Keyframe({
        0: {
            opacity: 1,
            transform: [{ translateX: 0 }],
        },
        50: {
            opacity: 0.4,
            transform: [{ translateX: -(Math.floor(ancho2 / 7) - 5) }],
        },
        100: {
            opacity: 0,
            transform: [{ translateX: 0 }],
        },
    }).duration(400);

    const keyframeExit = new Keyframe({
        0: {
            opacity: 1,
            transform: [{ translateX: 0 }],
        },
        50: {
            opacity: 1,
            transform: [{ translateX: 0 }],
        },
        100: {
            opacity: 1,
            transform: [{ translateX: 0 }],
        },
    }).duration(300);


    // constuyendo el tamaño de las bolas segun el tamaño del view
    const StyleBola9Text = {
        fontSize: Math.floor(ancho2 / 3) - 6,
        bottom: '20%',
        left: '20%'
    };
    const StyleBola9 = {
        width: Math.floor(ancho2 / 3) - 5,
        height: Math.floor(alto2 / 3) - 5,
        backgroundColor: valor2.color
    };
    const StyleBola9L = {
        width: Math.floor(ancho2 / 2.8) - 5,
        height: Math.floor(alto2 / 2.8) - 5,
        position: 'absolute',
        left: -((Math.floor(ancho2 / 5) - 5) / 3) - 2,
        backgroundColor: valor2.color,
        top: -1,
        borderRadius: 25,
        borderWidth: 2,
        margin: 2,
    };
    const StyleBola9B = {
        width: Math.floor(ancho2 / 2.8) - 5,
        height: Math.floor(alto2 / 2.8) - 5,
        position: 'absolute',
        top: ((Math.floor(alto2 / 5) - 5) / 3),
        backgroundColor: valor2.color,
        left: -4,
        borderRadius: 25,
        borderWidth: 2,
        margin: 2,
    };
    //declaración de bola transparente
    const StyleBola9Trans = {
        width: Math.floor(ancho2 / 3) - 5,
        height: Math.floor(alto2 / 3) - 5,
        backgroundColor: 'transparent',
    };

    const StyleBola25Text = {
        fontSize: Math.floor(ancho2 / 5) - 6,
        //fontWeight: '900',
        bottom: '20%',
        left: '20%'
    };
    const StyleBola25 = {
        width: Math.floor(ancho2 / 5) - 5,
        height: Math.floor(alto2 / 5) - 5,
        backgroundColor: valor2.color
    };
    const StyleBola25Select = {
        width: Math.floor(ancho2 / 2),
        height: Math.floor(alto2 / 2),
        backgroundColor: valor2.color,
        position: 'absolute',
        borderRadius: 50,
        borderWidth: 2,
        top: movY2,
        left: movX2,
    };
    const StyleBola25L = {
        width: Math.floor(ancho2 / 4) - 5,
        height: Math.floor(alto2 / 4) - 5,
        position: 'absolute',
        right: ((Math.floor(ancho2 / 5) - 5) / 3) - 3,
        backgroundColor: valor2.color,
        top: -3,
        borderRadius: 18,
        borderWidth: 2,
        margin: 2,
    };
    const StyleBola25B = {
        width: Math.floor(ancho2 / 4) - 5,
        height: Math.floor(alto2 / 4) - 5,
        position: 'absolute',
        top: ((Math.floor(alto2 / 5) - 5) / 3) - 2,
        backgroundColor: valor2.color,
        left: -3,
        borderRadius: 18,
        borderWidth: 2,
        margin: 2,
    };
    //declaración de bola transparente
    const StyleBola25Trans = {
        width: Math.floor(ancho2 / 5) - 5,
        height: Math.floor(alto2 / 5) - 5,
        backgroundColor: 'transparent',
        margin: 2,
    };

    const StyleBola49Text = {
        fontSize: Math.floor(ancho2 / 7) - 6,
        //fontWeight: '900',
        bottom: '15%',
        left: '20%'
    };
    const StyleBola49 = {
        width: Math.floor(ancho2 / 7) - 5,
        height: Math.floor(alto2 / 7) - 5,
        borderWidth: 1,
        backgroundColor: valor2.color,
    };
    //declaración de bola transparente
    const StyleBola49Trans = {
        width: Math.floor(ancho2 / 7) - 5,
        height: Math.floor(alto2 / 7) - 5,
        backgroundColor: 'transparent',
        margin: 2,
    };
    //declaración de bola transparente
    const StyleBola49L = {
        width: Math.floor(ancho2 / 5) - 5,
        height: Math.floor(alto2 / 5) - 5,
        backgroundColor: valor2.color,
        borderRadius: 13,
        borderWidth: 1,
        position: 'absolute',
        left: -((Math.floor(ancho2 / 5) - 5) / 3) - 2,
        top: -2
    };
    const StyleBola49B = {
        width: Math.floor(ancho2 / 5) - 5,
        height: Math.floor(alto2 / 5) - 5,
        backgroundColor: valor2.color,
        borderRadius: 13,
        borderWidth: 1,
        position: 'absolute',
        top: (Math.floor(alto2 / 5) - 5) / 3,
        left: -2

    };

    //esta variable activa hace visible el sentido del movimiento
    const [dir2, setDir2] = React.useState(true);

    // este useEffect muestra el movimiento segun la direccion de movimiento
    let timer2: NodeJS.Timeout
    React.useEffect(() => {
        setDir2(true)
        timer2 = setTimeout(() => {
            setDir2(false)
        }, 2000);
        return () => clearTimeout(timer2)
    }, [valor2])

    return (
        <View>

            <Pressable onPress={onPress2}
                onPressOut={onPressOut2}
            >
                <View style={long2 === 9 && pos2 != 3 && pos2 != 7 ? [styles.bola9, StyleBola9] : long2 === 9 ? StyleBola9Trans
                    : long2 === 25 && pos2 != 10 && pos2 != 22 ? [styles.bola25, StyleBola25] : long2 === 25 ? StyleBola25Trans
                        : pos2 === 21 || pos2 === 45 ? StyleBola49Trans : [styles.bola49, StyleBola49]}>{dir2 ? <Text style={long2 === 9 ? StyleBola9Text : long2 === 25 ? StyleBola25Text : long2 === 49 ? StyleBola49Text : ''}>{dir22}</Text> : ''}</View>
            </Pressable>

            {bolaSelect2 === pos2 && bola2 ? <Animated.View
                entering={ZoomIn}
                exiting={ZoomOut}
                style={StyleBola25Select}
            /> : null}

            {pos2 === 3 && long2 === 9 ? <Animated.View style={StyleBola9L} /> : ""}
            {pos2 === 7 && long2 === 9 ? <Animated.View style={StyleBola9B} /> : ""}
            {pos2 === 10 && long2 === 25 ? <Animated.View style={StyleBola25L} /> : ""}
            {pos2 === 22 && long2 === 25 ? <Animated.View style={StyleBola25B} /> : ""}
            {pos2 === 45 && long2 === 49 ? <Animated.View style={StyleBola49B} /> : ""}
            {pos2 === 21 && long2 === 49 ? <Animated.View style={StyleBola49L} /> : ""}
        </View>
    )

}

const styles = StyleSheet.create({
    bola9: {
        borderRadius: 25,
        borderWidth: 2,
        margin: 2,
    },
    bola25: {
        borderRadius: 13,
        borderWidth: 2,
        margin: 2,
    },
    bola49: {
        borderRadius: 13,
        margin: 2,
    },

})