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
const POS_ARRANQUE = [{ x: ventana.width * 0.04, y: ventana.height * 0.10 }]

export default function Mix(): JSX.Element {

    //contiene el valo de dirección de movimiento
    const [direction, setDirection] = React.useState<Direction>();

    //pinta la bola en una posicion de la pantalla
    const [bola, setBola] = React.useState<Coordenada[]>([]);

    //guarda la posición de eje y cuando se toca la pantalla
    const [traslY, setTrasY] = React.useState<Coordenada[]>(bola);


    //función que mueve las canicas
    const mueveBola = () => {
        //console.log('valor de bola', bola)
        const bolaInicio = bola[0]
        const newBola = { ...bolaInicio }; //creando una copia de bolaInicio

        //este switch evalua el moviento en pantalla tactil 
        switch (direction) {
            case Direction.CuIzquierdoArriba:
                newBola.y -= 1;
                break;
            case Direction.CuIzquierdoAbajo:
                newBola.y += 1;
                break;
            case Direction.CuSuperiorDerecha:
                newBola.x += 1;
                break;
            case Direction.CuSuperiorIzquierda:
                newBola.x -= 1;
                break;
            case Direction.CuDerechoAbajo:
                newBola.y += 1;
                break;
            case Direction.CuDerechoArriba:
                newBola.y -= 1;
                break;
            case Direction.CuInferiorDerecha:
                newBola.x += 1;
                break;
            case Direction.CuInferiorIzquierda:
                newBola.x -= 1;
                break;
            default:
                break;
        }

        //posiciono la bola en pantalla
        setBola([newBola])
    }

    //Función asociada a calcular la dirección del movimiento según el toque de pantalla
    const [altoView1, setAltoView1] = React.useState(0);
    const [anchoView1, setAnchoView1] = React.useState(0);
    const movimiento = (event: any) => {
        const { translationX, translationY, x, y } = event.nativeEvent
        // console.log("x: "+translationX, "y: "+translationY)
       // console.log("window", event.nativeEvent)
        //console.log("anchoView1", anchoView1)
        // console.log("screen", screen)


        if (translationY > 0 && (x > 0 && x < (anchoView1 / 3))) {
            setDirection(Direction.CuIzquierdoAbajo)
            //console.log("cuadrante izquierdo - direccion abajo")
        } else if (translationY < 0 && (x > 0 && x < (anchoView1 / 3))) {
            setDirection(Direction.CuIzquierdoArriba)
            //console.log("cuadrante izquierdo - direccion arriba")
        } else if (translationX > 0 && (y > 0 && y < (altoView1 / 3))) {
            setDirection(Direction.CuSuperiorDerecha)
           // console.log("cuadrante superior - direccion derecha")
        } else if (translationX < 0 && (y > 0 && y < (altoView1 / 3))) {
            setDirection(Direction.CuSuperiorIzquierda)
           // console.log("cuadrante superior - direccion izquierda")
        } else if (translationY > 0 && (x > (anchoView1 * 0.75) && x <= (anchoView1 + 10))) {
            setDirection(Direction.CuDerechoAbajo)
           // console.log("cuadrante derecho - direccion abajo")
        } else if (translationY < 0 && (x > (anchoView1 * 0.75) && x <= (anchoView1 + 10))) {
            setDirection(Direction.CuDerechoArriba)
           // console.log("cuadrante derecho - direccion arriba")
        } else if (translationX > 0 && (y >= (altoView1 * 0.75))) {
            setDirection(Direction.CuInferiorDerecha)
           // console.log("cuadrante inferior - direccion derecha")
        } else if (translationX < 0 && (y >= (altoView1 * 0.75))) {
            setDirection(Direction.CuInferiorIzquierda)
           // console.log("cuadrante inferior - direccion izquierda")
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

        <SafeAreaView style={styles.container}>
            <View style={styles.ViewContenedor}>
                <PanGestureHandler onGestureEvent={movimiento}>
                    <View style={styles.View1}
                        onLayout={event => {
                            const layout = event.nativeEvent.layout;
                            // console.log('height:', layout.height);
                            // console.log('width:', layout.width);
                            // console.log('x:', layout.x);
                            // console.log('y:', layout.y);
                            //setBola([{ x:  Math.floor(layout.x), y:  Math.floor(layout.y) }])
                            //setBola([{ x:  Math.floor(layout.width), y:  Math.floor(layout.height) }])
                            setBola([{ x: 0, y: 0 }])
                            setAnchoView1(Math.floor(layout.width))
                            setAltoView1(Math.floor(layout.height))
                        }}
                    >
                        {bola.length ? <Bola bola={bola} /> : ""}
                    </View>
                </PanGestureHandler>

                <View style={styles.View2}>
                    {/* <Bola bola={bola}/> */}
                </View>
                <View style={styles.View3}>
                    {/* <Bola bola={bola}/> */}
                </View>
                <View style={styles.View4}>
                    {/* <Bola bola={bola}/> */}
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    // ViewContenedor: {
    //     //flex: 1,
    //     //alignItems: 'center',
    //     //justifyContent: 'center',
    //     top: ventana.height * 0.10,
    //     bottom: ventana.height * 0.05,
    //     left: ventana.width * 0.04,
    //     right: ventana.width * 0.04,
    //     height: ventana.height * 0.80,
    //     width: ventana.width * 0.92,
    //     borderColor: 'blue',
    //     borderWidth: 2,
    //     borderRadius: 10,
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     //justifyContent:'space-evenly',
    // },
    // View1: {
    //     top: (ventana.height * 0.80) * 0.02,
    //     left: (ventana.width * 0.92) * 0.03,
    //     height: ventana.height * 0.35,
    //     width: ventana.width * 0.40,
    //     borderColor: 'blue',
    //     borderWidth: 1,
    //     borderRadius: 10,
    // },
    // View2: {
    //     top: (ventana.height * 0.03),
    //     left: (ventana.width * 0.92) * 0.03,
    //     height: ventana.height * 0.35,
    //     width: ventana.width * 0.40,
    //     borderColor: 'red',
    //     borderWidth: 1,
    //     borderRadius: 10,
    // },
    ViewContenedor: {
        //flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        // marginTop: '20%',
        // marginBottom:'20%',
        top: '25%',
        //marginBottom:'20%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        height: '60%',
        width: '95%',
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    View1: {
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        height: '40%',
        width: '40%',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
    },
    View2: {
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        height: '40%',
        width: '40%',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
    },
    View3: {
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        height: '40%',
        width: '40%',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
    },
    View4: {
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        height: '40%',
        width: '40%',
        borderColor: 'yellow',
        borderWidth: 1,
        borderRadius: 10,
    },

});