import { View, StyleSheet } from 'react-native';
import "react-native-gesture-handler"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Mix from './src/components/mix';

import SignInScreen from './src/screens/SignInScreen/SignInScreen';

export default function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.containerGesture}>
      {/* <Mix /> */}
      <SignInScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  containerGesture: {
    flex: 1,
  }
});
