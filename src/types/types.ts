
export enum Direction {
    Arriba,
    Abajo,
}

export interface Coordenada {
    x: number;
    y: number;
}

export interface GestureEventType {
    nativeEvent: { translationX: number; translationY: number };
}