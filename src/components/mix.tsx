import React from 'react';
import {
    SafeAreaView, View, StyleSheet, Text,
    TextInput,
    Modal,
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

    //guarda la velocidad
    const [velocity1, setVelocity1] = React.useState(0);
    const [velocity2, setVelocity2] = React.useState(0);

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
                setBola11(newBola2)
                break;
            case Direction.Izquierda:
                newBola2.shift()
                newBola2.push(primero2)
                setBola11(newBola2)
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
    const [view1Bola, setView1Bola] = React.useState(true);
    const [view2Bola, setView2Bola] = React.useState(true);

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
                    setView1Bola(false)
                    setDirection1(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity1(n)
                        //console.log('valor de n ', n)
                        if (5 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //console.log('se detiene intervalo ')
                        }
                    }, 400);
                }
                //selección de bola mitad abajo
                if (bolaSelect === 6) {
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    n = n - 1;
                    setVelocity1(n)
                }
                if (bolaSelect === 8) {
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (n == 5) {
                            setVelocity1(0)
                            clearInterval(setInter)
                        }
                    }, 400);
                }
            }

            //Configuración de Partida Media
            if (bola11.length === 25) {
                let n = bolaSelect;
                //selección de bola mitad arriba
                if (bolaSelect < 14) {
                    setView1Bola(false)
                    setDirection1(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity1(n)
                        if (14 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //se intercambia bola con el mix proximo
                            let mix11 = bola11
                            let mix_14 = mix11[14]
                            let mix22 = bola22
                            let mix_10 = mix22[10]
                            mix22[10] = mix_14
                            mix11[14] = mix_10
                            setBola22(mix22)
                            setBola11(mix11)
                        }
                    }, 300);
                }
                //selección de bola mitad abajo
                if (bolaSelect > 14 && bolaSelect < 22) {
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        //console.log('valor de n ', n)
                        if (14 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //console.log('se detiene intervalo ')
                        }
                    }, 300);
                }
                if (bolaSelect > 22) {
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (n == 14) {
                            setVelocity1(0)
                            clearInterval(setInter)
                        }
                    }, 300);
                }
            }


            //Configuración de Partida Dificil
            if (bola11.length === 49) {
                let n = bolaSelect;
                //selección de bola mitad arriba
                if (bolaSelect < 27) {
                    setView1Bola(false)
                    setDirection1(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity1(n)
                        //console.log('valor de n ', n)
                        if (27 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //console.log('se detiene intervalo ')
                        }
                    }, 200);
                }
                //selección de bola mitad abajo
                if (bolaSelect > 27 && bolaSelect < 45) {
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        //console.log('valor de n ', n)
                        if (27 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                            //console.log('se detiene intervalo ')
                        }
                    }, 200);
                }
                if (bolaSelect > 45) {
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (27 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
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
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        if (n >= 0) {
                            setVelocity1(n + 1)
                        }
                        if (n < 0) {
                            setVelocity1(n * -1)
                        }
                        if (n == -2) {
                            setVelocity1(0)
                            clearInterval(setInter)
                        }
                    }, 400);
                }
                //selección de bola mitad abajo
                if (bolaSelect === 6) {
                    setView1Bola(false)
                    setDirection1(Direction.Derecha);
                    n = n + 1;
                    setVelocity1(n)
                }
                if (bolaSelect === 8) {
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (n == 7) {
                            setVelocity1(0)
                            clearInterval(setInter)
                        }
                    }, 400);
                }
            }


            //Configuración de Partida Media
            if (bola11.length === 25) {
                let n = bolaSelect;
                //selección de bola mitad abajo
                if (bolaSelect > 14 && bolaSelect < 22) {
                    //setView1BolaB(false)
                    setView1Bola(false)
                    setDirection1(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity1(n)
                        if (22 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                        }
                    }, 300);
                }

                if (bolaSelect > 22) {
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (n === 22) {
                            setVelocity1(0)
                            clearInterval(setInter)
                        }
                    }, 300);
                }

                //selección de bola mitad arriba
                if (bolaSelect < 14) {
                    //setView1BolaB(false)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        if (n >= 0) {
                            setVelocity1(n + 1)
                        }
                        if (n < 0) {
                            setVelocity1(n * -1)
                        }
                        if (n == -3) {
                            setVelocity1(0)
                            clearInterval(setInter)
                        }
                    }, 300);
                }

            }

            //Configuración de Partida Dificil
            if (bola11.length === 49) {
                let n = bolaSelect;
                //selección de bola mitad abajo
                if (bolaSelect > 27 && bolaSelect < 45) {
                    //setView1BolaB(false)
                    setView1Bola(false)
                    setDirection1(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity1(n)
                        if (45 - n == 0) {
                            setVelocity1(0)
                            clearInterval(setInter)
                        }
                    }, 200);
                }
                if (bolaSelect > 45) {
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity1(n)
                        if (n == 45) {
                            setVelocity1(0)
                            clearInterval(setInter)
                        }
                    }, 200);
                }
                //selección de bola mitad arriba
                if (bolaSelect < 27) {
                    //setView1BolaB(false)
                    setView1Bola(false)
                    setDirection1(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        if (n >= 0) {
                            setVelocity1(n + 1)
                        }
                        if (n < 0) {
                            setVelocity1(n * -1)
                        }
                        if (n === -4) {
                            setVelocity1(0)
                            clearInterval(setInter)
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
                    setView2Bola(false)
                    setDirection2(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity1(0)
                        setVelocity2(n)
                        //console.log('valor de n ', n)
                        if (3 - n == 0) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //console.log('se detiene intervalo ')
                        }
                    }, 400);
                }
                //selección de bola mitad abajo
                if (bolaSelect2 === 6) {
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    n = n - 1;
                    setVelocity1(n)
                }
                if (bolaSelect2 === 8) {
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (n == 5) {
                            setVelocity2(0)
                            clearInterval(setInter)
                        }
                    }, 400);
                }
            }

            //Configuración de Partida Media
            if (bola22.length === 25) {
                let n = bolaSelect2;
                //selección de bola mitad arriba
                if (bolaSelect2 < 14) {
                    setView2Bola(false)
                    setDirection2(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity2(n)
                        if (14 - n == 0) {
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
                        }
                    }, 300);
                }
                //selección de bola mitad abajo
                if (bolaSelect2 > 14 && bolaSelect2 < 22) {
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        //console.log('valor de n ', n)
                        if (14 - n == 0) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //console.log('se detiene intervalo ')
                        }
                    }, 300);
                }
                if (bolaSelect2 > 22) {
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (n == 14) {
                            setVelocity2(0)
                            clearInterval(setInter)
                        }
                    }, 300);
                }
            }


            //Configuración de Partida Dificil
            if (bola22.length === 49) {
                let n = bolaSelect2;
                //selección de bola mitad arriba
                if (bolaSelect2 < 27) {
                    setView2Bola(false)
                    setDirection2(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity2(n)
                        //console.log('valor de n ', n)
                        if (27 - n == 0) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //console.log('se detiene intervalo ')
                        }
                    }, 200);
                }
                //selección de bola mitad abajo
                if (bolaSelect2 > 27 && bolaSelect2 < 45) {
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        //console.log('valor de n ', n)
                        if (27 - n == 0) {
                            setVelocity2(0)
                            clearInterval(setInter)
                            //console.log('se detiene intervalo ')
                        }
                    }, 200);
                }
                if (bolaSelect2 > 45) {
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (27 - n == 0) {
                            setVelocity2(0)
                            clearInterval(setInter)
                        }
                    }, 200);
                }
            }
        }


        //determino la zona inferior central del Mix1
        if (y > (altoView2 * 0.8) && x > (anchoView2 * 0.4) && x < (anchoView2 * 0.6) && view2Bola) {
            //Configuración de Partida Facil
            if (bola22.length === 9) {
                let n = bolaSelect2;
                //selección de bola mitad arriba
                if (bolaSelect2 < 5) {
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        if (n >= 0) {
                            setVelocity2(n + 1)
                        }
                        if (n < 0) {
                            setVelocity2(n * -1)
                        }
                        if (n == -2) {
                            setVelocity2(0)
                            clearInterval(setInter)
                        }
                    }, 400);
                }
                //selección de bola mitad abajo
                if (bolaSelect2 === 6) {
                    setView2Bola(false)
                    setDirection2(Direction.Derecha);
                    n = n + 1;
                    setVelocity2(n)
                }
                if (bolaSelect2 === 8) {
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (n == 7) {
                            setVelocity2(0)
                            clearInterval(setInter)
                        }
                    }, 400);
                }
            }


            //Configuración de Partida Media
            if (bola22.length === 25) {
                let n = bolaSelect2;
                //selección de bola mitad abajo
                if (bolaSelect2 > 14 && bolaSelect2 < 22) {
                    //setView1BolaB(false)
                    setView2Bola(false)
                    setDirection2(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity2(n)
                        if (22 - n == 0) {
                            setVelocity2(0)
                            clearInterval(setInter)
                        }
                    }, 300);
                }

                if (bolaSelect2 > 22) {
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (n === 22) {
                            setVelocity2(0)
                            clearInterval(setInter)
                        }
                    }, 300);
                }

                //selección de bola mitad arriba
                if (bolaSelect2 < 14) {
                    //setView1BolaB(false)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        if (n >= 0) {
                            setVelocity2(n + 1)
                        }
                        if (n < 0) {
                            setVelocity2(n * -1)
                        }
                        if (n == -3) {
                            setVelocity2(0)
                            clearInterval(setInter)
                        }
                    }, 300);
                }

            }

            //Configuración de Partida Dificil
            if (bola22.length === 49) {
                let n = bolaSelect2;
                //selección de bola mitad abajo
                if (bolaSelect2 > 27 && bolaSelect2 < 45) {
                    //setView1BolaB(false)
                    setView2Bola(false)
                    setDirection2(Direction.Derecha);
                    let setInter = setInterval(() => {
                        n = n + 1;
                        setVelocity2(n)
                        if (45 - n == 0) {
                            setVelocity2(0)
                            clearInterval(setInter)
                        }
                    }, 200);
                }
                if (bolaSelect2 > 45) {
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        setVelocity2(n)
                        if (n == 45) {
                            setVelocity2(0)
                            clearInterval(setInter)
                        }
                    }, 200);
                }
                //selección de bola mitad arriba
                if (bolaSelect2 < 27) {
                    //setView1BolaB(false)
                    setView2Bola(false)
                    setDirection2(Direction.Izquierda);
                    let setInter = setInterval(() => {
                        n = n - 1;
                        if (n >= 0) {
                            setVelocity2(n + 1)
                        }
                        if (n < 0) {
                            setVelocity2(n * -1)
                        }
                        if (n === -4) {
                            setVelocity2(0)
                            clearInterval(setInter)
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
        if (velocity1 > 0 ) {
            //setVelocity2(0)
            ///setVelocity1(0)
            mueveBola1(bola11.length);
        }
    }, [velocity1])

    //se activa la función de movimiento 2
    React.useEffect(() => {
        if (velocity2 > 0 ) {
            //setVelocity1(0)
            ///setVelocity2(0)
            mueveBola2(bola22.length);
        }
    }, [velocity2])


    const [bolaSelect, setBolaSelect] = React.useState(-1);
    const [bolaSelect2, setBolaSelect2] = React.useState(-1);
    //función para obtener la bola seleccionada mix1
    const selectBall = (index: number) => {
        setView1Bola(!view1Bola)
        //se capturan constantemente movimientos x,y
        setMovX(-30);
        setMovY(-30);
        setBolaSelect(index)
    };

    //función para obtener la bola seleccionada mix2
    const selectBall2 = (index: number) => {
        setView2Bola(!view2Bola)
        //se capturan constantemente movimientos x,y
        setMovX(-30);
        setMovY(-30);
        setBolaSelect2(index)
    };

    //función que interpreta que la bola ya no esta seleccionada
    const selectOutBall = () => {
        //setBolaSelect(-1)
        //return console.log('bola no seleccionada')
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
                                        valor2={value}
                                        long2={long2}
                                        alto2={altoView2}
                                        ancho2={anchoView2}
                                        pos2={index}
                                        dir22={dir2}
                                        onPress2={() => selectBall2(index)}
                                        onPressOut2={() => selectOutBall()}
                                        bolaSelect2={bolaSelect2}
                                        movX2={MovX}
                                        movY2={MovY}
                                        bola2={view2Bola}
                                    />
                                )
                            })}
                        </View>
                    </PanGestureHandler>


                    <View style={styles.View3}
                        onLayout={event => {
                            const layout = event.nativeEvent.layout;
                            setAnchoView1(Math.floor(layout.width))
                            setAltoView1(Math.floor(layout.height))
                        }}
                    >
                        {bola33.map((value, index) => {
                            const long = bola33.length
                            return (
                                <Bola3
                                    key={index}
                                    valor={value}
                                    long={long}
                                    alto={altoView1}
                                    ancho={anchoView1}
                                    pos={index}
                                    direccion={direction2}
                                />
                            )
                        })}
                    </View>
                    <View style={styles.View4}
                        onLayout={event => {
                            const layout = event.nativeEvent.layout;
                            setAnchoView1(Math.floor(layout.width))
                            setAltoView1(Math.floor(layout.height))
                        }}
                    >
                        {bola44.map((value, index) => {
                            const long = bola44.length
                            return (
                                <Bola4
                                    key={index}
                                    valor={value}
                                    long={long}
                                    alto={altoView1}
                                    ancho={anchoView1}
                                    pos={index}
                                    direccion={direction2}
                                />
                            )
                        })}
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