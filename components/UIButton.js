import { Text, TouchableOpacity } from "react-native";
import React, {Component} from "react";
import {colors} from '../constants'


function UIButton(props) {
	const {title, onPress, isSelected} = props;
	return <TouchableOpacity
		onPress={onPress}
		style={{
			borderColor: 'white',
			borderWidth: 1,
			borderRadius: 5,
			height: 50,
			marginHorizontal: 15,
			marginVertical: 10,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: isSelected == true ? 'white': null,
		}}>
		{isSelected == true}
		<Text style={
			{
				color: isSelected == true ? colors.primary : 'white',
			}
		}>{title}</Text>
	</TouchableOpacity>
}
export default UIButton
