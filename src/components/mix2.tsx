//import { Fragment } from "react";
import React from 'react';
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Coordenada } from "../types/types";
import Animated, { Keyframe, ZoomIn, ZoomOut } from 'react-native-reanimated';

interface BolaProps {
    valor: Coordenada;
    long: number;
    alto: number;
    ancho: number;
    pos: number;
    dir: string;
    onPress: any;
    onPressMix2L: any;
    onPressMix2B: any;
    onPressOut: any;
    bolaSelect: number;
    movX: number;
    movY: number;
    bola: boolean;
}


export default function Bola2({ valor, long, alto, ancho, pos, dir, onPress, onPressOut, onPressMix2L, onPressMix2B, bolaSelect, movX, movY, bola }: BolaProps): JSX.Element {


    const keyframeIn = new Keyframe({
        0: {
            opacity: 1,
            transform: [{ translateX: 0 }],
        },
        50: {
            opacity: 0.4,
            transform: [{ translateX: Math.floor(ancho / 7) - 5 }],
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
            transform: [{ translateX: -(Math.floor(ancho / 7) - 5) }],
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
        fontSize: Math.floor(ancho / 3) - 6,
        bottom: '20%',
        left: '20%'
    };
    const StyleBola9 = {
        width: Math.floor(ancho / 3) - 5,
        height: Math.floor(alto / 3) - 5,
        backgroundColor: valor.color
    };
    const StyleBola9L = {
        width: Math.floor(ancho / 2.8) - 5,
        height: Math.floor(alto / 2.8) - 5,
        position: 'absolute',
        left: -((Math.floor(ancho / 5) - 5) / 3) - 2,
        backgroundColor: valor.color,
        top: -1,
        borderRadius: 25,
        borderWidth: 2,
        margin: 2,
    };
    const StyleBola9B = {
        width: Math.floor(ancho / 2.8) - 5,
        height: Math.floor(alto / 2.8) - 5,
        position: 'absolute',
        top: ((Math.floor(alto / 5) - 5) / 3),
        backgroundColor: valor.color,
        left: -4,
        borderRadius: 25,
        borderWidth: 2,
        margin: 2,
    };
    //declaración de bola transparente
    const StyleBola9Trans = {
        width: Math.floor(ancho / 3) - 5,
        height: Math.floor(alto / 3) - 5,
        backgroundColor: 'transparent',
    };

    const StyleBola25Text = {
        fontSize: Math.floor(ancho / 5) - 6,
        //fontWeight: '900',
        bottom: '20%',
        left: '20%'
    };
    const StyleBola25 = {
        width: Math.floor(ancho / 5) - 5,
        height: Math.floor(alto / 5) - 5,
        backgroundColor: valor.color
    };
    const StyleBola25Select = {
        width: Math.floor(ancho / 2),
        height: Math.floor(alto / 2),
        backgroundColor: valor.color,
        position: 'absolute',
        borderRadius: 50,
        borderWidth: 2,
        top: movY,
        left: movX,
    };
    const StyleBola25L = {
        width: Math.floor(ancho / 4) - 5,
        height: Math.floor(alto / 4) - 5,
        position: 'absolute',
        right: ((Math.floor(ancho / 5) - 5) / 3) - 3,
        backgroundColor: valor.color,
        top: -3,
        borderRadius: 18,
        borderWidth: 2,
        margin: 2,
    };
    const StyleBola25B = {
        width: Math.floor(ancho / 4) - 5,
        height: Math.floor(alto / 4) - 5,
        position: 'absolute',
        top: ((Math.floor(alto / 5) - 5) / 3) - 2,
        backgroundColor: valor.color,
        left: -3,
        borderRadius: 18,
        borderWidth: 2,
        margin: 2,
    };
    //declaración de bola transparente
    const StyleBola25Trans = {
        width: Math.floor(ancho / 5) - 5,
        height: Math.floor(alto / 5) - 5,
        backgroundColor: 'transparent',
        margin: 2,
    };

    const StyleBola49Text = {
        fontSize: Math.floor(ancho / 7) - 6,
        //fontWeight: '900',
        bottom: '15%',
        left: '20%'
    };
    const StyleBola49 = {
        width: Math.floor(ancho / 7) - 5,
        height: Math.floor(alto / 7) - 5,
        borderWidth: 1,
        backgroundColor: valor.color,
    };
    //declaración de bola transparente
    const StyleBola49Trans = {
        width: Math.floor(ancho / 7) - 5,
        height: Math.floor(alto / 7) - 5,
        backgroundColor: 'transparent',
        margin: 2,
    };
    //declaración de bola transparente
    const StyleBola49L = {
        width: Math.floor(ancho / 5) - 5,
        height: Math.floor(alto / 5) - 5,
        backgroundColor: valor.color,
        borderRadius: 13,
        borderWidth: 1,
        position: 'absolute',
        left: -((Math.floor(ancho / 5) - 5) / 3) - 2,
        top: -2
    };
    const StyleBola49B = {
        width: Math.floor(ancho / 5) - 5,
        height: Math.floor(alto / 5) - 5,
        backgroundColor: valor.color,
        borderRadius: 13,
        borderWidth: 1,
        position: 'absolute',
        top: (Math.floor(alto / 5) - 5) / 3,
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
    }, [valor])

    return (
        <View>

            <Pressable onPress={onPress}
                onPressOut={onPressOut}
            >
                <View style={long === 9 && pos != 3 && pos != 7 ? [styles.bola9, StyleBola9] : long === 9 ? StyleBola9Trans
                    : long === 25 && pos != 10 && pos != 22 ? [styles.bola25, StyleBola25] : long === 25 ? StyleBola25Trans
                        : pos === 21 || pos === 45 ? StyleBola49Trans : [styles.bola49, StyleBola49]}>{dir2 ? <Text style={long === 9 ? StyleBola9Text : long === 25 ? StyleBola25Text : long === 49 ? StyleBola49Text : ''}>{dir}</Text> : ''}
                </View>
            </Pressable>

            {bolaSelect === pos && bola ? <Animated.View
                entering={ZoomIn}
                exiting={ZoomOut}
                style={StyleBola25Select}
            /> : null}

            {pos === 3 && long === 9 ? <Pressable style={StyleBola9L} onPress={onPressMix2L}>
                <Animated.View />
            </Pressable> : ""}
            {pos === 7 && long === 9 ? <Pressable style={StyleBola9B} onPress={onPressMix2B}>
                <Animated.View />
            </Pressable> : ""}
            {pos === 10 && long === 25 ? <Pressable style={StyleBola25L} onPress={onPressMix2L}>
                <Animated.View />
            </Pressable> : ""}
            {pos === 22 && long === 25 ? <Pressable style={StyleBola25B} onPress={onPressMix2B}>
                <Animated.View />
            </Pressable> : ""}
            {pos === 21 && long === 49 ? <Pressable style={StyleBola49L} onPress={onPressMix2L}>
                <Animated.View />
            </Pressable> : ""}
            {pos === 45 && long === 49 ? <Pressable style={StyleBola49B} onPress={onPressMix2B}>
                <Animated.View />
            </Pressable> : ""}
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