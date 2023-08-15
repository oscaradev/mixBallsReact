import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
//Creando Dependencias de Navegación entre componenetes
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Creando Componentes
import Mix from "./src/components/mix";
import SignInScreen from "./src/screens/SignInScreen/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen/SignUpScreen";
import ConfirmEmailScreen from "./src/screens/ConfirmEmailScreen/ConfirmEmailScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import NewPasswordScreen from "./src/screens/NewPasswordScreen/NewPasswordScreen";
//Importaciones relacionadas a traducciones del juego
import { en, es, hi, zh, pt } from "./src/utilidades/localizations";
import { I18n } from "i18n-js";
//Establecion comuncicación con AWS
import { Amplify } from "aws-amplify";
import "@azure/core-asynciterator-polyfill";
// import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth, Hub } from "aws-amplify";
import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);

// Función para llamar el componente de juego pirncipal con los datos de usuario
function Mixx(user: any) {
  return (
    <GestureHandlerRootView style={styles.containerGesture}>
      <Mix user={user} />
    </GestureHandlerRootView>
  );
}

const Stack = createNativeStackNavigator();

//función para Logout
const onSignOut = () => {
  Auth.signOut()
    .then(() => {})
    .catch((error) => console.log("Error logging out: ", error));
};

export default function App(): JSX.Element {
  //Defino variable que me guardara las traducciones del juego
  const i18n = new I18n({ en, es, hi, zh, pt });

  //defino variable que tendra usuario logueado
  const [user, setUser] = React.useState(undefined);
  const [nameUser, setnameUser] = React.useState(undefined);

  //Se verifica si hay usuario logueado
  React.useEffect(() => {
    checkUser();
  }, []);

  //Se inicializa Hub para escucha instantanea de eventos de cambios de sesion de usuarios
  React.useEffect(() => {
    const listener = (data: any) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkUser();
      }
    };
    const hubListenerCancelToken = Hub.listen("auth", listener);
    //Detiene la escucha del listener
    return () => hubListenerCancelToken();
  }, []);

  const checkUser = async () => {
    await Auth.currentAuthenticatedUser({ bypassCache: true })
      .then((res) => {
        setUser(res.attributes);
        setnameUser(res.attributes.name);
      })
      .catch(() => {
        setUser(undefined);
        setnameUser(undefined);
      });
    //console.log('useeer', authUser.attributes.name)
  };

  //activa o desactiva modal de salir de sesion
  const [modalSesion, setModalSesion] = React.useState(false);
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalSesion}
          onRequestClose={() => setModalSesion(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                {i18n.t("cerrarSeM")} {nameUser ? nameUser : ""}?
              </Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                  onSignOut();
                  setModalSesion(false);
                }}
              >
                <Text style={styles.textStyle}>{i18n.t("siM")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalSesion(false)}
              >
                <Text style={styles.textStyle}>{i18n.t("noM")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <Stack.Navigator>
        <Stack.Screen
          name="Mix Balls"
          //component={Mixx}
          options={{
            title: "",
            headerTransparent: true,
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => setModalSesion(true)}>
                  <Text> {nameUser != undefined ? nameUser : ""} </Text>
                </TouchableOpacity>
              </View>
            ),
          }}
        >
          {(props:any) => <Mixx {...props} extraData={user} />}
        </Stack.Screen>
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
        <Stack.Screen
          name="Confirm New Password"
          component={NewPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerGesture: {
    flex: 1,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 10,
    marginBottom: 15,
    width: 80,
  },
  buttonOpen: {
    backgroundColor: "#FFCE08",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 45,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "900",
    textAlign: "center",
  },
});
