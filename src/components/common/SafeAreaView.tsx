import { FC } from "react";
import {
    Platform,
    SafeAreaView as SafeAreaViewRN,
    StatusBar,
    StyleSheet,
    ViewProps,
} from "react-native";

const SafeAreaView: FC<ViewProps> = ({ style, ...props }) => (
    <SafeAreaViewRN style={[style, styles.safeAreaView]} {...props} />
);

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export default SafeAreaView;