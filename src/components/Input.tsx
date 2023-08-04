import { PropsWithChildren, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from '../assests/style';

type InputProp = PropsWithChildren<{
    placeholder?: string;
    value: string;
}>;

const Input = (props: InputProp) => {
    const [text, setText] = useState('');
    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={styles.inputStyle}
                placeholder={props.placeholder}
                placeholderTextColor={styles.placeholderTextColor.color}
                onChangeText={newText => setText(newText)}
                defaultValue={props.value}
            />
        </View>
    );
};

export default Input;
