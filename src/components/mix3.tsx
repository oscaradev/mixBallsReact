//import { Fragment } from "react";
import React from 'react';
import { StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
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
    onPressMix3R: any;
    onPressMix3T: any;
    onPressOut: any;
    bolaSelect: number;
    movX: number;
    movY: number;
    bola: boolean;
}


export default function Bola3({ valor, long, alto, ancho, pos, dir, onPress, onPressMix3R, onPressMix3T, onPressOut, bolaSelect, movX, movY, bola }: BolaProps): JSX.Element {


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
    // constuyendo el tamaño de las bolas segun el tamaño del view
    const StyleBola9 = {
        width: Math.floor(ancho / 3) - 5,
        height: Math.floor(alto / 3) - 5,
        backgroundColor: valor.color
    };
    const StyleBola9R = {
        width: Math.floor(ancho / 2.8) - 5,
        height: Math.floor(alto / 2.8) - 5,
        position: 'absolute',
        left: ((Math.floor(ancho / 5) - 5) / 3),
        backgroundColor: valor.color,
        top: -2,
        borderRadius: 25,
        borderWidth: 2,
        margin: 2,
    };
    const StyleBola9T = {
        width: Math.floor(ancho / 2.8) - 5,
        height: Math.floor(alto / 2.8) - 5,
        position: 'absolute',
        bottom: ((Math.floor(alto / 5) - 5) / 3),
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
    const StyleBola25R = {
        width: Math.floor(ancho / 4) - 5,
        height: Math.floor(alto / 4) - 5,
        position: 'absolute',
        left: ((Math.floor(ancho / 5) - 5) / 3) - 3,
        backgroundColor: valor.color,
        top: -4,
        borderRadius: 18,
        borderWidth: 2,
        margin: 2,
    };
    const StyleBola25T = {
        width: Math.floor(ancho / 4) - 5,
        height: Math.floor(alto / 4) - 5,
        position: 'absolute',
        bottom: ((Math.floor(alto / 5) - 5) / 3) - 3,
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
    const StyleBola49R = {
        width: Math.floor(ancho / 5) - 5,
        height: Math.floor(alto / 5) - 5,
        backgroundColor: valor.color,
        borderRadius: 13,
        borderWidth: 1,
        position: 'absolute',
        left: ((Math.floor(ancho / 5) - 5)) / 3,
        top: -2
    };
    const StyleBola49T = {
        width: Math.floor(ancho / 5) - 5,
        height: Math.floor(alto / 5) - 5,
        backgroundColor: valor.color,
        borderRadius: 13,
        borderWidth: 1,
        position: 'absolute',
        bottom: ((Math.floor(alto / 5) - 5) / 3) - 3,
        left: -2

    };
    //esta variable activa hace visible el sentido del movimiento
    const [dir3, setDir3] = React.useState(true);

    // este useEffect muestra el movimiento segun la direccion de movimiento
    let timer3: NodeJS.Timeout
    React.useEffect(() => {
        if (long === 9 && pos != 1 && pos != 5) {
            setDir3(true)
        }
        if (long === 25 && pos != 2 && pos != 14) {
            setDir3(true)
        }
        if (long === 49 && pos != 3 && pos != 27) {
            setDir3(true)
        }
        timer3 = setTimeout(() => {
            setDir3(false)
        }, 2000);
        return () => clearTimeout(timer3)
    }, [valor])

    return (
        <View>
            <Pressable onPressIn={onPress}
                onPressOut={onPressOut}
            >
                <View style={long === 9 && pos != 1 && pos != 5 ? [styles.bola9, StyleBola9] : long === 9 ? StyleBola9Trans
                    : long === 25 && pos != 2 && pos != 14 ? [styles.bola25, StyleBola25] : long === 25 ? StyleBola25Trans
                        : pos === 3 || pos === 27 ? StyleBola49Trans : [styles.bola49, StyleBola49]}>{dir3 ? <Text style={long === 9 ? StyleBola9Text : long === 25 ? StyleBola25Text : long === 49 ? StyleBola49Text : ''}>{dir}</Text> : ''}
                </View>
            </Pressable>

            {bolaSelect === pos && bola ? <Animated.View
                entering={ZoomIn}
                exiting={ZoomOut}
                style={StyleBola25Select}
            /> : null}


            {pos === 5 && long === 9 ? <TouchableOpacity style={StyleBola9R} onPress={onPressMix3R}>
                <Animated.View />
            </TouchableOpacity> : ""}
            {pos === 1 && long === 9 ? <TouchableOpacity style={StyleBola9T} onPress={onPressMix3T}>
                <Animated.View />
            </TouchableOpacity> : ""}
            {pos === 14 && long === 25 ? <TouchableOpacity style={StyleBola25R} onPress={onPressMix3R}>
                <Animated.View />
            </TouchableOpacity> : ""}
            {pos === 2 && long === 25 ? <TouchableOpacity style={StyleBola25T} onPress={onPressMix3T}>
                <Animated.View />
            </TouchableOpacity> : ""}
            {pos === 27 && long === 49 ? <TouchableOpacity style={StyleBola49R} onPress={onPressMix3R}>
                <Animated.View />
            </TouchableOpacity> : ""}
            {pos === 3 && long === 49 ? <TouchableOpacity style={StyleBola49T} onPress={onPressMix3T}>
                <Animated.View />
            </TouchableOpacity> : ""}

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