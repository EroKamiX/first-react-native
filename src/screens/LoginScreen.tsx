import Input from "../components/Input"
import { View, useColorScheme, TouchableOpacity ,Text} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from "../assests/style";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Button from "../components/Button";

const LoginScreen = (): JSX.Element => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <View style={styles.centerContainer}>
            <View style={styles.inputContainer}>
                <Input value="" placeholder="username" />
                <Input value="" placeholder="password" />

            </View>
            <Button style= {[styles.button, styles.primary]} title="Login"></Button>
        </View>
    )
}
export default LoginScreen;