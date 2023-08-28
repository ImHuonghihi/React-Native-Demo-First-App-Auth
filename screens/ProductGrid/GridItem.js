import React, { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { colors, fontSizes } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import FiveStar from "./FiveStar";
import ProductGridView from  './ProductGridView'

function GridItem (props) {
	const {item, index, onPressSaved} = props
  return <View
	  style={{
	  marginLeft: index % 2 === 0 ? 10 : 0,
	  marginTop: 5,
	  marginRight: 10,
	  marginBottom: 5,
	  borderRadius: 20,
	  flex: 0.5,
	  borderWidth: 1,
	  borderColor: colors.inactive,
  }}>
	  <View style={{
		  flexDirection: "row",
		  marginTop: 10,
		  marginHorizontal: 5,
	  }}>
		  <Image
			  style={{
				  width: 100,
				  height: 100,
				  resizeMode: "cover",
				  borderRadius: 20,
				  marginRight: 15,
			  }}
			  source={{
				  uri: item.url,
			  }} />
		  <Text style={{
			  color: "red",
			  fontSize: fontSizes.h3,
			  flex: 1,
			  textAlign: "right",
		  }}>$ {item.price}</Text>
	  </View>
	  <Text style={{
		  color: colors.primary,
		  fontSize: fontSizes.h5,
		  fontWeight: "bold",
		  marginHorizontal: 10,
		  marginTop: 5,
	  }}>{item.productName}</Text>
	  
	  {
		  item.specifications.map(specification =>
			  <Text
				  key={specification}
				  style={{
					  color: "black",
					  fontSize: fontSizes.h5,
					  paddingHorizontal: 10,
					  paddingBottom: 10,
					  
				  }}>* {specification}</Text>)
	  }
	  <View style={{
		  flexDirection: "row",
		  padding: 10,
	  }}>
		  <TouchableOpacity
			  onPress = {onPressSaved}
			  
			  style={{
				  flexDirection: "row",
			  }}>
			  <Icon name="heart"
			        style={{ marginEnd: 5 }}
			        size={22}
			        color={item.isSaved === undefined || item.isSaved === false ? colors.inactive : "red"}
			  />
			  <Text style={{
				  color: item.isSaved === undefined || item.isSaved === false ? colors.inactive : "red",
				  fontSize: fontSizes.h5,
				  width: 50,
			  }}>Save for later</Text>
		  </TouchableOpacity>
		  <View style={{
			  flex: 1,
		  }}>
			  <FiveStar numberOfStars={item.stars} />
			  <Text style={{
				  color: colors.success,
				  fontSize: fontSizes.h5,
				  textAlign: "right",
				  paddingTop: 5,
			  }}>{item.reviews} reviews</Text>
		  </View>
	  </View>
  </View>
}

export default GridItem
