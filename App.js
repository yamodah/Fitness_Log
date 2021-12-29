
import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()
import Home from "./src/components/Home";

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="GeneralInfo" component={Notifications} />
      <Stack.Screen name="ResitanceTraining" component={Profile} />
      <Stack.Screen name="Sports" component={Settings} />
      <Stack.Screen name="Cardio" component={Settings} /> */}
    </Stack.Navigator>
  );
}

;
