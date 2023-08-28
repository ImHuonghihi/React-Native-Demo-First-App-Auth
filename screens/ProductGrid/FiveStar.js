import Icon from "react-native-vector-icons/FontAwesome5";
import React, { FlatList, Image, Text, View } from "react-native";
import { useState } from "react";
import { colors, fontSizes } from "../../constants";
function FiveStar(props) {
	const {numberOfStars} = props
	return <View style={{
		flexDirection: 'row', justifyContent: 'flex-end'
	}}>
		{[0, 1, 2, 3, 4].map(item => <Icon
			key={`${item}`}
			name='star'
			style={{ marginEnd: 2 }}
			size={8} color={item <= numberOfStars - 1 ? colors.warning : colors.inactive}
		/>)}
	</View>
}
export default FiveStar
