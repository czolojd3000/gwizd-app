import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "@/components/navigation/HomeStackNavigator";

const App: FC = () => {
    return (
        <NavigationContainer>
            <HomeStackNavigator />
        </NavigationContainer>
    );
};
export default App;
