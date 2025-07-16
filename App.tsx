import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
    <HomeScreen></HomeScreen>
    </View>
  );
}

const styles = StyleSheet.create({})

export default App;
