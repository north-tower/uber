import { View, Text, SafeAreaView , StyleSheet, Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import NavBar from '../components/NavBar';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  return (
     <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
        <Image style={{width: 100,
          height: 100,
          resizeMode: "contain"}} 
          source={{uri : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAeFBMVEUAAAD///8iIiLCwsLY2Njw8PDk5OQ1NTXb29sZGRlISEhtbW3g4OAwMDD7+/vT09Pv7+9AQEC3t7etra2Hh4fKyspSUlJqamqnp6ednZ1bW1t1dXWVlZXIyMgnJyeOjo4NDQ1LS0uBgYFgYGAcHBwzMzOCgoK7u7u3zhucAAAFH0lEQVR4nO2a25aiMBBFQURREZCbICh4af3/P5xUEkEk0My0a8TVZ7+0ShlTJ0klVWlNAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+G3Eq9Vq/e5OvBlD1/XVuzvxZqABNCCgATQgoAE0IKABNCCgwa/QYBnHserzkj04LrSmBov4FBguYx8U8aSv2U2W3Mgw8vNzV7Yxz4I9M7n9oPevwTU9U+XNOjJNe6k1NMj2nl5huqeyq9HYnzm1oZUeVEaFLWxmL/DiZ8xYL5QaWKz3DQ1OM/0JM1yomtztnw2doDUXYuv+0H6tQ/+APVCDie88e8aI5u1vhqbC0No2jc71jHr/PBiogRw20823y81mcy72wlPvOVxebtLpIDsyw11oSG/DR6sz/7aXbJmJQsb/zCANthu+Dkw/LiuDY8r9MJsDvBbrYJrVk3+TcxWctLaa0K/q/ua1rvwzgzRIptRn99g02fAhdxoiRHx8w6bhIeDrKK8+SJpv380gDTjBpWWUkm+zZf0Bd85tb7YZzRknk++ONDGSl3T/JQzWQNnngp7sq7cZXweqzWJFbnty8ucUL5T75XsYqoGv/nr+GO4OFDUs9Srf8kZK/ppWVvHTjr+QgRpYXYc9ioEz+TAly12HIS0TRzxkK8g5dpi9g4EaKM/TxMarwtuaXgZdhheXPeXn4sUoDgUPDNMg6m6AxtflrygaeN3ju6Kd9Ev7VA2crcJCMmch3+ExwOibBiwLs2UY+EwN7L6zHB0JTuzvgY6S5x7DQIbWz9SgZ3RZfiA3zphNCK99hqhZOWLj/EwNeo90tOsZJfvr0HlpPe9ifWUG3uFTNcgUBhU0/hEb3pMqsWyx/lQNemtptDuSBtdfrMHyrzT4+lQNTn0t7JyHtWBPv+Fj40GqMKigs8+t1LQzxcT5ZdKP9qkaUNjvJJUbx5IOS18DfvKjNPDuGsz6zkiWDBgT67sdRDI6DajjqmyXor1N+SDPF3oyXToWmLwYQOfAnsTikjFGuRaijsHbsZntUo+5BtPuBqigJnImOiyZ3Yflk+7oMxJrdBrQalbVR+hznumK3DlUmHDIcVkkW0wrORTwsiwPrqPTgHx4rAjese5botDA6yggzMnOLcUbyhz0a8cP0XwxeWY9Og14ttfOicgdh8dKWUuzlfW/kpfSq9JRpD9UTtsNyprk6DTgZdFWfWBXl4TuNdW9Ym+Y+HpDQf41RxUScjpAWWIDGp8G/MbRa1YBl/wzURIiDfhtyrRVIjpQeUxETgkfbbMVPBa85m7KHxmhBivy0LyW9ScZv1WSc5o0KPiUN/NGYbUMuZnd2Fl5WVU3GtGj3PJrJae6wR+fBuKSQL/dp8JR3K7eNwt+13YQ1412WC2Iw4lfKT3H01KI4AXVrdxkZfD2nGp2jFEDcV3EPDSSJLnZYvknpXwo8kax8pkn01sahqnvystlo1VzL+STmZEU1zxw5ZXrrJ4ao9RALOMGQXl/ds+dU0Vq7CSKO6WHa/Ua42HFjFMD7Rg1euw+hPaqfjD3n5wzDcW5giie/lvDcRv7zkg10CaZUY1zFD6eBfZ6VUOJU7t2zE52ZVdrmzCqZ43nb5tJ2WWkGjAu2yLw/Xz7tMKLm3+rd8WvVe4z0uy7/x047Kg1PzkpLl0WjJ/3FwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYLT8AeFIPfuUFPRpAAAAAElFTkSuQmCC"}}
        />  
          <GooglePlacesAutocomplete   styles={toInputToStyles} />

        <NavBar />
        <NavFavourites />
        </View>
    </SafeAreaView>
   
    
  )
}

export default HomeScreen;

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