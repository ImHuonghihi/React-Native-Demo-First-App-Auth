import React, { Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View, Keyboard, ToastAndroid } from "react-native";
import { colors, fontSizes, images } from "../constants";
import { useEffect, useState } from "react";
import { isValidEmail, isValidPassword } from '../utilities/Validation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CreateAccountWithEmailAndPassword } from "../utilities/CreateAccount";


function Register(props){
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorEmail, setErrorEmail] = useState()
	const [retypePassword, setRetypePassword] = useState('123456Abc')
	const [errorPassword, setErrorPassword] = useState('')
	const isValidationOK = () => email.length > 0 && password.length > 0 && errorEmail == 0 && errorPassword == 0 && password == retypePassword
	  //navigation
		const {navigation, route} = props;
		const {navigate, goBack} = navigation;
	
	const Register = (email, password) => {
		CreateAccountWithEmailAndPassword({email, password}).then(() => {
			navigate('Login')
			ToastAndroid.show('Account Created', ToastAndroid.SHORT)
		}).catch(error=>{
			if(error.code === 'auth/email-already-in-use'){
				return setErrorEmail({email: 'email already in use'});
			}
			console.log('error');
		})
	}

	return <KeyboardAwareScrollView
		style={{
		flex: 1,
		backgroundColor: colors.primary,
	}}>
		<View style={{
			justifyContent: 'space-around',
			alignSelf: 'center',
			flexDirection: 'row',
			padding: 20,
		}}>
			<Text style={{
				fontSize: fontSizes.h1,
				fontWeight: 'bold',
				color: 'white',
				width: '50%',
				alignSelf: 'center',
			}}>
				Here's your first step with us!
			</Text>
			
			<Image
				tintColor = 'white'
				source={images.computer}
				style={{
					width: 150,
					height: 150,
					alignSelf: 'center',
					padding: 20,
				}}
			/>
		</View>
		
		<View style={{
			backgroundColor: 'white',
			flex: 1,
			borderRadius: 20,
			marginHorizontal: 20,
			padding: 20,
		}}>
			<View style={{
				marginHorizontal: 20,
			}}>
				<Text style={{
					marginTop: 20,
					fontSize: fontSizes.h4,
					color: colors.primary,
				}}>
					Email:
				</Text>
				<TextInput
					onChangeText={(text)=>{
						setErrorEmail(isValidEmail(text) == true ? '' : 'Invalid email')
						setEmail(text)
					}}
					style={{
						color: 'black',
					}}
					placeholder='example@gmail.com'
					placeholderTextColor={colors.placeholder}
				/>
				
				<View style={{
					alignSelf: 'center',
					backgroundColor: colors.primary,
					height: 1,
					width: '100%',
					marginHorizontal: 10,
					marginBottom: 10,
					alignItems: 'center',
				}}>
				</View>
				<Text style={{
					color: 'red',
					fontSize: fontSizes.h5,
					marginBottom: 5,
				}}>
					{errorEmail?.email}
				</Text>
				<Text style={{
					fontSize: fontSizes.h4,
					color: colors.primary,
				}}>
					Password:
				</Text>
				
				<TextInput
					onChangeText={(text)=>{
						setErrorPassword(isValidPassword(text) == true ? '' : 'Invalid password')
						setPassword(text)
					}}
					style={{
						color: 'black',
					}}
					placeholder='Enter your password'
					placeholderTextColor={colors.placeholder}
				/>
				<View style={{
					alignSelf: 'center',
					backgroundColor: colors.primary,
					height: 1,
					width: '100%',
					marginHorizontal: 10,
					marginBottom: 10,
					alignItems: 'center',
				}}>
				</View>
				<Text
					style={{
						color: 'red',
						fontSize: fontSizes.h5,
						marginBottom: 5,
					}}>{errorPassword}</Text>
				<Text style={{
					marginTop: 20,
					fontSize: fontSizes.h4,
					color: colors.primary,
				}}>
					Retype password:
				</Text>
				<TextInput
					onChangeText={(text)=>{
						setErrorPassword(isValidPassword(text) == true ? '' : 'Invalid password')
						setRetypePassword(text)
					}}
					style={{
						color: 'black',
					}}
					secureTextEntry={true}
					placeholder='Re-enter your password'
					placeholderTextColor={colors.placeholder}
				/>
				
				<View style={{
					alignSelf: 'center',
					backgroundColor: colors.primary,
					height: 1,
					width: '100%',
					marginHorizontal: 10,
					marginBottom: 10,
					alignItems: 'center',
				}}>
				</View>
				<Text style={{
					color: 'red',
					fontSize: fontSizes.h5,
				}}>
					{errorPassword}
				</Text>
				<TouchableOpacity
					disabled={isValidationOK() == false }
					onPress={()=>{
						// alert(`email: ${email} \n password: ${password}`)
						Register(email, password)
					}}
					style={{
						backgroundColor: isValidationOK() == true ? colors.primary : colors.inactive,
					borderRadius: 20,
					justifyContent: 'center',
					alignItems: 'center',
					width: '50%',
					alignSelf: 'center',
					
				}}>
					<Text style={{
						padding: 8,
						color: 'white',
					}}>
						Register
					</Text>
				</TouchableOpacity>
			</View>
		</View>
		<View style={{
			backgroundColor: 'green',
		}}>
		</View>
	</KeyboardAwareScrollView>
}

export default Register
