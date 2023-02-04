import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/Home/BottomTabs";
import Categories from "../components/Home/Categories";
import HeaderTabs from "../components/Home/HeaderTabs";
import RestuarantItems, { localRestaurants } from "../components/Home/RestaurantItems";
import SearchBar from "../components/Home/SearchBar";



export default function EatsScreen() {
	const [resturantData,setResturantData] = React.useState(localRestaurants);
	
	const [activeTab, setActiveTab] = useState("Delivery");

	const getResturants = () => {

	}
	return (
		<SafeAreaView style={{ backgroundColor: "white" , flex: 1 }}>
			<View style={{backgroundColor: "white", padding: 15}}>
				<HeaderTabs />
				<SearchBar />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestuarantItems resturantData={resturantData} />
			</ScrollView>
			<Divider width={1} />
			<BottomTabs />		
		</SafeAreaView>
		);
}