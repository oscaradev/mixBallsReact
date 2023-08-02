import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";



type EagerControlJSON = {
  readonly idJugador: string;
  readonly nombreJugador: string;
  readonly puntajeMix1?: number | null;
  readonly puntajeMix2?: number | null;
  readonly puntajeMix3?: number | null;
  readonly puntajeMix4?: number | null;
  readonly horaActualizacion?: string | null;
  readonly ipJugador?: string | null;
  readonly abandonado?: boolean | null;
  readonly finalizado?: boolean | null;
  readonly posicion?: number | null;
}

type LazyControlJSON = {
  readonly idJugador: string;
  readonly nombreJugador: string;
  readonly puntajeMix1?: number | null;
  readonly puntajeMix2?: number | null;
  readonly puntajeMix3?: number | null;
  readonly puntajeMix4?: number | null;
  readonly horaActualizacion?: string | null;
  readonly ipJugador?: string | null;
  readonly abandonado?: boolean | null;
  readonly finalizado?: boolean | null;
  readonly posicion?: number | null;
}

export declare type ControlJSON = LazyLoading extends LazyLoadingDisabled ? EagerControlJSON : LazyControlJSON

export declare const ControlJSON: (new (init: ModelInit<ControlJSON>) => ControlJSON)

type EagerPartida = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Partida, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mix1?: string[] | null;
  readonly mix2?: string[] | null;
  readonly mix3?: string[] | null;
  readonly mix4?: string[] | null;
  readonly numJugadores: number;
  readonly codPartida: string;
  readonly iniciado: boolean;
  readonly finalizado: boolean;
  readonly hora: string;
  readonly controlPartida: ControlJSON;
  readonly nombreUserCreador: string;
  readonly idUserCreador: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPartida = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Partida, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mix1?: string[] | null;
  readonly mix2?: string[] | null;
  readonly mix3?: string[] | null;
  readonly mix4?: string[] | null;
  readonly numJugadores: number;
  readonly codPartida: string;
  readonly iniciado: boolean;
  readonly finalizado: boolean;
  readonly hora: string;
  readonly controlPartida: ControlJSON;
  readonly nombreUserCreador: string;
  readonly idUserCreador: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Partida = LazyLoading extends LazyLoadingDisabled ? EagerPartida : LazyPartida

export declare const Partida: (new (init: ModelInit<Partida>) => Partida) & {
  copyOf(source: Partida, mutator: (draft: MutableModel<Partida>) => MutableModel<Partida> | void): Partida;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Partidas?: (Partida | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Partidas: AsyncCollection<Partida>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}