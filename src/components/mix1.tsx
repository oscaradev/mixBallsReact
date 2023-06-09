//import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../styles/colores";
import { Coordenada } from "../types/types";

interface BolaProps {
    valor: Coordenada;
    long: number;
    alto: number;
    ancho: number;
    pos: number
}

export default function Bola({ valor, long, alto, ancho, pos }: BolaProps): JSX.Element {
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
        backgroundColor: valor.color
    };

    const StyleBola25 = {
        width: Math.floor(ancho / 5) - 5,
        height: Math.floor(alto / 5) - 5,
        backgroundColor: valor.color
    };
    const StyleBola25G = {
        width: Math.floor(ancho / 4) - 5,
        height: Math.floor(alto / 4) - 5,
        backgroundColor: valor.color
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
    const StyleBola49T = {
        width: Math.floor(ancho / 5) - 5,
        height: Math.floor(alto / 5) - 5,
        backgroundColor: valor.color,
        borderRadius: 13,
        borderWidth: 1,
        position: 'absolute',
        top: (Math.floor(ancho / 5) - 5) / 3,
        left: -2

    };
    //console.log('mix1', pos,  valor)


    // return (
    //     <View style={long === 9 ? [styles.bola9, StyleBola9] : long === 25 ? [styles.bola25, styles.bola49, StyleBola25] : [styles.bola49, StyleBola49]} />
    // )

    return (
        // <View>
        //     {pos != 45 ? <View style={long === 9 ? [styles.bola9, StyleBola9] : long === 25 ? [styles.bola25, styles.bola49, StyleBola25] : [styles.bola49, StyleBola49]} /> :
        //         <View style={StyleBola49M} />
        //     }
        // </View>

        <View>
            <View style={long === 9 ? [styles.bola9, StyleBola9] : long === 25 ? [styles.bola25, StyleBola25] : pos === 27 || pos === 45 ? [styles.bola49, StyleBola49Trans] : [styles.bola49, StyleBola49]} />
            {pos === 45 ? <View style={StyleBola49T} /> : ""}
            {pos === 27 ? <View style={StyleBola49R} /> : ""}
        
        </View>

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
        //borderWidth: 1,
        margin: 2,
    },

})