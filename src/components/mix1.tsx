import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../styles/colores";
import { Coordenada } from "../types/types";

interface BolaProps {
    bola: Coordenada[];
}

export default function Bola({ bola }: BolaProps): JSX.Element {
    const segmentStyle = {
        left: bola[0].x,
        top: bola[0].y,
    };
        //console.log('mix1', bola)
   
    return <Fragment>

        {/* {bola.map((segment: any, index: number) => {

             const segmentStyle = {
                left: segment.x * 5,
                up: segment.y * 5,
            };

            console.log('sdsdsd', segment, index)
            return <View key={index} style={[styles.bolaa,segmentStyle]} />
         })} */}

        <View style={[styles.bolaa, segmentStyle]} />
    </Fragment>;
}

const styles = StyleSheet.create({
    bolaa: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Colors.tertiary,
        position: 'absolute',
    }

})