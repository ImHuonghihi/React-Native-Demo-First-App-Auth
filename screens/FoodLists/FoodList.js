import React, { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors, fontSizes } from "../../constants";
import { useState } from "react";
import FoodItem from "./FoodItem";
import Icon from "react-native-vector-icons/FontAwesome5";

function FoodList (props) {
	//list of foots = state
	const [foods, setFoods] = useState([{
		name: "Delicious Burger House",
		url: "https://groceryshopforfree.com/wp-content/uploads/2014/06/Slow-Cooker-Spaghetti-Sauce-Recipe-From-Scratch.jpg",
		status: "opening now",
		price: "12",
		website: "https://burgerhouse.com",
		socialNetworks: {
			
			twitter: "https://twitter.com/burgerhouse",
		},
	}, {
		name: "Pasta Paradise",
		url: "https://readthecloud.co/wp-content/uploads/2020/11/italy-food-feature.jpg",
		status: "opening soon",
		price: "1234",
		website: "https://pastaparadise.com",
		socialNetworks: {
			facebook: "https://facebook.com/pastaparadise",
			twitter: "https://twitter.com/pastaparadise",
		},
	}, {
		name: "Sushi Sensation",
		url: "https://th.bing.com/th/id/OIP.-LF2rITtjatVc1I7RLEReAAAAA?pid=ImgDet&rs=1",
		status: "opening now",
		price: "4343",
		website: "https://sushisensation.com",
		socialNetworks: {
			facebook: "https://facebook.com/sushisensation",
			
		},
	}, {
		name: "Pizza Pizzazz",
		url: "https://cdn.tgdd.vn/Files/2021/11/15/1397989/vi-sao-banh-pizza-hinh-tron-nhung-lai-dung-trong-hop-hinh-vuong-202111150646220702.jpg",
		status: "comming soon",
		price: "25232",
		website: "https://pizzapizzazz.com",
		socialNetworks: {
			
			instagram: "https://instagram.com/pizzapizzazz", twitter: "https://twitter.com/pizzapizzazz",
		},
	}, {
		name: "Pizza Indonesia",
		url: "https://cdn.tgdd.vn/Files/2021/11/15/1397989/vi-sao-banh-pizza-hinh-tron-nhung-lai-dung-trong-hop-hinh-vuong-202111150646220702.jpg",
		status: "closing",
		price: "532423",
		website: "https://pizzapizzazz.com",
		socialNetworks: {
			facebook: "https://facebook.com/pizzapizzazz",
			
			twitter: "https://twitter.com/pizzapizzazz",
		},
	}, {
		name: "Pizza LOlo",
		url: "https://cdn.tgdd.vn/Files/2021/11/15/1397989/vi-sao-banh-pizza-hinh-tron-nhung-lai-dung-trong-hop-hinh-vuong-202111150646220702.jpg",
		status: "comming soon",
		price: "345",
		website: "https://pizzapizzazz.com",
		socialNetworks: {
			
			instagram: "https://instagram.com/pizzapizzazz", twitter: "https://twitter.com/pizzapizzazz",
		},
	}, {
		name: "Pizza Vietnam",
		url: "https://cdn.tgdd.vn/Files/2021/11/15/1397989/vi-sao-banh-pizza-hinh-tron-nhung-lai-dung-trong-hop-hinh-vuong-202111150646220702.jpg",
		status: "closing",
		price: "878",
		website: "https://pizzapizzazz.com",
		socialNetworks: {
			facebook: "https://facebook.com/pizzapizzazz", instagram: "https://instagram.com/pizzapizzazz",
			
		},
	}, {
		name: "Pizza Russia",
		url: "https://cdn.tgdd.vn/Files/2021/11/15/1397989/vi-sao-banh-pizza-hinh-tron-nhung-lai-dung-trong-hop-hinh-vuong-202111150646220702.jpg",
		status: "comming soon",
		price: "678",
		website: "https://pizzapizzazz.com",
		socialNetworks: {
			facebook: "https://facebook.com/pizzapizzazz",
			
			twitter: "https://twitter.com/pizzapizzazz",
		},
	}]);
	
	const [categories, setCategories] = useState([{
		name: "BBQ", url: "https://images.foody.vn/BlogsContents/46444498_1785582584898023_6834569445101273088_n(1).jpg",
	}, {
		name: "Breakfast", url: "https://th.bing.com/th/id/OIP.CZENoAoOjJpIImZ6nfSqzAHaLX?pid=ImgDet&rs=1",
	}, {
		name: "Coffee",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12qcjgUCbektxgkXY2cgWu_MfPCG3-eDfWruf19VOdo45be0Xzo6pUJTQx0hW4QrO_FU&usqp=CAU",
	}, {
		name: "Noodles", url: "https://static.toiimg.com/photo/52467119.cms",
	}, {
		name: "Hot dogs",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNjeiTctEE8JCDkPBzQ9ymmBS1zMt3Mws-xo25gnbVFByCZ0NVuwiL2VZicgbS49jz7c&usqp=CAU",
	}, {
		name: "Dinner",
		url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/22/12/dinner-table.jpg?width=1200",
	}, {
		name: "Beverages",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzVkc-LPuqE-DXVUkTznfkCadCqCYzcfoBA&usqp=CAU",
	}, {
		name: "Dessert",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW08jAcTeGjQRVr9NAITfKF3nbRB5RPef2VA&usqp=CAU",
	}, {
		name: "Wine",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUB_gxlZAGsGjHOwSU6mIc_L4X18yTAffJT-ocG6Y-5WqZSORqytoBaMkA5qcgeC2FeZA&usqp=CAU",
	}, {
		name: "Barbecue", url: "https://m.media-amazon.com/images/I/81s-rWYsoKL._SX466_.jpg",
	}]);
	
	const [searchText, setSearchText] = useState("");
	
	const filteredFoods = () => foods.filter(eachFood => eachFood.name.toLowerCase()
		.includes(searchText.toLowerCase()));
	
	return <View style={{ flex: 1, backgroundColor: "white" }}>
		<View>
			<View style={{ marginHorizontal: 10, marginVertical: 10, alignItems: "center", flexDirection: "row" }}>
				<Icon name="search" size={30} color={colors.inactive} style={{
					position: "absolute",
					top: 5,
					left: 10,
				}} />
				<TextInput
					autoCorrect={false}
					onChangeText={(text) => {
						setSearchText(text);
					}}
					style={{
						backgroundColor: colors.inactive,
						height: 40,
						flex: 1,
						marginEnd: 8,
						borderRadius: 5,
						opacity: 0.8,
						paddingStart: 50,
						color: "white",
					}} />
				<Icon name="bars" size={30} color={"black"} />
			
			</View>
			
			<View style={{
				height: 100,
			}}>
				<View style={{ height: 1, backgroundColor: colors.inactive }}></View>
				<FlatList
					horizontal
					data={categories}
					keyExtractor={item => item.name}
					renderItem={({ item }) => {
						return <TouchableOpacity
							onPress={() => {
								alert(`press ${item.name}`);
							}}
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
								marginRight: 16,
							}}>
							<Image source={{ uri: item.url }}
							       style={{ width: 50, height: 50, borderRadius: 20, resizeMode: "cover" }} />
							<Text style={{
								color: "black",
								fontSize: fontSizes.h5,
								textAlign: "center",
							}}>{item.name}</Text>
						
						</TouchableOpacity>;
						
					}}
				/>
				<View style={{ height: 1, backgroundColor: colors.inactive }}></View>
			</View>
		</View>
		{filteredFoods().length > 0 ? <FlatList
			data={filteredFoods()}
			renderItem={({ item }) => {
				return <FoodItem
					onPress={() => {alert("you press item name: ${item.name}");}}
					food={item} key={item.name} />;
			}}
			keyExtractor={eachFood => eachFood.name}
		/> : <View style={{
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		}}>
			<Text style={{
				color: "black",
				fontSize: fontSizes.h3,
			}}>No food found </Text>
		</View>}
	</View>;
}

export default FoodList;
