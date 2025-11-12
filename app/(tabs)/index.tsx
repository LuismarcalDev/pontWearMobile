import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../Screens/inicio';
import Pessoal from '../Screens/pessoal';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Pessoal" component={Pessoal} />
    </Stack.Navigator>
  );
}
