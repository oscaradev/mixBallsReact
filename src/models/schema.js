export const schema = {
    "models": {
        "Partida": {
            "name": "Partida",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "mix1": {
                    "name": "mix1",
                    "isArray": true,
                    "type": "AWSJSON",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "mix2": {
                    "name": "mix2",
                    "isArray": true,
                    "type": "AWSJSON",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "mix3": {
                    "name": "mix3",
                    "isArray": true,
                    "type": "AWSJSON",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "mix4": {
                    "name": "mix4",
                    "isArray": true,
                    "type": "AWSJSON",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "numJugadores": {
                    "name": "numJugadores",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "codPartida": {
                    "name": "codPartida",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "iniciado": {
                    "name": "iniciado",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "finalizado": {
                    "name": "finalizado",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "hora": {
                    "name": "hora",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "controlPartida": {
                    "name": "controlPartida",
                    "isArray": false,
                    "type": {
                        "nonModel": "ControlJSON"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "nombreUserCreador": {
                    "name": "nombreUserCreador",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "idUserCreador": {
                    "name": "idUserCreador",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "userID": {
                    "name": "userID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Partidas",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUser",
                        "fields": [
                            "userID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Partidas": {
                    "name": "Partidas",
                    "isArray": true,
                    "type": {
                        "model": "Partida"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "userID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "ControlJSON": {
            "name": "ControlJSON",
            "fields": {
                "idJugador": {
                    "name": "idJugador",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nombreJugador": {
                    "name": "nombreJugador",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "puntajeMix1": {
                    "name": "puntajeMix1",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "puntajeMix2": {
                    "name": "puntajeMix2",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "puntajeMix3": {
                    "name": "puntajeMix3",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "puntajeMix4": {
                    "name": "puntajeMix4",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "horaActualizacion": {
                    "name": "horaActualizacion",
                    "isArray": false,
                    "type": "AWSTime",
                    "isRequired": false,
                    "attributes": []
                },
                "ipJugador": {
                    "name": "ipJugador",
                    "isArray": false,
                    "type": "AWSIPAddress",
                    "isRequired": false,
                    "attributes": []
                },
                "abandonado": {
                    "name": "abandonado",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "finalizado": {
                    "name": "finalizado",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "posicion": {
                    "name": "posicion",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.4",
    "version": "7cd76e35e1991df2d93141e2aaaa1e6f"
};