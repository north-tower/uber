import React from "react";
import {Text,View, Image} from "react-native"

const image = "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg";
const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai * Comfort Food * $$ 🎫* 4  ⭐ (2453+)*";

export default function About() {
    return (
        <View>
            <ResturantImage image={image} />
            <ResturantTitle title={title} />
            <ResturantDescription description={description} />
        </View>
    )
}


const ResturantImage = (props) => (
    <Image source={{ uri : props.image}} style={{width:"100%",height:180}}
        />
    );

const ResturantTitle = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    }}> 
    {props.title}
    </Text>
);

const ResturantDescription = (props) => (
    <Text style={{
        marginTop:10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
    }}>{props.description}</Text>
)