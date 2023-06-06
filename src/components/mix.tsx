import React from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Colors } from "../styles/colores";
import Bola from './mix1';
import { Coordenada, Direction, GestureEventType } from '../types/types';

//se obtienen las dimensiones del dispositivo
const ventana = Dimensions.get("window");
const pantalla = Dimensions.get("screen");

// declaro constante para calcular la posición de arranque del primer array de bolas
//const POS_ARRANQUE = [{ x: 5, y: 5 }]
const POS_ARRANQUE = [{ x: ventana.width * 0.04, y: ventana.height * 0.10 }]

export default function Mix(): JSX.Element {

    //pos arranque
    const [arranque, setArranque] = React.useState<Coordenada[]>(POS_ARRANQUE);

    //contiene el valo de dirección de movimiento
    const [direction, setDirection] = React.useState<Direction>();

    //pinta la bola en una posicion de la pantalla
    const [bola, setBola] = React.useState<Coordenada[]>(arranque);

    //guarda la posición de eje y cuando se toca la pantalla
    const [traslY, setTrasY] = React.useState<Coordenada[]>(bola);


    //función que mueve las canicas
    const mueveBola = () => {
        // console.log('valor de bola', bola)
        const bolaInicio = bola[0]
        const newBola = { ...bolaInicio }; //creando una copia de bolaInicio

        //este switch evalua el moviento en pantalla tactil 
        switch (direction) {
            case Direction.Arriba:
                newBola.y -= 1;
                break;
            case Direction.Abajo:
                newBola.y += 1;
                break;
            default:
                break;
        }

        //posiciono la bola en pantalla
        setBola([newBola])
    }

    //Función asociada a calcular la dirección del movimiento según el toque de pantalla
    const movimiento = (event: any) => {
        const { translationX, translationY } = event.nativeEvent
        // console.log("eventoo x", translationX)
        // console.log("eventoo y", translationY)
        // console.log("window", window)
        // console.log("screen", screen)

        if ((translationX > 0 && translationY > 0) || (translationX < 0 && translationY > 0)) {
            setDirection(Direction.Abajo)
        } else if ((translationX < 0 && translationY < 0) || (translationX > 0 && translationY < 0)) {
            setDirection(Direction.Arriba)
        }

        //guarda la posición de eje y cuando se toca la pantalla (en pruebas)
        setTrasY(translationY);

    }

    //se activa la función de movimiento
    React.useEffect(() => {
        //console.log('dsdsdsd', direction)
        mueveBola();
    }, [traslY])



    return (
        <PanGestureHandler onGestureEvent={movimiento}>
            <SafeAreaView style={styles.container}>
                <View style={styles.ViewContenedor}>
                    <View style={styles.View1}
                        onLayout={event => {
                            const layout = event.nativeEvent.layout;
                            console.log('height:', layout.height);
                            console.log('width:', layout.width);
                            console.log('x:', layout.x);
                            console.log('y:', layout.y);
                            setArranque([{ x: layout.x, y: layout.y }])
                        }}
                    >
                        <Bola bola={bola} />
                    </View>
                    <View style={styles.View2}>
                        {/* <Bola bola={bola}/> */}
                    </View>
                </View>
            </SafeAreaView>
        </PanGestureHandler>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    limites: {
        flex: 1,
        borderWidth: 12,
    },
    groupBalls: {
        width: 20,
        height: 20,
        backgroundColor: 'blue'
    },
    ViewContenedor: {
        //flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        top: ventana.height * 0.10,
        bottom: ventana.height * 0.05,
        left: ventana.width * 0.04,
        right: ventana.width * 0.04,
        height: ventana.height * 0.80,
        width: ventana.width * 0.92,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        // flexDirection: 'row',
        // flexWrap: 'wrap',
    },
    View1: {
        top: (ventana.height * 0.80) * 0.02,
        left: (ventana.width * 0.92) * 0.03,
        height: ventana.height * 0.35,
        width: ventana.width * 0.40,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
    },
    View2: {
        top: (ventana.height * 0.03),
        left: (ventana.width * 0.92) * 0.03,
        height: ventana.height * 0.35,
        width: ventana.width * 0.40,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
    },

});