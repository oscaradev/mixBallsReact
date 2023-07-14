import React from 'react';
import {
    SafeAreaView, 
    View, 
    StyleSheet, 
    Text,
    TextInput,
    Modal,
    Vibration
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Colors } from "../styles/colores";
import Bola from './mix1';
import Bola2 from './mix2';
import Bola3 from './mix3';
import Bola4 from './mix4';
import { Coordenada, Direction } from '../types/types';
import { en, es, hi, zh, pt } from '../utilidades/localizations';
import { I18n } from 'i18n-js';
import { SelectList } from 'react-native-dropdown-select-list';
import RadioForm from 'react-native-simple-radio-button'


//se obtienen las dimensiones del dispositivo
// const ventana = Dimensions.get("window");
// const pantalla = Dimensions.get("screen");

// declaro constante para calcular la posición de arranque del primer array de bolas
const POS_ARRANQUE9 = revolver(9)
const POS_ARRANQUE25 = revolver(25)
const POS_ARRANQUE49 = revolver(49)


export default function Mix(): JSX.Element {

    //Defino variable que me guardara las traducciones del juego
    const i18n = new I18n({ en, es, hi, zh, pt });

    //Variable indicadora de inicio de juego
    const [play, setPlay] = React.useState(2);
    // se definen la cantidad de jugadores
    const players = [
        { label: i18n.t('play21M'), value: 0 },
        { label: i18n.t('play22M'), value: 1 }
    ]

    //Variable indicadora de captación de codigo de invitado
    const [changeText, setChangeText] = React.useState('');

    //Se define el nivel del juego
    const [nivel, setNivel] = React.useState("");

    //se Guardan los 3 niveles del juego
    const niveles = [
        { key: 'FA', value: i18n.t('selectNivel2M') },
        { key: 'ME', value: i18n.t('selectNivel3M') },
        { key: 'DI', value: i18n.t('selectNivel4M') },
    ]

    //pinta la bola en una posicion de la pantalla
    //const [bola, setBola] = React.useState<Coordenada[]>(POS_ARRANQUE);
    const [bola9, setBola9] = React.useState<Coordenada[]>(POS_ARRANQUE9);
    const [bola25, setBola25] = React.useState<Coordenada[]>(POS_ARRANQUE25);
    const [bola49, setBola49] = React.useState<Coordenada[]>(POS_ARRANQUE49);
    const [bola11, setBola11] = React.useState<Coordenada[]>([]);
    const [bola22, setBola22] = React.useState<Coordenada[]>([]);
    const [bola33, setBola33] = React.useState<Coordenada[]>([]);
    const [bola44, setBola44] = React.useState<Coordenada[]>([]);

    //se carga la difcultad del juego
    React.useEffect(() => {
        let mix1: Coordenada[] = []
        let mix2: Coordenada[] = []
        let mix3: Coordenada[] = []
        let mix4: Coordenada[] = []
        if (nivel === 'FA') {
            for (let i = 0; i < 36; i++) {
                if (i >= 0 && i < 9) {
                    mix1.push(bola9[i])
                } else if (i >= 9 && i < 18) {
                    mix2.push(bola9[i])
                } else if (i >= 18 && i < 27) {
                    mix3.push(bola9[i])
                } else if (i >= 27 && i < 36) {
                    mix4.push(bola9[i])
                }
            }
            setBola11(mix1)
            setBola22(mix2)
            setBola33(mix3)
            setBola44(mix4)

        } else if (nivel === 'ME') {
            for (let i = 0; i < 100; i++) {
                if (i >= 0 && i < 25) {
                    mix1.push(bola25[i])
                } else if (i >= 25 && i < 50) {
                    mix2.push(bola25[i])
                } else if (i >= 50 && i < 75) {
                    mix3.push(bola25[i])
                } else if (i >= 75 && i < 100) {
                    mix4.push(bola25[i])
                }
            }
            setBola11(mix1)
            setBola22(mix2)
            setBola33(mix3)
            setBola44(mix4)
        } else if (nivel === 'DI') {
            for (let i = 0; i < 196; i++) {
                if (i >= 0 && i < 49) {
                    mix1.push(bola49[i])
                } else if (i >= 49 && i < 98) {
                    mix2.push(bola49[i])
                } else if (i >= 98 && i < 147) {
                    mix3.push(bola49[i])
                } else if (i >= 147 && i < 196) {
                    mix4.push(bola49[i])
                }
            }
            setBola11(mix1)
            setBola22(mix2)
            setBola33(mix3)
            setBola44(mix4)
        }
    }, [nivel])

    //variable para iniciar el juego
    const [iniciar, setIniciar] = React.useState(false);

    //contiene el valo de dirección de movimiento
    const [direction1, setDirection1] = React.useState<Direction>();
    const [direction2, setDirection2] = React.useState<Direction>();
    const [direction3, setDirection3] = React.useState<Direction>();
    const [direction4, setDirection4] = React.useState<Direction>();

    //guarda la velocidad
    const [velocity1, setVelocity1] = React.useState(0);
    const [velocity2, setVelocity2] = React.useState(0);
    const [velocity3, setVelocity3] = React.useState(0);
    const [velocity4, setVelocity4] = React.useState(0);

    //guarda movimiento x,y
    const [MovX, setMovX] = React.useState(0);
    const [MovY, setMovY] = React.useState(0);

    //función que mueve las canicas
    const mueveBola1 = (longitud: number) => {
        let newBola = bola11
        //este switch evalua el moviento en pantalla tactil 
        let primero = newBola[0]
        let ultimo = newBola[longitud - 1]
        switch (direction1) {
            case Direction.Derecha:
                newBola.pop()
                newBola.unshift(ultimo)
                setBola11(newBola)
                break;
            case Direction.Izquierda:
                newBola.shift()
                newBola.push(primero)
                setBola11(newBola)
                break;
            default:
                break;
        }
    }

    const mueveBola2 = (longitud: number) => {
        let newBola2 = bola22
        //este switch evalua el moviento en pantalla tactil 
        let primero2 = newBola2[0]
        let ultimo2 = newBola2[longitud - 1]
        switch (direction2) {
            case Direction.Derecha:
                newBola2.pop()
                newBola2.unshift(ultimo2)
                setBola22(newBola2)
                break;
            case Direction.Izquierda:
                newBola2.shift()
                newBola2.push(primero2)
                setBola22(newBola2)
                break;
            default:
                break;
        }

    }

    const mueveBola3 = (longitud: number) => {
        let newBola3 = bola33
        //este switch evalua el moviento en pantalla tactil 
        let primero3 = newBola3[0]
        let ultimo3 = newBola3[longitud - 1]
        switch (direction3) {
            case Direction.Derecha:
                newBola3.pop()
                newBola3.unshift(ultimo3)
                setBola33(newBola3)
                break;
            case Direction.Izquierda:
                newBola3.shift()
                newBola3.push(primero3)
                setBola33(newBola3)
                break;
            default:
                break;
        }
    }

    const mueveBola4 = (longitud: number) => {
        let newBola4 = bola44
        //este switch evalua el moviento en pantalla tactil 
        let primero4 = newBola4[0]
        let ultimo4 = newBola4[longitud - 1]
        switch (direction4) {
            case Direction.Derecha:
                newBola4.pop()
                newBola4.unshift(ultimo4)
                setBola44(newBola4)
                break;
            case Direction.Izquierda:
                newBola4.shift()
                newBola4.push(primero4)
                setBola44(newBola4)
                break;
            default:
                break;
        }
    }

    //Función asociada a calcular la dirección del movimiento según el toque de pantalla
    const [altoView1, setAltoView1] = React.useState(0);
    const [anchoView1, setAnchoView1] = React.useState(0);
    const [altoView2, setAltoView2] = React.useState(0);
    const [anchoView2, setAnchoView2] = React.useState(0);
    const [altoView3, setAltoView3] = React.useState(0);
    const [anchoView3, setAnchoView3] = React.useState(0);
    const [altoView4, setAltoView4] = React.useState(0);
    const [anchoView4, setAnchoView4] = React.useState(0);
    const [view1Bola, setView1Bola] = React.useState(true);
    const [view2Bola, setView2Bola] = React.useState(true);
    const [view3Bola, setView3Bola] = React.useState(true);
    const [view4Bola, setView4Bola] = React.useState(true);

    const movimiento1 = (event: any) => {
        const { translationX, translationY, x, y, velocityX, velocityY } = event.nativeEvent
        //console.log("translationX: " + translationX, "translationY: " + translationY)
        //console.log("x: " + x, "y: " + y)
        //console.log("velocityX: " + velocityX, "velocityY: " + velocityY)
        //console.log("window", event.nativeEvent)
        //console.log("anchoView1", altoView1)
        //console.log("screen",Math.floor(translationX/3) % 2)


        //determino la zona derecha central del Mix1
        if (x > (anchoView1 * 0.8) && y > (altoView1 * 0.4) && y < (altoView1 * 0.6) && view1Bola) {
            //Configuración de Partida Facil
            if (bola11.length === 9) {
                let n = bolaSelect;
                //selección de bola mitad arriba
                if (bolaSelect < 5) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity1(n)
                        if (5 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_5 = mix11[5]
                            // let mix22 = bola22
                            // let mix_3 = mix22[3]
                            // mix22[3] = mix_5
                            // mix11[5] = mix_3
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 400);
                }
                //selección de bola mitad abajo
                if (bolaSelect === 6) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (n === 5) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_5 = mix11[5]
                            // let mix22 = bola22
                            // let mix_3 = mix22[3]
                            // mix22[3] = mix_5
                            // mix11[5] = mix_3
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                            // setVelocity1(0)
                        }
                    }, 400);
                }
                if (bolaSelect === 8) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (n == 5) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_5 = mix11[5]
                            // let mix22 = bola22
                            // let mix_3 = mix22[3]
                            // mix22[3] = mix_5
                            // mix11[5] = mix_3
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 400);
                }
            }

            //Configuración de Partida Media
            if (bola11.length === 25) {
                let n = bolaSelect;
                //selección de bola mitad arriba
                if (bolaSelect < 14) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity1(n)
                        if (14 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_14 = mix11[14]
                            // let mix22 = bola22
                            // let mix_10 = mix22[10]
                            // mix22[10] = mix_14
                            // mix11[14] = mix_10
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 300);
                }
                //selección de bola mitad abajo
                if (bolaSelect > 14 && bolaSelect < 22) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (14 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_14 = mix11[14]
                            // let mix22 = bola22
                            // let mix_10 = mix22[10]
                            // mix22[10] = mix_14
                            // mix11[14] = mix_10
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 300);
                }
                if (bolaSelect > 22) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (n == 14) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_14 = mix11[14]
                            // let mix22 = bola22
                            // let mix_10 = mix22[10]
                            // mix22[10] = mix_14
                            // mix11[14] = mix_10
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 300);
                }
            }


            //Configuración de Partida Dificil
            if (bola11.length === 49) {
                let n = bolaSelect;
                //selección de bola mitad arriba
                if (bolaSelect < 27) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity1(n)
                        if (27 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_27 = mix11[27]
                            // let mix22 = bola22
                            // let mix_21 = mix22[21]
                            // mix22[21] = mix_27
                            // mix11[27] = mix_21
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 200);
                }
                //selección de bola mitad abajo
                if (bolaSelect > 27 && bolaSelect < 45) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (27 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_27 = mix11[27]
                            // let mix22 = bola22
                            // let mix_21 = mix22[21]
                            // mix22[21] = mix_27
                            // mix11[27] = mix_21
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 200);
                }
                if (bolaSelect > 45) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (27 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_27 = mix11[27]
                            // let mix22 = bola22
                            // let mix_21 = mix22[21]
                            // mix22[21] = mix_27
                            // mix11[27] = mix_21
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 200);
                }
            }
        }


        //determino la zona inferior central del Mix1
        if (y > (altoView1 * 0.8) && x > (anchoView1 * 0.4) && x < (anchoView1 * 0.6) && view1Bola) {
            //Configuración de Partida Facil
            if (bola11.length === 9) {
                let n = bolaSelect;
                //selección de bola mitad arriba
                if (bolaSelect < 5) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        if (n >= 0) {
                            if (n == 0) {
                                setVelocity1(11)
                            } else {
                                setVelocity1(n + 1)
                            }
                        }
                        if (n < 0) {
                            setVelocity1(n * -1)
                        }
                        if (n == -2) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_7 = mix11[7]
                            // let mix33 = bola33
                            // let mix_1 = mix33[1]
                            // mix33[1] = mix_7
                            // mix11[7] = mix_1
                            // setBola33(mix33)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 400);
                }
                //selección de bola mitad abajo
                if (bolaSelect === 6) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity1(n)
                        if (n == 7) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_7 = mix11[7]
                            // let mix33 = bola33
                            // let mix_1 = mix33[1]
                            // mix33[1] = mix_7
                            // mix11[7] = mix_1
                            // setBola33(mix33)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 400);
                }
                if (bolaSelect === 8) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (n == 7) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_7 = mix11[7]
                            // let mix33 = bola33
                            // let mix_1 = mix33[1]
                            // mix33[1] = mix_7
                            // mix11[7] = mix_1
                            // setBola33(mix33)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 400);
                }
            }


            //Configuración de Partida Media
            if (bola11.length === 25) {
                let n = bolaSelect;
                //selección de bola mitad abajo
                if (bolaSelect > 14 && bolaSelect < 22) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity1(n)
                        if (22 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_22 = mix11[22]
                            // let mix33 = bola33
                            // let mix_2 = mix33[2]
                            // mix33[2] = mix_22
                            // mix11[22] = mix_2
                            // setBola33(mix33)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 300);
                }

                if (bolaSelect > 22) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (n === 22) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_22 = mix11[22]
                            // let mix33 = bola33
                            // let mix_2 = mix33[2]
                            // mix33[2] = mix_22
                            // mix11[22] = mix_2
                            // setBola33(mix33)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 300);
                }

                //selección de bola mitad arriba
                if (bolaSelect < 14) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        if (n >= 0) {
                            if (n == 0) {
                                setVelocity1(11)
                            } else {
                                setVelocity1(n + 1)
                            }
                        }
                        if (n < 0) {
                            setVelocity1(n * -1)
                        }
                        if (n == -3) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_22 = mix11[22]
                            // let mix33 = bola33
                            // let mix_2 = mix33[2]
                            // mix33[2] = mix_22
                            // mix11[22] = mix_2
                            // setBola33(mix33)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 300);
                }

            }

            //Configuración de Partida Dificil
            if (bola11.length === 49) {
                let n = bolaSelect;
                //selección de bola mitad abajo
                if (bolaSelect > 27 && bolaSelect < 45) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity1(n)
                        if (45 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_45 = mix11[45]
                            // let mix33 = bola33
                            // let mix_3 = mix33[3]
                            // mix33[3] = mix_45
                            // mix11[45] = mix_3
                            // setBola33(mix33)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 200);
                }
                if (bolaSelect > 45) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (n == 45) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_45 = mix11[45]
                            // let mix33 = bola33
                            // let mix_3 = mix33[3]
                            // mix33[3] = mix_45
                            // mix11[45] = mix_3
                            // setBola33(mix33)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 200);
                }
                //selección de bola mitad arriba
                if (bolaSelect < 27) {
                    Vibration.vibrate(100)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        if (n >= 0) {
                            if (n == 0) {
                                setVelocity1(11)
                            } else {
                                setVelocity1(n + 1)
                            }
                        }
                        if (n < 0) {
                            setVelocity1(n * -1)
                        }
                        if (n === -4) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_45 = mix11[45]
                            // let mix33 = bola33
                            // let mix_3 = mix33[3]
                            // mix33[3] = mix_45
                            // mix11[45] = mix_3
                            // setBola33(mix33)
                            // setBola11(mix11)
                            // setBolaSelect(-1)
                        }
                    }, 200);
                }
            }
        }


        //se capturan constantemente movimientos x,y
        setMovX(translationX);
        setMovY(translationY);
    }

    const movimiento2 = (event: any) => {
        // setDirection(undefined) 
        const { translationX, translationY, x, y, velocityX, velocityY } = event.nativeEvent
        //console.log("translationX: " + translationX, "translationY: " + translationY)
        //console.log("x: " + x, "y: " + y)
        //console.log("velocityX: " + velocityX, "velocityY: " + velocityY)
        //console.log("window", event.nativeEvent)
        //console.log("anchoView1", altoView1)
        //console.log("screen",Math.floor(translationX/3) % 2)

        //determino la zona izquierda central del Mix2
        if (x < (anchoView2 * 0.2) && y > (altoView2 * 0.4) && y < (altoView2 * 0.6) && view2Bola) {
            //Configuración de Partida Facil
            if (bola22.length === 9) {
                let n = bolaSelect2;
                //selección de bola mitad arriba
                if (bolaSelect2 < 3) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity2(n)
                        if (3 - n == 0) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_3 = mix22[3]
                            // let mix11 = bola11
                            // let mix_5 = mix11[5]
                            // mix22[3] = mix_5
                            // mix11[5] = mix_3
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect2(-1)
                        }
                    }, 400);
                }
                //selección de bola mitad abajo
                if (bolaSelect2 > 3 && bolaSelect2 < 7) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (n === 3) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_3 = mix22[3]
                            // let mix11 = bola11
                            // let mix_5 = mix11[5]
                            // mix22[3] = mix_5
                            // mix11[5] = mix_3
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect2(-1)
                        }
                    }, 400);
                }
                if (bolaSelect2 === 8) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (n == 3) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_3 = mix22[3]
                            // let mix11 = bola11
                            // let mix_5 = mix11[5]
                            // mix22[3] = mix_5
                            // mix11[5] = mix_3
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect2(-1)
                        }
                    }, 400);
                }
            }

            //Configuración de Partida Media
            if (bola22.length === 25) {
                let n = bolaSelect2;
                //selección de bola mitad arriba
                if (bolaSelect2 < 10) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity2(n)
                        if (10 - n == 0) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_14 = mix11[14]
                            // let mix22 = bola22
                            // let mix_10 = mix22[10]
                            // mix22[10] = mix_14
                            // mix11[14] = mix_10
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect2(-1)
                        }
                    }, 300);
                }
                //selección de bola mitad abajo
                if (bolaSelect2 > 10 && bolaSelect2 < 22) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (10 - n == 0) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_14 = mix11[14]
                            // let mix22 = bola22
                            // let mix_10 = mix22[10]
                            // mix22[10] = mix_14
                            // mix11[14] = mix_10
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect2(-1)
                        }
                    }, 300);
                }
                if (bolaSelect2 > 22) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (n == 10) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_14 = mix11[14]
                            // let mix22 = bola22
                            // let mix_10 = mix22[10]
                            // mix22[10] = mix_14
                            // mix11[14] = mix_10
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect2(-1)
                        }
                    }, 300);
                }
            }


            //Configuración de Partida Dificil
            if (bola22.length === 49) {
                let n = bolaSelect2;
                //selección de bola mitad arriba
                if (bolaSelect2 < 21) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity2(n)
                        if (n == 21) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_21 = mix22[21]
                            // let mix11 = bola11
                            // let mix_27 = mix11[27]
                            // mix22[21] = mix_27
                            // mix11[27] = mix_21
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect2(-1)
                        }
                    }, 200);
                }
                //selección de bola mitad abajo
                if (bolaSelect2 > 21 && bolaSelect2 < 45) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (n == 21) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_21 = mix22[21]
                            // let mix11 = bola11
                            // let mix_27 = mix11[27]
                            // mix22[21] = mix_27
                            // mix11[27] = mix_21
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect2(-1)
                        }
                    }, 200);
                }
                if (bolaSelect2 > 45) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (n == 21) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_21 = mix22[21]
                            // let mix11 = bola11
                            // let mix_27 = mix11[27]
                            // mix22[21] = mix_27
                            // mix11[27] = mix_21
                            // setBola22(mix22)
                            // setBola11(mix11)
                            // setBolaSelect2(-1)
                        }
                    }, 200);
                }
            }
        }


        //determino la zona inferior central del Mix2
        if (y > (altoView2 * 0.8) && x > (anchoView2 * 0.4) && x < (anchoView2 * 0.6) && view2Bola) {
            //Configuración de Partida Facil
            if (bola22.length === 9) {
                let n = bolaSelect2;
                //selección de bola mitad arriba
                if (bolaSelect2 < 3) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        if (n >= 0) {
                            if (n == 0) {
                                setVelocity2(11)
                            } else {
                                setVelocity2(n + 1)
                            }
                        }
                        if (n < 0) {
                            setVelocity2(n * -1)
                        }
                        if (n == -2) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_7 = mix22[7]
                            // let mix44 = bola44
                            // let mix_1 = mix44[1]
                            // mix44[1] = mix_7
                            // mix22[7] = mix_1
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect2(-1)
                        }
                    }, 400);
                }
                //selección de bola mitad abajo
                if (bolaSelect2 > 3 && bolaSelect2 < 7) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity2(n)
                        if (n == 7) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_7 = mix22[7]
                            // let mix44 = bola44
                            // let mix_1 = mix44[1]
                            // mix44[1] = mix_7
                            // mix22[7] = mix_1
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect2(-1)
                        }
                    }, 400);
                }
                if (bolaSelect2 === 8) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (n == 7) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_7 = mix22[7]
                            // let mix44 = bola44
                            // let mix_1 = mix44[1]
                            // mix44[1] = mix_7
                            // mix22[7] = mix_1
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect2(-1)
                        }
                    }, 400);
                }
            }


            //Configuración de Partida Media
            if (bola22.length === 25) {
                let n = bolaSelect2;
                //selección de bola mitad abajo
                if (bolaSelect2 > 10 && bolaSelect2 < 22) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity2(n)
                        if (n == 22) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_22 = mix22[22]
                            // let mix44 = bola44
                            // let mix_2 = mix44[2]
                            // mix44[2] = mix_22
                            // mix22[22] = mix_2
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect2(-1)
                        }
                    }, 300);
                }

                if (bolaSelect2 > 22) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (n === 22) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_22 = mix22[22]
                            // let mix44 = bola44
                            // let mix_2 = mix44[2]
                            // mix44[2] = mix_22
                            // mix22[22] = mix_2
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect2(-1)
                        }
                    }, 300);
                }

                //selección de bola mitad arriba
                if (bolaSelect2 < 10) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        if (n >= 0) {
                            if (n == 0) {
                                setVelocity2(11)
                            } else {
                                setVelocity2(n + 1)
                            }
                        }
                        if (n < 0) {
                            setVelocity2(n * -1)
                        }
                        if (n == -3) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_22 = mix22[22]
                            // let mix44 = bola44
                            // let mix_2 = mix44[2]
                            // mix44[2] = mix_22
                            // mix22[22] = mix_2
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect2(-1)
                        }
                    }, 300);
                }

            }

            //Configuración de Partida Dificil
            if (bola22.length === 49) {
                let n = bolaSelect2;
                //selección de bola mitad abajo
                if (bolaSelect2 > 21 && bolaSelect2 < 45) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity2(n)
                        if (45 - n == 0) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_45 = mix22[45]
                            // let mix44 = bola44
                            // let mix_3 = mix44[3]
                            // mix44[3] = mix_45
                            // mix22[45] = mix_3
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect2(-1)
                        }
                    }, 200);
                }
                if (bolaSelect2 > 45) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (n == 45) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_45 = mix22[45]
                            // let mix44 = bola44
                            // let mix_3 = mix44[3]
                            // mix44[3] = mix_45
                            // mix22[45] = mix_3
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect2(-1)
                        }
                    }, 200);
                }
                //selección de bola mitad arriba
                if (bolaSelect2 < 21) {
                    Vibration.vibrate(100)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        if (n >= 0) {
                            if (n == 0) {
                                setVelocity2(11)
                            } else {
                                setVelocity2(n + 1)
                            }
                        }
                        if (n < 0) {
                            setVelocity2(n * -1)
                        }
                        if (n === -4) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_45 = mix22[45]
                            // let mix44 = bola44
                            // let mix_3 = mix44[3]
                            // mix44[3] = mix_45
                            // mix22[45] = mix_3
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect2(-1)
                        }
                    }, 200);
                }
            }
        }


        //se capturan constantemente movimientos x,y
        setMovX(translationX);
        setMovY(translationY);
    }

    const movimiento3 = (event: any) => {
        const { translationX, translationY, x, y, velocityX, velocityY } = event.nativeEvent
        //console.log("translationX: " + translationX, "translationY: " + translationY)
        //console.log("x: " + x, "y: " + y)
        //console.log("velocityX: " + velocityX, "velocityY: " + velocityY)
        //console.log("window", event.nativeEvent)
        //console.log("altoView3", altoView3)
        //console.log("screen",Math.floor(translationX/3) % 2)


        //determino la zona derecha central del Mix3
        if (x > (anchoView3 * 0.8) && y > (altoView3 * 0.4) && y < (altoView3 * 0.6) && view3Bola) {
            //Configuración de Partida Facil
            if (bola33.length === 9) {
                let n = bolaSelect3;
                //selección de bola mitad arriba
                if (bolaSelect3 < 5) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity3(n)
                        if (n == 5) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_5 = mix33[5]
                            // let mix44 = bola44
                            // let mix_3 = mix44[3]
                            // mix44[3] = mix_5
                            // mix33[5] = mix_3
                            // setBola44(mix44)
                            // setBola33(mix33)
                            // setBolaSelect3(-1)
                        }
                    }, 400);
                }
                //selección de bola mitad abajo
                if (bolaSelect3 > 5 && bolaSelect3 < 9) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity3(n)
                        if (n === 5) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_5 = mix33[5]
                            // let mix44 = bola44
                            // let mix_3 = mix44[3]
                            // mix44[3] = mix_5
                            // mix33[5] = mix_3
                            // setBola44(mix44)
                            // setBola33(mix33)
                            // setBolaSelect3(-1)
                        }
                    }, 400);
                }
            }

            //Configuración de Partida Media
            if (bola33.length === 25) {
                let n = bolaSelect3;
                //selección de bola mitad arriba
                if (bolaSelect3 >= 0 && bolaSelect3 < 14) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity3(n)
                        if (n == 14) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_14 = mix33[14]
                            // let mix44 = bola44
                            // let mix_10 = mix44[10]
                            // mix44[10] = mix_14
                            // mix33[14] = mix_10
                            // setBola44(mix44)
                            // setBola33(mix33)
                            // setBolaSelect3(-1)
                        }
                    }, 300);
                }
                //selección de bola mitad abajo
                if (bolaSelect3 > 14 && bolaSelect3 < 25) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity3(n)
                        if (n == 14) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_14 = mix33[14]
                            // let mix44 = bola44
                            // let mix_10 = mix44[10]
                            // mix44[10] = mix_14
                            // mix33[14] = mix_10
                            // setBola44(mix44)
                            // setBola33(mix33)
                            // setBolaSelect3(-1)
                        }
                    }, 300);
                }
            }


            //Configuración de Partida Dificil
            if (bola33.length === 49) {
                let n = bolaSelect3;
                //selección de bola mitad arriba
                if (bolaSelect3 >= 0 && bolaSelect3 < 27) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity3(n)
                        if (n == 27) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_27 = mix33[27]
                            // let mix44 = bola44
                            // let mix_21 = mix44[21]
                            // mix44[21] = mix_27
                            // mix33[27] = mix_21
                            // setBola44(mix44)
                            // setBola33(mix33)
                            // setBolaSelect3(-1)
                        }
                    }, 200);
                }
                //selección de bola mitad abajo
                if (bolaSelect3 > 27 && bolaSelect3 < 49) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity3(n)
                        if (n == 27) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_27 = mix33[27]
                            // let mix44 = bola44
                            // let mix_21 = mix44[21]
                            // mix44[21] = mix_27
                            // mix33[27] = mix_21
                            // setBola44(mix44)
                            // setBola33(mix33)
                            // setBolaSelect3(-1)
                        }
                    }, 200);
                }
            }
        }


        //determino la zona superior central del Mix3
        if (y < (altoView3 * 0.1) && x > (anchoView3 * 0.4) && x < (anchoView3 * 0.6) && view3Bola) {
            //Configuración de Partida Facil
            if (bola33.length === 9) {
                let n = bolaSelect3;
                //selección de bola mitad arriba
                if (bolaSelect3 > 1 && bolaSelect3 < 5) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity3(n)
                        if (n == 1) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_1 = mix33[1]
                            // let mix11 = bola11
                            // let mix_7 = mix11[7]
                            // mix11[7] = mix_1
                            // mix33[1] = mix_7
                            // setBola11(mix11)
                            // setBola33(mix33)
                            // setBolaSelect3(-1)
                        }
                    }, 400);
                }
                //selección de bola mitad abajo
                if (bolaSelect3 == 0) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity3(n)
                        if (n == 1) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_1 = mix33[1]
                            // let mix11 = bola11
                            // let mix_7 = mix11[7]
                            // mix11[7] = mix_1
                            // mix33[1] = mix_7
                            // setBola11(mix11)
                            // setBola33(mix33)
                            // setBolaSelect3(-1)
                        }
                    }, 400);
                }
                if (bolaSelect3 > 5 && bolaSelect3 < 9) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity3(n)
                        if (n == 10) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_1 = mix33[1]
                            // let mix11 = bola11
                            // let mix_7 = mix11[7]
                            // mix11[7] = mix_1
                            // mix33[1] = mix_7
                            // setBola11(mix11)
                            // setBola33(mix33)
                            // setBolaSelect3(-1)
                        }
                    }, 400);
                }
            }


            //Configuración de Partida Media
            if (bola33.length === 25) {
                let n = bolaSelect3;
                //selección de bola mitad abajo
                if (bolaSelect3 > 14 && bolaSelect3 < 25) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity3(n)
                        if (n == 27) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_3 = mix33[2]
                            // let mix11 = bola11
                            // let mix_2 = mix11[22]
                            // mix11[22] = mix_3
                            // mix33[2] = mix_2
                            // setBola11(mix11)
                            // setBola33(mix33)
                            // setBolaSelect3(-1)
                        }
                    }, 300);
                }

                if (bolaSelect3 > 2 && bolaSelect3 < 14) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity3(n)
                        if (n == 2) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_3 = mix33[2]
                            // let mix11 = bola11
                            // let mix_2 = mix11[22]
                            // mix11[22] = mix_3
                            // mix33[2] = mix_2
                            // setBola11(mix11)
                            // setBola33(mix33)
                            // setBolaSelect3(-1)
                        }
                    }, 300);
                }

                //selección de bola mitad arriba
                if (bolaSelect3 < 2) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity3(n)
                        if (n == 2) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_3 = mix33[2]
                            // let mix11 = bola11
                            // let mix_2 = mix11[22]
                            // mix11[22] = mix_3
                            // mix33[2] = mix_2
                            // setBola11(mix11)
                            // setBola33(mix33)
                            // setBolaSelect3(-1)
                        }
                    }, 300);
                }

            }

            //Configuración de Partida Dificil
            if (bola33.length === 49) {
                let n = bolaSelect3;
                //selección de bola mitad abajo
                if (bolaSelect3 > 27 && bolaSelect3 < 49) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity3(n)
                        if (n == 52) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_45 = mix11[45]
                            // let mix33 = bola33
                            // let mix_3 = mix33[3]
                            // mix33[3] = mix_45
                            // mix11[45] = mix_3
                            // setBola33(mix33)
                            // setBola11(mix11)
                            // setBolaSelect3(-1)
                        }
                    }, 200);
                }
                //selección de bola mitad arriba
                if (bolaSelect3 >= 0 && bolaSelect3 < 3) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity3(n)
                        if (n == 3) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_45 = mix11[45]
                            // let mix33 = bola33
                            // let mix_3 = mix33[3]
                            // mix33[3] = mix_45
                            // mix11[45] = mix_3
                            // setBola33(mix33)
                            // setBola11(mix11)
                            // setBolaSelect3(-1)
                        }
                    }, 200);
                }
                if (bolaSelect3 > 3 && bolaSelect3 < 27) {
                    Vibration.vibrate(100)
                    setView3Bola(false)
                    setDirection3(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity3(n)
                        if (n == 3) {
                            setVelocity3(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix11 = bola11
                            // let mix_45 = mix11[45]
                            // let mix33 = bola33
                            // let mix_3 = mix33[3]
                            // mix33[3] = mix_45
                            // mix11[45] = mix_3
                            // setBola33(mix33)
                            // setBola11(mix11)
                            // setBolaSelect3(-1)
                        }
                    }, 200);
                }
            }
        }


        //se capturan constantemente movimientos x,y
        setMovX(translationX);
        setMovY(translationY);
    }

    const movimiento4 = (event: any) => {
        const { translationX, translationY, x, y, velocityX, velocityY } = event.nativeEvent
        //console.log("translationX: " + translationX, "translationY: " + translationY)
        //console.log("x: " + x, "y: " + y)
        //console.log("velocityX: " + velocityX, "velocityY: " + velocityY)
        //console.log("window", event.nativeEvent)
        //console.log("altoView3", altoView3)
        //console.log("screen",Math.floor(translationX/3) % 2)


        //determino la zona izquierda central del Mix4
        if (x < (anchoView4 * 0.2) && y > (altoView4 * 0.4) && y < (altoView4 * 0.6) && view4Bola) {
            //Configuración de Partida Facil
            if (bola44.length === 9) {
                let n = bolaSelect4;
                //selección de bola mitad arriba
                if (bolaSelect4 < 3) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity4(n)
                        if (n == 3) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_5 = mix33[5]
                            // let mix44 = bola44
                            // let mix_44 = mix44[3]
                            // mix33[5] = mix_44
                            // mix44[3] = mix_5
                            // setBola33(mix33)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 400);
                }
                //selección de bola mitad abajo
                if (bolaSelect4 > 3 && bolaSelect4 < 9) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity4(n)
                        if (n === 3) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_5 = mix33[5]
                            // let mix44 = bola44
                            // let mix_44 = mix44[3]
                            // mix33[5] = mix_44
                            // mix44[3] = mix_5
                            // setBola33(mix33)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 400);
                }
            }

            //Configuración de Partida Media
            if (bola44.length === 25) {
                let n = bolaSelect4;
                //selección de bola mitad arriba
                if (bolaSelect4 < 10) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity4(n)
                        if (n == 10) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_14 = mix33[14]
                            // let mix44 = bola44
                            // let mix_10 = mix44[10]
                            // mix33[14] = mix_10
                            // mix44[10] = mix_14
                            // setBola33(mix33)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 300);
                }
                //selección de bola mitad abajo
                if (bolaSelect4 > 10 && bolaSelect4 < 25) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity4(n)
                        if (n == 10) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_14 = mix33[14]
                            // let mix44 = bola44
                            // let mix_10 = mix44[10]
                            // mix33[14] = mix_10
                            // mix44[10] = mix_14
                            // setBola33(mix33)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 300);
                }
            }


            //Configuración de Partida Dificil
            if (bola44.length === 49) {
                let n = bolaSelect4;
                //selección de bola mitad arriba
                if (bolaSelect4 >= 0 && bolaSelect4 < 21) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity4(n)
                        if (n == 21) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_27 = mix33[27]
                            // let mix44 = bola44
                            // let mix_21 = mix44[21]
                            // mix33[27] = mix_21
                            // mix44[21] = mix_27
                            // setBola33(mix33)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 200);
                }
                //selección de bola mitad abajo
                if (bolaSelect4 > 21 && bolaSelect4 < 49) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity4(n)
                        if (n == 21) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix33 = bola33
                            // let mix_27 = mix33[27]
                            // let mix44 = bola44
                            // let mix_21 = mix44[21]
                            // mix33[27] = mix_21
                            // mix44[21] = mix_27
                            // setBola33(mix33)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 200);
                }
            }
        }


        //determino la zona superior central del Mix4
        if (y < (altoView4 * 0.1) && x > (anchoView4 * 0.4) && x < (anchoView4 * 0.6) && view4Bola) {
            //Configuración de Partida Facil
            if (bola44.length === 9) {
                let n = bolaSelect4;
                //selección de bola mitad arriba
                if (bolaSelect4 == 2) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity4(n)
                        if (n == 1) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_7 = mix22[7]
                            // let mix44 = bola44
                            // let mix_1 = mix44[1]
                            // mix22[7] = mix_1
                            // mix44[1] = mix_7
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 400);
                }
                if (bolaSelect4 == 0) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity4(n)
                        if (n == 1) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_7 = mix22[7]
                            // let mix44 = bola44
                            // let mix_1 = mix44[1]
                            // mix22[7] = mix_1
                            // mix44[1] = mix_7
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 400);
                }
                //selección de bola mitad abajo
                if (bolaSelect4 > 3 && bolaSelect4 < 9) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity4(n)
                        if (n == 10) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_7 = mix22[7]
                            // let mix44 = bola44
                            // let mix_1 = mix44[1]
                            // mix22[7] = mix_1
                            // mix44[1] = mix_7
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 400);
                }
            }


            //Configuración de Partida Media
            if (bola44.length === 25) {
                let n = bolaSelect4;
                //selección de bola mitad abajo
                if (bolaSelect4 > 10 && bolaSelect4 < 25) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity4(n)
                        if (n == 27) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_22 = mix22[22]
                            // let mix44 = bola44
                            // let mix_2 = mix44[2]
                            // mix22[22] = mix_2
                            // mix44[2] = mix_22
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 300);
                }

                if (bolaSelect4 > 2 && bolaSelect4 < 10) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity4(n)
                        if (n == 2) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_22 = mix22[22]
                            // let mix44 = bola44
                            // let mix_2 = mix44[2]
                            // mix22[22] = mix_2
                            // mix44[2] = mix_22
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 300);
                }

                //selección de bola mitad arriba
                if (bolaSelect4 < 2) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity4(n)
                        if (n == 2) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_22 = mix22[22]
                            // let mix44 = bola44
                            // let mix_2 = mix44[2]
                            // mix22[22] = mix_2
                            // mix44[2] = mix_22
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 300);
                }

            }

            //Configuración de Partida Dificil
            if (bola44.length === 49) {
                let n = bolaSelect4;
                //selección de bola mitad abajo
                if (bolaSelect4 > 21 && bolaSelect4 < 49) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity4(n)
                        if (n == 52) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_45 = mix22[45]
                            // let mix44 = bola44
                            // let mix_3 = mix44[3]
                            // mix22[45] = mix_3
                            // mix44[3] = mix_45
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 200);
                }
                //selección de bola mitad arriba
                if (bolaSelect4 >= 0 && bolaSelect4 < 3) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity4(n)
                        if (n == 3) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_45 = mix22[45]
                            // let mix44 = bola44
                            // let mix_3 = mix44[3]
                            // mix22[45] = mix_3
                            // mix44[3] = mix_45
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 200);
                }
                if (bolaSelect4 > 3 && bolaSelect4 < 21) {
                    Vibration.vibrate(100)
                    setView4Bola(false)
                    setDirection4(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity4(n)
                        if (n == 3) {
                            setVelocity4(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            // let mix22 = bola22
                            // let mix_45 = mix22[45]
                            // let mix44 = bola44
                            // let mix_3 = mix44[3]
                            // mix22[45] = mix_3
                            // mix44[3] = mix_45
                            // setBola22(mix22)
                            // setBola44(mix44)
                            // setBolaSelect4(-1)
                        }
                    }, 200);
                }
            }
        }


        //se capturan constantemente movimientos x,y
        setMovX(translationX);
        setMovY(translationY);
    }

    //se activa la función de movimiento 1
    React.useEffect(() => {
        if (velocity1 > 0) {
            mueveBola1(bola11.length);
        }
    }, [velocity1])

    //se activa la función de movimiento 2
    React.useEffect(() => {
        if (velocity2 > 0) {
            mueveBola2(bola22.length);
        }
    }, [velocity2])

    //se activa la función de movimiento 3
    React.useEffect(() => {
        if (velocity3 > 0) {
            mueveBola3(bola33.length);
        }
    }, [velocity3])

    //se activa la función de movimiento 4
    React.useEffect(() => {
        if (velocity4 > 0) {
            mueveBola4(bola44.length);
        }
    }, [velocity4])


    const [bolaSelect, setBolaSelect] = React.useState(-1);
    const [bolaSelect2, setBolaSelect2] = React.useState(-1);
    const [bolaSelect3, setBolaSelect3] = React.useState(-1);
    const [bolaSelect4, setBolaSelect4] = React.useState(-1);
    //función para obtener la bola seleccionada mix1
    const selectBall = (index: number) => {
        setView1Bola(!view1Bola)
        //se capturan constantemente movimientos x,y
        setMovX(-30);
        setMovY(-30);
        setBolaSelect(index)
        setBolaSelect2(-100+bolaSelect2)
        setBolaSelect3(-100+bolaSelect3)
        setBolaSelect4(-100+bolaSelect4)
    };

    //función para obtener la bola seleccionada mix2
    const selectBall2 = (index: number) => {
        setView2Bola(!view2Bola)
        //se capturan constantemente movimientos x,y
        setMovX(-30);
        setMovY(-30);
        setBolaSelect2(index)
        setBolaSelect(-100+bolaSelect)
        setBolaSelect3(-100+bolaSelect3)
        setBolaSelect4(-100+bolaSelect4)
    };

    //función para obtener la bola seleccionada mix3
    const selectBall3 = (index: number) => {
        setView3Bola(!view3Bola)
        //se capturan constantemente movimientos x,y
        setMovX(-30);
        setMovY(-30);
        setBolaSelect3(index)
        setBolaSelect2(-100+bolaSelect2)
        setBolaSelect(-100+bolaSelect)
        setBolaSelect4(-100+bolaSelect4)
    };
    //función para obtener la bola seleccionada mix2
    const selectBall4 = (index: number) => {
        setView4Bola(!view4Bola)
        //se capturan constantemente movimientos x,y
        setMovX(-30);
        setMovY(-30);
        setBolaSelect4(index)
        setBolaSelect2(-100+bolaSelect2)
        setBolaSelect3(-100+bolaSelect3)
        setBolaSelect(-100+bolaSelect)
    };
    //función que interpreta que la bola ya no esta seleccionada
    const selectOutBall = () => {
        //setBolaSelect(-1)
        //return console.log('bola no seleccionada')
    };

    //Mix 1,Presionado Bola Derecha
    const OnPressMix1R = (tamano: number) => {
        if (tamano === 9) {
            let mix11 = bola11
            let mix_5 = mix11[5]
            let mix22 = bola22
            let mix_3 = mix22[3]
            mix22[3] = mix_5
            mix11[5] = mix_3
            setBola22(mix22)
            setBola11(mix11)
            setBolaSelect(-100+bolaSelect)
        } else if (tamano === 25) {
            let mix11 = bola11
            let mix_14 = mix11[14]
            let mix22 = bola22
            let mix_10 = mix22[10]
            mix22[10] = mix_14
            mix11[14] = mix_10
            setBola22(mix22)
            setBola11(mix11)
            setBolaSelect(-100+bolaSelect)
        } else if (tamano === 49) {
            let mix11 = bola11
            let mix_27 = mix11[27]
            let mix22 = bola22
            let mix_21 = mix22[21]
            mix22[21] = mix_27
            mix11[27] = mix_21
            setBola22(mix22)
            setBola11(mix11)
            setBolaSelect(-100+bolaSelect)
        }
    };
    //Mix 1,Presionado Bola Inferior
    const OnPressMix1B = (tamano: number) => {
        if (tamano === 9) {
            let mix11 = bola11
            let mix_7 = mix11[7]
            let mix33 = bola33
            let mix_1 = mix33[1]
            mix33[1] = mix_7
            mix11[7] = mix_1
            setBola33(mix33)
            setBola11(mix11)
            setBolaSelect(-100+bolaSelect)
        } else if (tamano === 25) {
            let mix11 = bola11
            let mix_22 = mix11[22]
            let mix33 = bola33
            let mix_2 = mix33[2]
            mix33[2] = mix_22
            mix11[22] = mix_2
            setBola33(mix33)
            setBola11(mix11)
            setBolaSelect(-100+bolaSelect)
        } else if (tamano === 49) {
            let mix11 = bola11
            let mix_45 = mix11[45]
            let mix33 = bola33
            let mix_3 = mix33[3]
            mix33[3] = mix_45
            mix11[45] = mix_3
            setBola33(mix33)
            setBola11(mix11)
            setBolaSelect(-100+bolaSelect)
        }
    };
    //Mix 2,Presionado Bola Izquierda
    const OnPressMix2L = (tamano: number) => {
        if (tamano === 9) {
            let mix22 = bola22
            let mix_3 = mix22[3]
            let mix11 = bola11
            let mix_5 = mix11[5]
            mix22[3] = mix_5
            mix11[5] = mix_3
            setBola22(mix22)
            setBola11(mix11)
            setBolaSelect2(-100+bolaSelect2)
        } else if (tamano === 25) {
            let mix11 = bola11
            let mix_14 = mix11[14]
            let mix22 = bola22
            let mix_10 = mix22[10]
            mix22[10] = mix_14
            mix11[14] = mix_10
            setBola22(mix22)
            setBola11(mix11)
            setBolaSelect2(-100+bolaSelect2)
        } else if (tamano === 49) {
            let mix22 = bola22
            let mix_21 = mix22[21]
            let mix11 = bola11
            let mix_27 = mix11[27]
            mix22[21] = mix_27
            mix11[27] = mix_21
            setBola22(mix22)
            setBola11(mix11)
            setBolaSelect2(-100+bolaSelect2)
        }
    };
    //Mix 2,Presionado Bola Inferior
    const OnPressMix2B = (tamano: number) => {
        if (tamano === 9) {
            let mix22 = bola22
            let mix_7 = mix22[7]
            let mix44 = bola44
            let mix_1 = mix44[1]
            mix44[1] = mix_7
            mix22[7] = mix_1
            setBola22(mix22)
            setBola44(mix44)
            setBolaSelect2(-100+bolaSelect2)
        } else if (tamano === 25) {
            let mix22 = bola22
            let mix_22 = mix22[22]
            let mix44 = bola44
            let mix_2 = mix44[2]
            mix44[2] = mix_22
            mix22[22] = mix_2
            setBola22(mix22)
            setBola44(mix44)
            setBolaSelect2(-100+bolaSelect2)
        } else if (tamano === 49) {
            let mix22 = bola22
            let mix_45 = mix22[45]
            let mix44 = bola44
            let mix_3 = mix44[3]
            mix44[3] = mix_45
            mix22[45] = mix_3
            setBola22(mix22)
            setBola44(mix44)
            setBolaSelect2(-100+bolaSelect2)
        }
    };
    //Mix 3,Presionado Bola Derecha
    const OnPressMix3R = (tamano: number) => {
        if (tamano === 9) {
            let mix33 = bola33
            let mix_5 = mix33[5]
            let mix44 = bola44
            let mix_3 = mix44[3]
            mix44[3] = mix_5
            mix33[5] = mix_3
            setBola44(mix44)
            setBola33(mix33)
            setBolaSelect3(-100+bolaSelect3)
        } else if (tamano === 25) {
            let mix33 = bola33
            let mix_14 = mix33[14]
            let mix44 = bola44
            let mix_10 = mix44[10]
            mix44[10] = mix_14
            mix33[14] = mix_10
            setBola44(mix44)
            setBola33(mix33)
            setBolaSelect3(-100+bolaSelect3)
        } else if (tamano === 49) {
            let mix33 = bola33
            let mix_27 = mix33[27]
            let mix44 = bola44
            let mix_21 = mix44[21]
            mix44[21] = mix_27
            mix33[27] = mix_21
            setBola44(mix44)
            setBola33(mix33)
            setBolaSelect3(-100+bolaSelect3)
        }
    };
    //Mix 3,Presionado Bola Superior
    const OnPressMix3T = (tamano: number) => {
        if (tamano === 9) {
            let mix33 = bola33
            let mix_1 = mix33[1]
            let mix11 = bola11
            let mix_7 = mix11[7]
            mix11[7] = mix_1
            mix33[1] = mix_7
            setBola11(mix11)
            setBola33(mix33)
            setBolaSelect3(-100+bolaSelect3)
        } else if (tamano === 25) {
            let mix33 = bola33
            let mix_3 = mix33[2]
            let mix11 = bola11
            let mix_2 = mix11[22]
            mix11[22] = mix_3
            mix33[2] = mix_2
            setBola11(mix11)
            setBola33(mix33)
            setBolaSelect3(-100+bolaSelect3)
        } else if (tamano === 49) {
            let mix11 = bola11
            let mix_45 = mix11[45]
            let mix33 = bola33
            let mix_3 = mix33[3]
            mix33[3] = mix_45
            mix11[45] = mix_3
            setBola33(mix33)
            setBola11(mix11)
            setBolaSelect3(-100+bolaSelect3)
        }
    };
    //Mix 4,Presionado Bola Izquierda
    const OnPressMix4L = (tamano: number) => {
        if (tamano === 9) {
            let mix33 = bola33
            let mix_5 = mix33[5]
            let mix44 = bola44
            let mix_44 = mix44[3]
            mix33[5] = mix_44
            mix44[3] = mix_5
            setBola33(mix33)
            setBola44(mix44)
            setBolaSelect4(-100+bolaSelect4)
        } else if (tamano === 25) {
            let mix33 = bola33
            let mix_14 = mix33[14]
            let mix44 = bola44
            let mix_10 = mix44[10]
            mix33[14] = mix_10
            mix44[10] = mix_14
            setBola33(mix33)
            setBola44(mix44)
            setBolaSelect4(-100+bolaSelect4)
        } else if (tamano === 49) {
            let mix33 = bola33
            let mix_27 = mix33[27]
            let mix44 = bola44
            let mix_21 = mix44[21]
            mix33[27] = mix_21
            mix44[21] = mix_27
            setBola33(mix33)
            setBola44(mix44)
            setBolaSelect4(-100+bolaSelect4)
        }
    };
    //Mix 4,Presionado Bola Superior
    const OnPressMix4T = (tamano: number) => {
        if (tamano === 9) {
            let mix22 = bola22
            let mix_7 = mix22[7]
            let mix44 = bola44
            let mix_1 = mix44[1]
            mix22[7] = mix_1
            mix44[1] = mix_7
            setBola22(mix22)
            setBola44(mix44)
            setBolaSelect4(-100+bolaSelect4)
        } else if (tamano === 25) {
            let mix22 = bola22
            let mix_22 = mix22[22]
            let mix44 = bola44
            let mix_2 = mix44[2]
            mix22[22] = mix_2
            mix44[2] = mix_22
            setBola22(mix22)
            setBola44(mix44)
            setBolaSelect4(-100+bolaSelect4)
        } else if (tamano === 49) {
            let mix22 = bola22
            let mix_45 = mix22[45]
            let mix44 = bola44
            let mix_3 = mix44[3]
            mix22[45] = mix_3
            mix44[3] = mix_45
            setBola22(mix22)
            setBola44(mix44)
            setBolaSelect4(-100+bolaSelect4)
        }
    };


    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.ViewContenedor}>

                <Modal
                    animationType='slide'
                    //onDismiss={''}
                    //onShow={''}
                    visible={play == 2 && changeText.length != 7}
                    transparent
                >
                    <View style={styles.modalFondo}>
                        <View style={styles.modal}>

                            {/* boton para compartir App */}
                            {/* <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => onShare()}>
                                <Text style={{ fontSize: 20, color: '#B233A8', fontWeight: '900', marginBottom: 2 }}>{i18n.t('invitacionapp1M')} ⇵</Text>
                            </TouchableOpacity> */}

                            {/* {item != 1 ? <Video
                                style={styles.video}
                                source={videoIntro}
                                resizeMode='contain'
                                shouldPlay={true}
                                useNativeControls={false}
                                isLooping={false}
                            /> : ''} */}

                            {/* boton para retroceder */}
                            {/* {nivel != '' ? <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => reinicar()}>
                                <Text style={{ fontSize: 25, marginLeft: 5, marginRight: 15, marginBottom: 2 }}>🔙</Text>
                            </TouchableOpacity> : ""} */}


                            {nivel == '' ? <Text style={styles.titulo}>{i18n.t('playM')}</Text> : ''}
                            {nivel == '' ?
                                <View style={styles.input}>
                                    <TextInput
                                        editable
                                        cursorColor='#FFCE08'
                                        placeholder={i18n.t('inputCodeM')}
                                        maxLength={7}
                                        onChangeText={text => setChangeText(text.toLowerCase())}
                                    ></TextInput>
                                </View> : ''}

                            {nivel == '' ? <Text style={styles.titulo}>{i18n.t('oM')}</Text> : ''}
                            {nivel == '' ? <SelectList
                                boxStyles={{ backgroundColor: '#FFF1FE' }}
                                dropdownStyles={{ backgroundColor: '#FFF1FE' }}
                                setSelected={setNivel}
                                data={niveles}
                                placeholder={i18n.t('selectNivel1M')}
                                search={false}
                            /> : ''}

                            {/* {nivel != '' && !iniciar && (item === 2 || item === 1) ? <View>
                                <Text style={styles.titulo}>{i18n.t('play1M')}</Text>
                                <View style={styles.radioBu}>
                                    <RadioForm
                                        radio_props={items}
                                        initial={item}
                                        onPress={(value) => {
                                            setItem(value);
                                        }}
                                    />
                                </View>

                            </View> : ''} */}
                            {/* 
                            {item === 1 && !iniciar ? <SafeAreaView style={styles.safeArea}>
                                <Text style={styles.titulo}>{nivel === 'FA' && item === 1 ? i18n.t('play121M') + ' ' + (15 - manualCards.length) : nivel === 'ME' && item === 1 ? i18n.t('play121M') + ' ' + (27 - manualCards.length) : nivel === 'DI' && item === 1 ? i18n.t('play121M') + ' ' + (42 - manualCards.length) : ''}</Text>
                                <ScrollView style={styles.scrollView}>
                                    <View style={styles.safeArea2}>
                                        {emojis.map((value, index) => {
                                            const isTurnOver = manualCards.includes(value)
                                            return (
                                                <Tarjeta1
                                                    key={value}
                                                    isSelected={isTurnOver}
                                                    onPress={() => manualTapCard(value)}
                                                >{value}</Tarjeta1>
                                            );
                                        })}
                                    </View>
                                </ScrollView>
                            </SafeAreaView> : ''} */}


                            {(nivel != '' && !iniciar) ? <View>
                                <Text style={styles.titulo}>{i18n.t('play2M')}</Text>
                                <View style={styles.radioBu}>
                                    <RadioForm
                                        radio_props={players}
                                        initial={play}
                                        onPress={(value: number) => {
                                            setPlay(value);
                                            setIniciar(true)
                                        }}
                                    />
                                </View>
                            </View> : ''}
                        </View>
                    </View>
                </Modal>


                <View style={styles.ViewContenedor1}>
                    <PanGestureHandler onGestureEvent={movimiento1}>
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
                                //console.log('direction', direction1)
                                const long = bola11.length
                                let dir = ''
                                if (direction1 == 0) {
                                    dir = '→';
                                } else if (direction1 == 1) {
                                    dir = '←';
                                }
                                return (
                                    <Bola
                                        key={index}
                                        valor={value}
                                        long={long}
                                        alto={altoView1}
                                        ancho={anchoView1}
                                        pos={index}
                                        dir={dir}
                                        onPress={() => selectBall(index)}
                                        onPressMix1R={() => OnPressMix1R(long)}
                                        onPressMix1B={() => OnPressMix1B(long)}
                                        onPressOut={() => selectOutBall()}
                                        bolaSelect={bolaSelect}
                                        movX={MovX}
                                        movY={MovY}
                                        bola={view1Bola}
                                    />
                                )
                            })}
                        </View>
                    </PanGestureHandler>


                    <PanGestureHandler onGestureEvent={movimiento2}>
                        <View style={styles.View2}
                            onLayout={event => {
                                const layout2 = event.nativeEvent.layout;
                                setAnchoView2(Math.floor(layout2.width))
                                setAltoView2(Math.floor(layout2.height))
                            }}
                        >
                            {bola22.map((value, index) => {
                                const long2 = bola22.length
                                let dir2 = ''
                                if (direction2 == 0) {
                                    dir2 = '→';
                                } else if (direction2 == 1) {
                                    dir2 = '←';
                                }
                                return (
                                    <Bola2
                                        key={index}
                                        valor={value}
                                        long={long2}
                                        alto={altoView2}
                                        ancho={anchoView2}
                                        pos={index}
                                        dir={dir2}
                                        onPress={() => selectBall2(index)}
                                        onPressMix2L={() => OnPressMix2L(long2)}
                                        onPressMix2B={() => OnPressMix2B(long2)}
                                        onPressOut={() => selectOutBall()}
                                        bolaSelect={bolaSelect2}
                                        movX={MovX}
                                        movY={MovY}
                                        bola={view2Bola}
                                    />
                                )
                            })}
                        </View>
                    </PanGestureHandler>

                    <PanGestureHandler onGestureEvent={movimiento3}>
                        <View style={styles.View3}
                            onLayout={event => {
                                const layout3 = event.nativeEvent.layout;
                                // console.log('height:', layout.height);
                                // console.log('width:', layout.width);
                                // console.log('x:', layout.x);
                                // console.log('y:', layout.y);
                                //setBola([{ x:  Math.floor(layout.x), y:  Math.floor(layout.y) }])
                                //setBola([{ x:  Math.floor(layout.width), y:  Math.floor(layout.height) }])
                                ///setBola([{ x: 0, y: 0 }])
                                setAnchoView3(Math.floor(layout3.width))
                                setAltoView3(Math.floor(layout3.height))
                            }}
                        >
                            {bola33.map((value, index) => {
                                //console.log('direction', direction1)
                                const long3 = bola33.length
                                let dir3 = ''
                                if (direction3 == 0) {
                                    dir3 = '→';
                                } else if (direction3 == 1) {
                                    dir3 = '←';
                                }
                                return (
                                    <Bola3
                                        key={index}
                                        valor={value}
                                        long={long3}
                                        alto={altoView3}
                                        ancho={anchoView3}
                                        pos={index}
                                        dir={dir3}
                                        onPress={() => selectBall3(index)}
                                        onPressMix3R={() => OnPressMix3R(long3)}
                                        onPressMix3T={() => OnPressMix3T(long3)}
                                        onPressOut={() => selectOutBall()}
                                        bolaSelect={bolaSelect3}
                                        movX={MovX}
                                        movY={MovY}
                                        bola={view3Bola}
                                    />
                                )
                            })}
                        </View>
                    </PanGestureHandler>

                    <PanGestureHandler onGestureEvent={movimiento4}>
                        <View style={styles.View4}
                            onLayout={event => {
                                const layout4 = event.nativeEvent.layout;
                                // console.log('height:', layout.height);
                                // console.log('width:', layout.width);
                                // console.log('x:', layout.x);
                                // console.log('y:', layout.y);
                                //setBola([{ x:  Math.floor(layout.x), y:  Math.floor(layout.y) }])
                                //setBola([{ x:  Math.floor(layout.width), y:  Math.floor(layout.height) }])
                                ///setBola([{ x: 0, y: 0 }])
                                setAnchoView4(Math.floor(layout4.width))
                                setAltoView4(Math.floor(layout4.height))
                            }}
                        >
                            {bola44.map((value, index) => {
                                const long4 = bola44.length
                                let dir4 = ''
                                if (direction4 == 0) {
                                    dir4 = '→';
                                } else if (direction4 == 1) {
                                    dir4 = '←';
                                }
                                return (
                                    <Bola4
                                        key={index}
                                        valor={value}
                                        long={long4}
                                        alto={altoView4}
                                        ancho={anchoView4}
                                        pos={index}
                                        dir={dir4}
                                        onPress={() => selectBall4(index)}
                                        onPressMix4L={() => OnPressMix4L(long4)}
                                        onPressMix4T={() => OnPressMix4T(long4)}
                                        onPressOut={() => selectOutBall()}
                                        bolaSelect={bolaSelect4}
                                        movX={MovX}
                                        movY={MovY}
                                        bola={view4Bola}
                                    />
                                )
                            })}
                        </View>
                    </PanGestureHandler>
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
        backgroundColor:'#0FC5FF',
        borderWidth: 2,
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
        backgroundColor:'#FF9494',
        borderWidth: 2,
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
        backgroundColor:'#D3FABD',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'relative',
    },
    View4: {
        margin: '2.5%',
        height: '40%',
        width: '43%',
        borderColor: 'yellow',
        backgroundColor:'#D5DC8C',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'relative',
    },
    modalFondo: {
        flex: 1,
        backgroundColor: 'rgba(1,1,1,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        height: '95%',
        width: '95%',
        backgroundColor: '#FFF',
        borderWidth: 5,
        borderColor: '#334152',
        borderRadius: 25,
        alignItems: 'center'
    },
    titulo: {
        fontSize: 20,
        color: '#B233A8',
        fontWeight: '900',
        textAlign: 'center'
    },
    input: {
        height: 40,
        margin: 1,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FFF1FE'
    },
    radioBu: {
        justifyContent: 'center',
        alignItems: 'center',
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

    // console.log('Mix array bolas', blue, white, red, yellow)
    return arrayBolas;
}