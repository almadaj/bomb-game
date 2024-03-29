import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "../pages/Start";
import Rules from "../pages/Rules";
import PlaySolo from "../pages/PlaySolo";
import PlayDuo from "../pages/PlayDuo";
import Disarmed from "../pages/Disarmed";
import Exploded from "../pages/Exploded";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="PlaySolo" component={PlaySolo} />
        <Stack.Screen name="PlayDuo" component={PlayDuo} />
        <Stack.Screen name="Exploded" component={Exploded} />
        <Stack.Screen name="Disarmed" component={Disarmed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
