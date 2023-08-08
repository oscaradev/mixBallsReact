/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePartida = /* GraphQL */ `
  subscription OnCreatePartida($filter: ModelSubscriptionPartidaFilterInput) {
    onCreatePartida(filter: $filter) {
      id
      mix1 {
        color
        __typename
      }
      mix2 {
        color
        __typename
      }
      mix3 {
        color
        __typename
      }
      mix4 {
        color
        __typename
      }
      numJugadores
      codPartida
      iniciado
      finalizado
      hora
      controlPartida {
        idJugador
        nombreJugador
        puntajeMix1
        puntajeMix2
        puntajeMix3
        puntajeMix4
        horaActualizacion
        ipJugador
        abandonado
        finalizado
        posicion
        __typename
      }
      nombreUserCreador
      idUserCreador
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePartida = /* GraphQL */ `
  subscription OnUpdatePartida($filter: ModelSubscriptionPartidaFilterInput) {
    onUpdatePartida(filter: $filter) {
      id
      mix1 {
        color
        __typename
      }
      mix2 {
        color
        __typename
      }
      mix3 {
        color
        __typename
      }
      mix4 {
        color
        __typename
      }
      numJugadores
      codPartida
      iniciado
      finalizado
      hora
      controlPartida {
        idJugador
        nombreJugador
        puntajeMix1
        puntajeMix2
        puntajeMix3
        puntajeMix4
        horaActualizacion
        ipJugador
        abandonado
        finalizado
        posicion
        __typename
      }
      nombreUserCreador
      idUserCreador
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePartida = /* GraphQL */ `
  subscription OnDeletePartida($filter: ModelSubscriptionPartidaFilterInput) {
    onDeletePartida(filter: $filter) {
      id
      mix1 {
        color
        __typename
      }
      mix2 {
        color
        __typename
      }
      mix3 {
        color
        __typename
      }
      mix4 {
        color
        __typename
      }
      numJugadores
      codPartida
      iniciado
      finalizado
      hora
      controlPartida {
        idJugador
        nombreJugador
        puntajeMix1
        puntajeMix2
        puntajeMix3
        puntajeMix4
        horaActualizacion
        ipJugador
        abandonado
        finalizado
        posicion
        __typename
      }
      nombreUserCreador
      idUserCreador
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
