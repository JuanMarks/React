import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Alugar from './components/Alugar';
import Alugadas from './components/Alugadas';
import Detalhes from './components/Detalhes'
import AlugarInput from './components/AlugarInput';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Aplicativo Aluguel'}}
        />
        <Stack.Screen
          name="Alugar"
          component={Alugar}
          options={{title: 'Casas para alugar'}}
        />
        <Stack.Screen
          name="Alugadas"
          component={Alugadas}
          options={{title: 'Casas Alugadas'}}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{title: 'Casas Detalhes'}}
        />
        <Stack.Screen
          name="Alugando"
          component={AlugarInput}
          options={{title: 'Alugando Casa'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

