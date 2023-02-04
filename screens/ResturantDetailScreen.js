import React from "react";
import {View, Text} from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/resturantDetails/About";
import MenuItems from "../components/resturantDetails/MenuItems";

export default function ResturantDetailScreen() {
    return(
        <View>
            <About />
            <Divider width={1.8} style={{ marginVertical: 20}} />
            <MenuItems style={{color:"white"}}/>
        </View>
    )
}