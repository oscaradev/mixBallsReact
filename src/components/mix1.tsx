//import { Fragment } from "react";
import React from 'react';
import { StyleSheet, View, Text, Pressable, NativeSyntheticEvent } from "react-native";
import { Coordenada } from "../types/types";
import Animated, { Keyframe, ZoomIn, ZoomOut } from 'react-native-reanimated';

interface BolaProps {
    valor: Coordenada;
    long: number;
    alto: number;
    ancho: number;
    pos: number;
    direccion: any;
    dir: string;
    onLongPress: any;
    onPressOut: any;
    bolaSelect: number;
    movX: number;
    movY: number;
    bolaR: boolean;
}


export default function Bola({ valor, long, alto, ancho, pos, direccion, dir, onLongPress, onPressOut, bolaSelect, movX, movY, bolaR }: BolaProps): JSX.Element {


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
        //fontWeight: '900',
        bottom: '20%',
        left: '20%'
    };
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
        backgroundColor: valor.color,
    };
    const StyleBola25Select = {
        width: Math.floor(ancho / 2),
        height: Math.floor(alto / 2),
        backgroundColor: valor.color,
        position: 'absolute',
        borderRadius: 50,
        borderWidth: 2,
        top: '-125%',
        left: '-125%',
    };
    const StyleBola25Select1 = {
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
        left: ((Math.floor(ancho / 5) - 5) / 3) - 2,
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
    const StyleBola49R = {
        width: Math.floor(ancho / 5) - 5,
        height: Math.floor(alto / 5) - 5,
        backgroundColor: valor.color,
        borderRadius: 13,
        borderWidth: 1,
        position: 'absolute',
        left: (Math.floor(ancho / 5) - 5) / 3,
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
    const [dir1, setDir1] = React.useState(true);

    // este useEffect muestra el movimiento segun la direccion de movimiento
    let timer: NodeJS.Timeout
    React.useEffect(() => {
        setDir1(true)
        timer = setTimeout(() => {
            setDir1(false)
        }, 2000);
        return () => clearTimeout(timer)
    }, [valor])



    return (
        <View>
            <Pressable onLongPress={onLongPress}
                onPressOut={onPressOut}
            >


                <View style={long === 9 && pos != 5 && pos != 7 ? [styles.bola9, StyleBola9] : long === 9 ? StyleBola9Trans
                    : long === 25 && pos != 14 && pos != 22 ? [styles.bola25, StyleBola25] : long === 25 ? StyleBola25Trans
                        : pos === 27 || pos === 45 ? StyleBola49Trans : [styles.bola49, StyleBola49]} >{dir1 ? <Text style={long === 9 ? StyleBola9Text : long === 25 ? StyleBola25Text : long === 49 ? StyleBola49Text : ''}>{dir}</Text> : ''}</View>
            </Pressable>

            {bolaSelect === pos && bolaR ? <Animated.View
                entering={ZoomIn}
                exiting={ZoomOut}
                style={StyleBola25Select1}
            /> : null}


            {pos === 5 && long === 9 ? <Animated.View style={StyleBola9R} /> : ""}
            {pos === 7 && long === 9 ? <Animated.View style={StyleBola9B} /> : ""}
            {pos === 14 && long === 25 ? <Animated.View style={StyleBola25R} /> : ""}
            {pos === 22 && long === 25 ? <Animated.View style={StyleBola25B} /> : ""}
            {pos === 45 && long === 49 ? <Animated.View style={StyleBola49B} /> : ""}
            {pos === 27 && long === 49 ? <Animated.View style={StyleBola49R} /> : ""}
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