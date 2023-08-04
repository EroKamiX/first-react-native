import { PropsWithChildren } from "react";
import { Text, TouchableOpacity, View } from "react-native"

type ButtonProps = PropsWithChildren<{
    title: string
    style?: object
}>
const Button = (props: ButtonProps) => {
    return (
        <View>
            <TouchableOpacity style={props.style}>
                <Text >{props.title}</Text>
            </TouchableOpacity>
            {props.children}

        </View>
    )
}
export default Button;