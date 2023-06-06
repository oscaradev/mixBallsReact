import { StyleSheet} from 'react-native';
import "react-native-gesture-handler"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Mix from './src/components/mix';

export default function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.containerGesture}>
      <Mix />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  containerGesture: {
    flex: 1,
  },
});
