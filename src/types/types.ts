
export enum Direction {
    // CuIzquierdoArriba,
    // CuIzquierdoAbajo,
    // CuSuperiorDerecha,
    // CuSuperiorIzquierda,
    // CuDerechoAbajo,
    // CuDerechoArriba,
    // CuInferiorDerecha,
    // CuInferiorIzquierda,
    Derecha,
    Izquierda
}

export interface Coordenada {
    //x: number;
    //y: number;
    color: string;
}


export interface GestureEventType {
    nativeEvent: { translationX: number; translationY: number };
}