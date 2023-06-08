import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../styles/colores";
import { Coordenada } from "../types/types";

interface BolaProps {
    valor: string;
    long: number;
    alto: number;
    ancho: number;
}

export default function Bola({ valor, long, alto, ancho }: BolaProps): JSX.Element {
    // const segmentStyle = {
    //     left: x,
    //     top: y,
    // };
    //console.log('mix11', bola)

    // return <Fragment>
    //     {bola.map((segment: any, index: number) => {
    //         const segmentStyle = {
    //             left: segment.x,
    //             top: segment.y,
    //         };
    //         console.log('ssegment', segment, index)
    //         return <View key={index} style={[styles.bolaa, segmentStyle]} />
    //     })}

    // </Fragment>;

    // constuyendo el tamaño de las bolas segun el tamaño del view
    const StyleBola9 = {
        width: Math.floor(ancho / 3) - 5,
        height: Math.floor(alto / 3) - 5,
        backgroundColor: valor
    };

    const StyleBola25 = {
        width: Math.floor(ancho / 5) - 5,
        height: Math.floor(alto / 5) - 5,
        backgroundColor: valor
    };
    const StyleBola49 = {
        width: Math.floor(ancho / 7) - 5,
        height: Math.floor(alto / 7) - 5,
        backgroundColor: valor
    };
    //console.log('mix1', long)


    return (
        // <View style={[styles.bolaa,segmentStyle]}></View> 
        <View style={long === 9 ? [styles.bola9, StyleBola9] : long === 25 ? [styles.bola25, styles.bola49, StyleBola25] : [styles.bola49, StyleBola49]} />
    )

}

const styles = StyleSheet.create({
    bola9: {
        // width: '30.5%',
        // height: '30.5%',
        borderRadius: 25,
        //backgroundColor: Colors.tertiary,
        borderWidth: 2,
        margin: 2,
    },
    bola25: {
        // width: '17%',
        // height: '17%',
        borderRadius: 13,
        //backgroundColor: Colors.tertiary,
        borderWidth: 2,
        margin: 2,
    },
    bola49: {
        // width: '11.5%',
        // height: '11.5%',
        borderRadius: 13,
        //backgroundColor: Colors.tertiary,
        borderWidth: 1,
        margin: 2,
    },

})