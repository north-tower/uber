import { View, Text, StyleSheet , SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react';
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign";
import NavFavourites from './NavFavourites';
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}> 
      <Text style={tw`text-center py-5 text-xl`}>Good Morning</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete placeholder='Where to?' 
          nearbyPlacesAPI='GooglePlacesSearch' 
          returnKeyType={"search"}
          debounce={400}
          styles={toInputToStyles}
          />
        </View>

        <NavFavourites />
      </View>
      <View style={tw`flex-row bg-white justify-evenly
      py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row justify-between
          bg-black w-24 px-4 py-3 rounded-full`}>
          <Icon name="car" type="font-awesome" color="white" size={16} />
            <Text style={tw`text-white text-center`}>
              Rides
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('EatsScreen')}
         style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
            <Text style={tw` text-center`}>
              Eats
            </Text>
        </TouchableOpacity>
      
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard;


const toInputToStyles = StyleSheet.create({
  container :{
    backgroundColor:"white",
    paddingTop:20,
    flex: 0,
  },
  textInput :{
    backgroundColor: "gray",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer :{
    paddingHorizontal: 20,
    paddingBottom :0,
  }
})