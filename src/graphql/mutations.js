/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPartida = /* GraphQL */ `
  mutation CreatePartida(
    $input: CreatePartidaInput!
    $condition: ModelPartidaConditionInput
  ) {
    createPartida(input: $input, condition: $condition) {
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
export const updatePartida = /* GraphQL */ `
  mutation UpdatePartida(
    $input: UpdatePartidaInput!
    $condition: ModelPartidaConditionInput
  ) {
    updatePartida(input: $input, condition: $condition) {
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
export const deletePartida = /* GraphQL */ `
  mutation DeletePartida(
    $input: DeletePartidaInput!
    $condition: ModelPartidaConditionInput
  ) {
    deletePartida(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
