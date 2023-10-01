import ImageSlider from "@/components/common/ImageSlider";
import SafeAreaView from "@/components/common/SafeAreaView";
import { FC } from "react"
import { ScrollView, View, Text } from "react-native";

const ReportDetailsScreen: FC = () => {
    return <SafeAreaView>
    <ScrollView>
        <ImageSlider />
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>
                Labrador retriever
            </Text>
            <Text style={{ fontSize: 14 }}>
                Zagubiony dnia 12.12.2004
            </Text>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Opis
            </Text>
            <Text style={{ fontSize: 14 }}>
                Zagubiony dnia 12.12.2004
            </Text>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Cechy charakterystyczne
            </Text>
            <Text style={{ fontSize: 14 }}>- taki</Text>
            <Text style={{ fontSize: 14 }}>- fajny</Text>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Ostatnio widziany
            </Text>
        </View>
    </ScrollView>
</SafeAreaView>
}

export default ReportDetailsScreen;