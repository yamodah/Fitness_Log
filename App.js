
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator()
import Home from "./src/components/Home";
import GeneralInfo from "./src/components/GeneralInfo";
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
        <Stack.Screen name="GeneralInfo" component={GeneralInfo} />
      {/* 
      <Stack.Screen name="ResitanceTraining" component={Profile} />
      <Stack.Screen name="Sports" component={Settings} />
      <Stack.Screen name="Cardio" component={Settings} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}

;
