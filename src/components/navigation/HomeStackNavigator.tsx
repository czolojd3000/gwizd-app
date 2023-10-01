
import "react-native-gesture-handler"
import HomeScreen from "@/screens/AppBottomTab/HomeScreen";
import ReportDetailsScreen from "@/screens/AppBottomTab/ReportDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { FC } from "react";
import AnimalInfoScreen from "@/screens/ReportFormStack/AnimalInfoScreen";

const HomeStack = createStackNavigator();

const HomeStackNavigator : FC = () => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            {[
                { name: "ReportDetails", component: AnimalInfoScreen },
                { name: "Home", component: HomeScreen },
            ].map(({ name, component }) => (
                <HomeStack.Screen
                    name={name}
                    component={component}
                />
            ))}
        </HomeStack.Navigator>
    );
}

export default HomeStackNavigator;