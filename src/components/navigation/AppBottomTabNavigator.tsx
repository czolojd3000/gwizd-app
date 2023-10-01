import { createStackNavigator } from "@react-navigation/stack";
import { FC } from "react";
import HomeScreen from "@/screens/AppBottomTab/HomeScreen";

const AppBottomTab = createStackNavigator();

const AppBottomTabNavigator: FC = () => {
    return (
        <AppBottomTab.Navigator>
            {[
                { name: "Home", component: HomeScreen },
                { name: "Register", component: HomeScreen },
            ].map(({ name, component }) => (
                <AppBottomTab.Screen
                    name={name}
                    component={component}
                />
            ))}
        </AppBottomTab.Navigator>
    );
};

export default AppBottomTabNavigator;