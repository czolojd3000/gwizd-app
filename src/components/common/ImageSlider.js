import { useState } from "react";
import Swiper from "react-native-swiper";

import { FlatList, Image, Dimensions, View } from "react-native";

const ImageSlider = () => {
    const [images, setImages] = useState([
        "http://via.placeholder.com/160x160",
        "http://via.placeholder.com/160x160",
        "http://via.placeholder.com/160x160",
    ]);

    return (
        <View style={{height: Dimensions.get("window").width}}>
            <Swiper loop={false}>
                    {[
                        "http://via.placeholder.com/160x160",
                        "http://via.placeholder.com/160x160",
                        "http://via.placeholder.com/160x160",
                        "http://via.placeholder.com/160x160",
                        "http://via.placeholder.com/160x160",
                    ].map((item, index) => (
                        <Image
                            source={{ uri: item }}
                            style={{
                                width: Dimensions.get("window").width,
                                height:
                                    Dimensions.get("window").width,
                                resizeMode: "contain",
                            }}
                        />
                    ))}
                </Swiper>
        </View>
    );
};

export default ImageSlider;
