import { TextInput, StyleSheet, TextInputProps } from "react-native"

export function Input(props: TextInputProps){
    return (
        <TextInput style={styles.input} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry} value={props.value} onChangeText={props.onChangeText}/>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderColor: "#DCDCDC",
        borderRadius: 8,
        fontSize: 16,
        padding: 12,
    },
})