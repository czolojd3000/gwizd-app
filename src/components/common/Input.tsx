import { FC } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

const Input: FC<TextInputProps> = ({ style, ...props }) => {
    return <TextInput style={[style, styles.input]} {...props} />;
};

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#D9D9D9",
        borderRadius: 14,
        fontSize: 16,
        paddingHorizontal: 16,
    },
});

export default Input;
