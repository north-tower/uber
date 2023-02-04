import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "123",
        title: "Get Ride",
        image: "https://i.postimg.cc/150Kf8cR/nax-rider.png",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order",
        image: "https://i.postimg.cc/150Kf8cR/nax-rider.png",
        screen: "EatsScreen"
    }

];


export default function NavBar() {

  const navigation = useNavigation();

  return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item})=> (
            <TouchableOpacity
            onPress={()=> navigation.navigate(item.screen)}
             style={tw`p-2 pl-6 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                    <Image
                     style={{width:120, height: 120, resizeMode: "contain"}}
                     source = {{uri : item.image}} />
                     <Text style={tw`ml-2 text-lg font-semibold `}>{item.title}</Text>
                    <AntDesign size={12} style={tw`p-2 rounded-full w-10 mt-4`} name='arrowright' color={"black"} /> 
                </View>
            </TouchableOpacity>
    )}
    />
  );
}