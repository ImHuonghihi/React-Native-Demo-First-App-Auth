import React, { Image, Text, TouchableOpacity, View } from "react-native";
import { colors, fontSizes } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome5";

function _getColorFromStatus(status) {
	//if (status.toLowerCase().trim() =='opening now'){
	//	return colors.success
	//} else if (status.toLowerCase().trim() =='opening soon'){
	//	return colors.alert
	//} else if (status.toLowerCase().trim() =='comming soon') {
	//	return colors.alert
	//}
	//else {
	//	return colors.warning
	//}
	
	return status.toLowerCase().trim() =='opening now' ? colors.success :
		status.toLowerCase().trim() =='opening soon' ? colors.alert :
		status.toLowerCase().trim() =='comming soon' ? colors.warning : colors.inactive
}

function FoodItem(props){
	let { name, price, socialNetworks, status, url, website, } = props.food
	
	const onPress = props.onPress

	return (
		<TouchableOpacity
			onPress = {onPress}
			style={{ height: 150, padding: 10, flexDirection: 'row', }}>
			<Image
				style={{
					width: 100,
					height: 100,
					resizeMode: 'cover',
					marginRight: 15,
					alignSelf: 'center',
					borderRadius: 10,
				}}
				source={{uri: url}}
			/>
			<View style={{
				flex: 1,
				marginRight: 10,
			}}>
				<Text style={{
					fontSize: fontSizes.h4,
					color: 'black',
					fontWeight: 'bold',
					marginTop: 15,
				}}>{name}</Text>
				<View style={{
					height: 1,
					backgroundColor: 'black',
					fontWeight: 'bold',
				}}/>
				<View style={{
					flexDirection: 'row',
				}}>
					<Text style={{
						fontSize: fontSizes.h4,
						color: colors.inactive,
					}}>Status: </Text>
					<Text style={{
						fontSize: fontSizes.h4,
						color: _getColorFromStatus(status),
						
					}}>{status.toUpperCase()}</Text>
				</View>
				<Text style={{
					fontSize: fontSizes.h4,
					color: colors.inactive,
				}}>Price: ${price} </Text>
				<Text style={{
					fontSize: fontSizes.h4,
					color: colors.inactive,
				}}>FoodTypes: Pizza</Text>
				<Text style={{
					fontSize: fontSizes.h4,
					color: colors.inactive,
				}}>Website: {website}</Text>
				<View style={{
					flexDirection: 'row',
				}}>
					{ socialNetworks['facebook'] != undefined && <Icon
						name='facebook'
						size={18}
						style={{paddingEnd: 10}}
						color={colors.inactive} />}
					{ socialNetworks['twitter'] != undefined != undefined && <Icon
						name='twitter'
						size={18}
						style={{paddingEnd: 10}}
						color={colors.inactive} />}
					{ socialNetworks['instagram'] != undefined && <Icon
						name='instagram'
						size={18}
						style={{paddingEnd: 10}}
						color={colors.inactive} />}
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default FoodItem;
