import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Home"
                component={StartScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default MainStack;