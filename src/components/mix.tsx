import React from 'react';
import { SafeAreaView, View, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Colors } from "../styles/colores";
import Bola from './mix1';
import { Coordenada, Direction, GestureEventType } from '../types/types';

//se obtienen las dimensiones del dispositivo
// const ventana = Dimensions.get("window");
// const pantalla = Dimensions.get("screen");

// declaro constante para calcular la posición de arranque del primer array de bolas
//const POS_ARRANQUE = [{ x: ventana.width * 0.04, y: ventana.height * 0.10 }]
const POS_ARRANQUE = [
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'white' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'yellow' },
]


const POS_ARRANQUE1 = [
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'white' },
    { x: 0, y: 0, color: 'white' },
    { x: 0, y: 0, color: 'white' },
    { x: 0, y: 0, color: 'white' },
    { x: 0, y: 0, color: 'white' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'yellow'},
    { x: 0, y: 0, color: 'yellow'},
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'yellow' },
]

const POS_ARRANQUE2 = [
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'white' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'white' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'white' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'white' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'white' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'blue' },
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'white' },
    { x: 0, y: 0, color: 'yellow' },
    { x: 0, y: 0, color: 'blue' },
]

export default function Mix(): JSX.Element {

    //contiene el valo de dirección de movimiento
    const [direction, setDirection] = React.useState<Direction>();

    //pinta la bola en una posicion de la pantalla
    const [bola, setBola] = React.useState<Coordenada[]>(POS_ARRANQUE2);

    //guarda la posición de eje y cuando se toca la pantalla
    const [traslY, setTrasY] = React.useState<Coordenada[]>(bola);


    //función que mueve las canicas
    const mueveBola = (longitud:number) => {
        //console.log('valor de bola', bola)
        //const bolaInicio = bola[0]
        //const bolaInicio = bola
        //let newBola = { ...bolaInicio }; //creando una copia de bolaInicio
        let newBola = bola

        //este switch evalua el moviento en pantalla tactil 
        let primero= newBola[0]
        let ultimo= newBola[longitud-1]
        switch (direction) {
            case Direction.CuIzquierdoArriba:
                newBola.shift()
                newBola.push(primero)
                break;
            case Direction.CuIzquierdoAbajo:
                newBola.pop()
                newBola.unshift(ultimo)
                break;
            case Direction.CuSuperiorDerecha:
                newBola.pop()
                newBola.unshift(ultimo)
                break;
            case Direction.CuSuperiorIzquierda:
                newBola.shift()
                newBola.push(primero)
                break;
            case Direction.CuDerechoAbajo:
                newBola.pop()
                newBola.unshift(ultimo)
                break;
            case Direction.CuDerechoArriba:
                newBola.shift()
                newBola.push(primero)
                break;
            case Direction.CuInferiorDerecha:
                newBola.pop()
                newBola.unshift(ultimo)
                break;
            case Direction.CuInferiorIzquierda:
                newBola.shift()
                newBola.push(primero)
                break;
            default:
                break;
        }

        //console.log('sdsds', newBola)
        //posiciono la bola en pantalla
        //setBola([newBola])
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
            //const setimer = setTimeout(() => {
               // setDirection(Direction.CuIzquierdoAbajo) 
               // clearTimeout(setimer)
           // }, 500);
      
            //console.log("cuadrante izquierdo - direccion abajo")
        } else if (translationY < 0 && (x > 0 && x < (anchoView1 / 3))) {
            //setDirection(Direction.CuIzquierdoArriba)
            //console.log("cuadrante izquierdo - direccion arriba")
        } else if (translationX > 0 && (y > 0 && y < (altoView1 / 3))) {
            setDirection(Direction.CuSuperiorDerecha)
            // console.log("cuadrante superior - direccion derecha")
        } else if (translationX < 0 && (y > 0 && y < (altoView1 / 3))) {
            setDirection(Direction.CuSuperiorIzquierda)
            // console.log("cuadrante superior - direccion izquierda")
        } else if (translationY > 0 && (x > (anchoView1 * 0.75) && x <= (anchoView1 + 10))) {
           /// setDirection(Direction.CuDerechoAbajo)
            // console.log("cuadrante derecho - direccion abajo")
        } else if (translationY < 0 && (x > (anchoView1 * 0.75) && x <= (anchoView1 + 10))) {
           /// setDirection(Direction.CuDerechoArriba)
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
        mueveBola(bola.length);
    }, [traslY])



    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.ViewContenedor}>
                <View style={styles.ViewContenedor1}>
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
                                ///setBola([{ x: 0, y: 0 }])
                                setAnchoView1(Math.floor(layout.width))
                                setAltoView1(Math.floor(layout.height))
                            }}
                        >
                            {bola.map((value, index) => {
                                //console.log('sdsdsd', altoView1)
                                const long = bola.length
                                return (
                                    <Bola
                                        key={index}
                                        valor={value.color}
                                        long={long}
                                        alto={altoView1}
                                        ancho={anchoView1}
                                    />
                                )
                            })}
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
        //justifyContent:'center',
        alignSelf: 'center',
        // marginTop: '20%',
        // marginBottom:'20%',
        top: '25%',
        //marginBottom:'20%',
        /// marginLeft: '2.5%',
        /// marginRight: '2.5%',
        height: '50%',
        width: '95%',
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        //flexDirection: 'row',
        //flexWrap: 'wrap',
    },
    ViewContenedor1: {
        //flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // marginTop: '20%',
        // marginBottom:'20%',
        top: '5%',
        //marginBottom:'20%',
        /// marginLeft: '2.5%',
        /// marginRight: '2.5%',
        height: '100%',
        width: '100%',
        // borderColor: 'blue',
        // borderWidth: 2,
        // borderRadius: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    View1: {
        margin: '2.5%',
        height: '40%',
        width: '43%',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'relative',
    },
    View2: {
        margin: '2.5%',
        height: '40%',
        width: '43%',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
    },
    View3: {
        margin: '2.5%',
        height: '40%',
        width: '43%',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
    },
    View4: {
        margin: '2.5%',
        height: '40%',
        width: '43%',
        borderColor: 'yellow',
        borderWidth: 1,
        borderRadius: 10,
    },

});