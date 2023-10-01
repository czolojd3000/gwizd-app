import { FC } from "react";
import { View, Text } from "react-native";
import SafeAreaView from "@/components/common/SafeAreaView";
import Input from "@/components/common/Input";

const AnimalInfoScreen: FC = () => {
    return (
        <SafeAreaView>
            <View
                style={{
                    backgroundColor: "#264979",
                    width: "100%",
                    height: 200,
                    paddingTop: 100,
                    paddingHorizontal: 20,
                }}
            >
                <Text style={{ color: "white", fontSize: 24 }}>
                    Utwórz ogłoszenie
                </Text>

                <Text
                    style={{
                        color: "white",
                        fontSize: 16,
                        marginTop: 20,
                        fontWeight: "bold",

                    }}
                >
                    Krok 1
                </Text>
            </View>
            <View style={{ padding: 20 }}>
                <Text>Gatunek</Text>
                <Input />
            </View>
        </SafeAreaView>
    );
};

export default AnimalInfoScreen;
