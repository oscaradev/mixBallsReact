import { StyleSheet } from 'react-native';
import "react-native-gesture-handler"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//Creando Dependencias de Navegación entre componenetes
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Creando Componentes
import Mix from './src/components/mix';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen';
//Establecion comuncicación con AWS
import { Amplify } from 'aws-amplify';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

function Mixx() {
  return (
    <GestureHandlerRootView style={styles.containerGesture}>
      <Mix />
    </GestureHandlerRootView>
  );
}

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
//const App = function (): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Mix Balls" component={Mixx} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
        <Stack.Screen name="Confirm New Password" component={NewPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerGesture: {
    flex: 1,
  }
});

//esta exportación de este modo guarda relación con la dependencia AWS withAuthenticator
//export default withAuthenticator(App)