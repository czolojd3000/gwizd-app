import { createStackNavigator } from "@react-navigation/stack";
import { FC } from "react";
import LoginScreen from "@/screens/AuthenticationStack/LoginScreen";

const AuthenticationStack = createStackNavigator();

const AuthenticationStackNavigator: FC = () => {
    return (
        <AuthenticationStack.Navigator>
            {[
                { name: "Login", component: LoginScreen },
                { name: "Register", component: LoginScreen },
            ].map(({ name, component }) => (
                <AuthenticationStack.Screen
                    name={name}
                    component={component}
                />
            ))}
        </AuthenticationStack.Navigator>
    );
};

export default AuthenticationStackNavigator;