import React from 'react';
import { SafeAreaView, View, StyleSheet, Button } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Colors } from "../styles/colores";
import Bola from './mix1';
import { Coordenada, Direction, GestureEventType } from '../types/types';
import Bola2 from './mix2';

//se obtienen las dimensiones del dispositivo
// const ventana = Dimensions.get("window");
// const pantalla = Dimensions.get("screen");

// declaro constante para calcular la posición de arranque del primer array de bolas
//const POS_ARRANQUE = [{ x: ventana.width * 0.04, y: ventana.height * 0.10 }]

// const POS_ARRANQUE = [
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'yellow' },
// ]

const POS_ARRANQUE = revolver(9)

// const POS_ARRANQUE1 = [
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'yellow' },
// ]
const POS_ARRANQUE1 = revolver(25)

// const POS_ARRANQUE2 = [
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'blue' },
//     { x: 0, y: 0, color: 'red' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'yellow' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'white' },
//     { x: 0, y: 0, color: 'white' },
// ]
//const POS_ARRANQUE2 = revolver(49);

const POS_ARRANQUE2 = () => {
    let mix1 = []
    for (let i = 0; i < 49; i++) {
        mix1.push(revolver(49)[i])
    }
    return mix1
}

// const POS_ARRANQUE22 = () => {
//     let mix2 = []
//     for (let i = 49; i < 98; i++) {
//         mix2.push(revolver(49)[i])
//     }
//     return mix2
// }

export default function Mix(): JSX.Element {

    //contiene el valo de dirección de movimiento
    const [direction, setDirection] = React.useState<Direction>();

    //pinta la bola en una posicion de la pantalla
    const [bola, setBola] = React.useState<Coordenada[]>(POS_ARRANQUE2);
    const [bola11, setBola11] = React.useState<Coordenada[]>(bola);
    const [bola22, setBola22] = React.useState<Coordenada[]>(bola);

    //guarda la velocidad
    const [velocity, setVelocity] = React.useState(0);

    //función que mueve las canicas
    const mueveBola = (longitud: number) => {
        //console.log('valor de bola', bola)
        //const bolaInicio = bola[0]
        //const bolaInicio = bola
        //let newBola = { ...bolaInicio }; //creando una copia de bolaInicio
        let newBola = bola
        //este switch evalua el moviento en pantalla tactil 
        let primero = newBola[0]
        let ultimo = newBola[longitud - 1]
        switch (direction) {
            case Direction.CuIzquierdoArriba:
                newBola.shift()
                newBola.push(primero)
                setBola11(newBola)
                break;
            case Direction.CuIzquierdoAbajo:
                newBola.pop()
                newBola.unshift(ultimo)
                setBola11(newBola)
                break;
            case Direction.CuSuperiorDerecha:
                newBola.pop()
                newBola.unshift(ultimo)
                setBola11(newBola)
                break;
            case Direction.CuSuperiorIzquierda:
                newBola.shift()
                newBola.push(primero)
                setBola11(newBola)
                break;
            case Direction.CuDerechoAbajo:
                newBola.pop()
                newBola.unshift(ultimo)
                setBola11(newBola)
                break;
            case Direction.CuDerechoArriba:
                newBola.shift()
                newBola.push(primero)
                setBola11(newBola)
                break;
            case Direction.CuInferiorDerecha:
                newBola.pop()
                newBola.unshift(ultimo)
                setBola11(newBola)
                break;
            case Direction.CuInferiorIzquierda:
                newBola.shift()
                newBola.push(primero)
                setBola11(newBola)
                break;
            default:
                break;
        }

        //console.log('sdsds', newBola)
        //posiciono la bola en pantalla
        //setBola2(newBola)
    }

    //Función asociada a calcular la dirección del movimiento según el toque de pantalla
    const [altoView1, setAltoView1] = React.useState(0);
    const [anchoView1, setAnchoView1] = React.useState(0);
    //let timer: any
    const movimiento = (event: any) => {
        // setDirection(undefined) 
        const { translationX, translationY, x, y, velocityX, velocityY } = event.nativeEvent
        // console.log("x: "+translationX, "y: "+translationY)
        //console.log("window", event.nativeEvent)
        //console.log("anchoView1", anchoView1)
        //console.log("screen",Math.floor(translationX/3) % 2)

        if (translationY > 0 && (x > 0 && x < (anchoView1 / 3))) {
            /// setDirection(Direction.CuIzquierdoAbajo) 
            // console.log("cuadrante izquierdo - direccion abajo")
        } else if (translationY < 0 && (x > 0 && x < (anchoView1 / 3))) {
            /// setDirection(Direction.CuIzquierdoArriba)
            //console.log("cuadrante izquierdo - direccion arriba")
        } else if (translationX > 0 && (y > 0 && y < (altoView1 / 3))) {
            setDirection(Direction.CuSuperiorDerecha)
            // console.log("cuadrante superior - direccion derecha")
        } else if (translationX < 0 && (y > 0 && y < (altoView1 / 3))) {
            setDirection(Direction.CuSuperiorIzquierda);
            //revolver(9)
            // console.log("cuadrante superior - direccion izquierda")
        } else if (translationY > 0 && (x > (anchoView1 * 0.75) && x <= (anchoView1 + 10))) {
            /// setDirection(Direction.CuDerechoAbajo)
            // console.log("cuadrante derecho - direccion abajo")
        } else if (translationY < 0 && (x > (anchoView1 * 0.75) && x <= (anchoView1 + 10))) {
            ///setDirection(Direction.CuDerechoArriba)
            // console.log("cuadrante derecho - direccion arriba")
        } else if (translationX > 0 && (y >= (altoView1 * 0.75))) {
            setDirection(Direction.CuInferiorDerecha)
            //revolver(25)
            // console.log("cuadrante inferior - direccion derecha")
        } else if (translationX < 0 && (y >= (altoView1 * 0.75))) {
            setDirection(Direction.CuInferiorIzquierda)
            // console.log("cuadrante inferior - direccion izquierda")
        }

        //guarda la velocidad (en pruebas)
        if (Math.abs(velocityX) > 60) {
            setVelocity(Math.abs(velocityX));
        } else if (Math.abs(velocityY) > 60) {
            setVelocity(Math.abs(velocityX));
        }

    }

    //se activa la función de movimiento
    React.useEffect(() => {
        mueveBola(bola.length);
        //console.log('velocity', velocity)
    }, [velocity])


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
                            {bola11.map((value, index) => {
                                //console.log('sdsdsd', altoView1)
                                const long = bola11.length
                                return (
                                    <Bola
                                        key={index}
                                        valor={value}
                                        long={long}
                                        alto={altoView1}
                                        ancho={anchoView1}
                                        pos={index}
                                        direccion={direction}
                                    />
                                )
                            })}
                        </View>
                    </PanGestureHandler>

                    <View style={styles.View2}
                        onLayout={event => {
                            const layout = event.nativeEvent.layout;
                            setAnchoView1(Math.floor(layout.width))
                            setAltoView1(Math.floor(layout.height))
                        }}
                    >
                        {bola22.map((value, index) => {
                            //console.log('sdsdsd', altoView1)
                            const long = bola22.length
                            return (
                                <Bola2
                                    key={index}
                                    valor={value}
                                    long={long}
                                    alto={altoView1}
                                    ancho={anchoView1}
                                    pos={index}
                                    direccion={direction}
                                />
                            )
                        })}
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'relative',
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

// función para mezclar las cartas
function revolver(bolas: number) {
    let arrayBolas = []
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < bolas; j++) {
            if (i === 0) {
                arrayBolas.push({ color: 'blue' })
            } else if (i === 1) {
                arrayBolas.push({ color: 'white' })
            } else if (i === 2) {
                arrayBolas.push({ color: 'red' })
            } else if (i === 3) {
                arrayBolas.push({ color: 'yellow' })
            }
        }
    }
    //console.log('array bolas', arrayBolas.length)
    for (let k = 0; k < arrayBolas.length; k++) {
        const ramdomIndex = Math.floor(Math.random() * (k + 1));
        [arrayBolas[k], arrayBolas[ramdomIndex]] = [arrayBolas[ramdomIndex], arrayBolas[k]];
    }
    // let blue=0, white=0, red=0, yellow=0
    // for (let kk = 0; kk < arrayBolas.length; kk++) {
    //     if (arrayBolas[kk].color=='blue') {
    //         blue=blue+1;
    //     } else if (arrayBolas[kk].color=='white') {
    //         white=white+1;
    //     } else if (arrayBolas[kk].color=='red') {
    //         red=red+1;
    //     } else if (arrayBolas[kk].color=='yellow') {
    //         yellow=yellow+1;
    //     }
    // }
    // console.log('Mix array bolas', blue, white, red, yellow)
    return arrayBolas;
}