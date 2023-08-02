/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePartida = /* GraphQL */ `
  subscription OnCreatePartida($filter: ModelSubscriptionPartidaFilterInput) {
    onCreatePartida(filter: $filter) {
      id
      mix1
      mix2
      mix3
      mix4
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
      userID
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
      mix1
      mix2
      mix3
      mix4
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
      userID
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
      mix1
      mix2
      mix3
      mix4
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
      userID
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
      Partidas {
        items {
          id
          mix1
          mix2
          mix3
          mix4
          numJugadores
          codPartida
          iniciado
          finalizado
          hora
          nombreUserCreador
          idUserCreador
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
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
      Partidas {
        items {
          id
          mix1
          mix2
          mix3
          mix4
          numJugadores
          codPartida
          iniciado
          finalizado
          hora
          nombreUserCreador
          idUserCreador
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
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
      Partidas {
        items {
          id
          mix1
          mix2
          mix3
          mix4
          numJugadores
          codPartida
          iniciado
          finalizado
          hora
          nombreUserCreador
          idUserCreador
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
