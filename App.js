
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator()
import Home from "./src/components/Home";
import Page1 from "./src/components/Page1";
import Page2 from "./src/components/Page2";
export default function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#ef233c99',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Page1" component={Page1} options={{
          title: 'Page 1',
          headerStyle: {
            backgroundColor: '#ef233c99',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Page2" component={Page2} options={{
          title: 'Page 2',
          headerStyle: {
            backgroundColor: '#ef233c99',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Page3" component={Page3} options={{
          title: 'Page 3',
          headerStyle: {
            backgroundColor: '#ef233c99',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Page4" component={Page4} options={{
          title: 'Page 4',
          headerStyle: {
            backgroundColor: '#ef233c99',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

;
