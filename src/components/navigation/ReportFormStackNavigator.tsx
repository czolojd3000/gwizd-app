import AnimalInfoScreen from "@/screens/ReportFormStack/AnimalInfoScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { FC } from "react";

const ReportStack = createStackNavigator();

const ReportStackNavigator : FC = () => {
    return (
        <ReportStack.Navigator>
            {[
                { name: "Login", component: AnimalInfoScreen },
                { name: "Register", component: AnimalInfoScreen },
            ].map(({ name, component }) => (
                <ReportStack.Screen
                    name={name}
                    component={component}
                />
            ))}
        </ReportStack.Navigator>
    );
}

export default ReportStackNavigator;