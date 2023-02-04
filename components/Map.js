import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";


const Map = () => {
  return (
   <View>
      <Image style={{width: "100%",
          height: "100%",
          resizeMode: "contain"}} 
          source={{uri : "https://snazzy-maps-cdn.azureedge.net/assets/8097-wy.png?v=20170626083314"}}
          />
   </View>
  );
}

export default Map