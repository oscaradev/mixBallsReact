
export enum Direction {
    CuIzquierdoArriba,
    CuIzquierdoAbajo,
    CuSuperiorDerecha,
    CuSuperiorIzquierda,
    CuDerechoAbajo,
    CuDerechoArriba,
    CuInferiorDerecha,
    CuInferiorIzquierda,
}

export interface Coordenada {
    x: number;
    y: number;
}

export interface GestureEventType {
    nativeEvent: { translationX: number; translationY: number };
}