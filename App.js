
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()
import Home from "./src/components/Home";
import Page1 from "./src/components/Page1";
import Page2 from "./src/components/Page2";
import Page3 from "./src/components/Page3";
import Page4 from "./src/components/Page4";
import Logs from "./src/components/Logs";
import DataPackProvider from "./src/components/GlobalContext";
export default function App() {

  const options={
    headerStyle: {
      backgroundColor: '#27293C',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
  return (
    <DataPackProvider>

        <NavigationContainer >
          <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} options={{
                title: 'Home',
                ...options
              
              }}/>
            <Stack.Screen name="Logs" component={Logs} options={{
                title: 'Logs',
                ...options
              }}/>
              <Stack.Screen name="Page1" component={Page1} options={{
                title: 'Page 1',
                ...options
              }}/>
              <Stack.Screen name="Page2" component={Page2} options={{
                title: 'Page 2',
                ...options
              }}/>
              <Stack.Screen name="Page3" component={Page3} options={{
                title: 'Page 3',
                ...options
              }}/>
              <Stack.Screen name="Page4" component={Page4} options={{
                title: 'Page 4',
                ...options
              }}/>
          </Stack.Navigator>
        </NavigationContainer>

    </DataPackProvider>
  );
}

;
