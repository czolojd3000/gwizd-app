import ImageSlider from "@/components/common/ImageSlider";
import Input from "@/components/common/Input";
import SafeAreaView from "@/components/common/SafeAreaView";
import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen: FC = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View
                    style={{
                        backgroundColor: "#264979",
                        width: "100%",
                        height: 200,
                        paddingTop: 100,
                        paddingHorizontal: 20,
                    }}
                >
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={{ color: "white", fontSize: 24 }}>
                            Zaginione zwierzeta
                        </Text>
                        <View style={{width: 40, height: 40, borderRadius: 20, backgroundColor: "white"}} />
                    </View>
                    <Text
                        style={{ color: "white", fontSize: 16, marginTop: 8 }}
                    >
                        Kraków
                    </Text>
                </View>

                
                


            </ScrollView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({});

export default HomeScreen;
