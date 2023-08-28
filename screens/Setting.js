
import { HeaderUI } from "../components";
import React, {useState, useEffect} from 'react';
import {
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	FlatList,
	ScrollView,
	Switch,
	SafeAreaView,
} from 'react-native'
import {images, colors, icons, fontSizes} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'

import {auth, firebaseDatabase, firebaseDatabaseRef} from '../firebase/firebase'
import {StackActions} from '@react-navigation/native'
import { SignOutUser } from "../utilities/CreateAccount";



function Setting (props) {
	const [isEnabledLockApp, setEnabledLockApp] = useState(true)
	const [isUseFingerprint, setUseFingerprint] = useState(false)
	const [isEnabledChangePassword, setEnabledChangePassword] = useState(true)
	//navigation
	const {navigation, route} = props;
	const {navigate, goBack} = navigation;
	const logOut = () =>{
		try {
			SignOutUser();
			console.log('signed out');
			navigate('Login')
		} catch (error) {
			console.log(error);
		}
	}

	return <View style={{
		flex: 1,
	}}>
		<HeaderUI title={"Setting"} />
		
		<ScrollView>
			<View style={{
				height: 50,
				backgroundColor: 'rgba(0,0,0,0.05)',
				justifyContent: 'center'
			}}>
				<Text style={{
					color: 'red',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 10,
				}}>Common</Text>
			</View>
				<View style={{
					flexDirection: 'row',
					paddingVertical: 10,
					alignItems: 'center'
				}}>
					<Icon
						name='globe'
						style={{
							marginStart: 10
						}}
						size={20}
						color={colors.inactive}
					/>
					<Text style={{
					color: 'black',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 20,
				}}>Language</Text>
					<View style={{flex: 1}} />
					<Text style={{
						fontSize: fontSizes.h3,
						color: 'black',
						paddingEnd: 10,
						opacity: 0.5,
					}}>English</Text>
					<Icon
						name='chevron-right'
						style={{
							paddingEnd: 10,
							opacity: 0.5,
						}}
						size={20} color={'black'}
					/>
				</View>
			
			<View style={{
				flexDirection: 'row',
				paddingVertical: 10,
				alignItems: 'center'
			}}>
				<Icon
					name='cloud'
					style={{
						marginStart: 10
					}}
					size={16}
					color={colors.inactive}
				/>
				<Text style={{
					color: 'black',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 20,
				}}>Envriroment</Text>
				<View style={{flex: 1}} />
				<Text style={{
					fontSize: fontSizes.h3,
					color: 'black',
					paddingEnd: 10,
					opacity: 0.5,
				}}>Production</Text>
				<Icon
					name='chevron-right'
					style={{
						paddingEnd: 10,
						opacity: 0.5,
					}}
					size={20} color={'black'}
				/>
			</View>
			
			<View style={{
				height: 50,
				backgroundColor: 'rgba(0,0,0,0.05)',
				justifyContent: 'center'
			}}>
				<Text style={{
					color: 'red',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 10,
				}}>Account</Text>
			</View>
			<View style={{
				flexDirection: 'row',
				paddingVertical: 10,
				alignItems: 'center'
			}}>
				<Icon
					name='phone'
					style={{
						marginStart: 10
					}}
					size={20}
					color={colors.inactive}
				/>
				<Text style={{
					color: 'black',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 20,
				}}>Phone Number</Text>
				<View style={{flex: 1}} />
				
				<Icon
					name='chevron-right'
					style={{
						paddingEnd: 10,
						opacity: 0.5,
					}}
					size={20} color={'black'}
				/>
			</View>
			
			<View style={{
				flexDirection: 'row',
				paddingVertical: 10,
				alignItems: 'center'
			}}>
				<Icon
					name='envelope'
					style={{
						marginStart: 10
					}}
					size={16}
					color={colors.inactive}
				/>
				<Text style={{
					color: 'black',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 20,
				}}>Email</Text>
				<View style={{flex: 1}} />
				<Text style={{
					fontSize: fontSizes.h3,
					color: 'black',
					paddingEnd: 10,
					opacity: 0.5,
				}}>Production</Text>
				<Icon
					name='chevron-right'
					style={{
						paddingEnd: 10,
						opacity: 0.5,
					}}
					size={20} color={'black'}
				/>
				
			</View>
			<View style={{
				flexDirection: 'row',
				paddingVertical: 10,
				alignItems: 'center'
			}}>
				<Icon
					name='sign-out-alt'
					style={{
						marginStart: 10
					}}
					size={16}
					color={colors.inactive}
				/>
				<Text style={{
					color: 'black',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 20,
				}}>Sign out</Text>
				<View style={{flex: 1}} />
				
				<Icon
					name='chevron-right'
					style={{
						paddingEnd: 10,
						opacity: 0.5,
					}}
					size={20} color={'black'}
				/>
			</View>
			
			<View style={{
				height: 50,
				backgroundColor: 'rgba(0,0,0,0.05)',
				justifyContent: 'center'
			}}>
				<Text style={{
					color: 'red',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 10,
				}}>Security</Text>
			</View>
			<View style={{
				flexDirection: 'row',
				paddingVertical: 10,
				alignItems: 'center'
			}}>
				<Icon
					name='door-closed'
					style={{
						marginStart: 10
					}}
					size={20}
					color={colors.inactive}
				/>
				<Text style={{
					color: 'black',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 20,
				}}>Lock app in background</Text>
				<View style={{flex: 1}} />
				<Switch
					trackColor={{ false: colors.inactive, true:  colors.primary}}
					thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
					//ios_backgroundColor="#3e3e3e"
					onValueChange={()=>{
						setEnabledLockApp(!isEnabledLockApp)
					}}
					value={isEnabledLockApp}
					style={{marginEnd: 10}}
				/>
			</View>
			<View style={{
				flexDirection: 'row',
				paddingVertical: 10,
				alignItems: 'center'
			}}>
				<Icon name='fingerprint' style={{
					marginStart: 10,
					
				}}
				      size={20} color={colors.inactive} />
				<Text style={{
					color: 'black',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 20,
				}}>Use fingerprint</Text>
				<View style={{flex: 1}}/>
				<Switch
					trackColor={{ false: colors.inactive, true:  colors.primary}}
					thumbColor={isUseFingerprint ? colors.primary : colors.inactive}
					//ios_backgroundColor="#3e3e3e"
					onValueChange={()=>{
						setUseFingerprint(!isUseFingerprint)
					}}
					value={isUseFingerprint}
					style={{marginEnd: 10}}
				/>
			</View>
			<View style={{
				flexDirection: 'row',
				paddingVertical: 10,
				alignItems: 'center'
			}}>
				<Icon name='lock' style={{
					marginStart: 10,
					
				}}
				    size={20} color={colors.inactive} />
				<Text style={{
					color: 'black',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 20,
				}}>Change password</Text>
				<View style={{flex: 1}}/>
				<Switch
					trackColor={{ false: colors.inactive, true:  colors.primary}}
					thumbColor={isEnabledChangePassword ? colors.primary : colors.inactive}
					//ios_backgroundColor="#3e3e3e"
					onValueChange={()=>{
						setEnabledChangePassword(!isEnabledChangePassword)
					}}
					value={isEnabledChangePassword}
					style={{marginEnd: 10}}
				/>
			</View>
			
			<View style={{
				height: 50,
				backgroundColor: 'rgba(0,0,0,0.05)',
				justifyContent: 'center'
			}}>
				<Text style={{
					color: 'red',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 10,
				}}>Music</Text>
			</View>
			<View style={{
				flexDirection: 'row',
				paddingVertical: 10,
				alignItems: 'center'
			}}>
				<Icon
					name='file-alt'
					style={{
						marginStart: 10
					}}
					size={20}
					color={colors.inactive}
				/>
				<Text style={{
					color: 'black',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 20,
				}}>Term of Service</Text>
				<View style={{flex: 1}} />
				<Icon
					name='chevron-right'
					style={{
						paddingEnd: 10,
						opacity: 0.5,
					}}
					size={20} color={'black'}
				/>
			</View>
			<View style={{
				flexDirection: 'row',
				paddingVertical: 10,
				alignItems: 'center'
			}}>
				<Icon
					name='passport'
					style={{
						marginStart: 10
					}}
					size={20}
					color={colors.inactive}
				/>
				<Text style={{
					color: 'black',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 20,
				}}>Open source licenses</Text>
				<View style={{flex: 1}} />
				
				<Icon
					name='chevron-right'
					style={{
						paddingEnd: 10,
						opacity: 0.5,
					}}
					size={20} color={'black'}
				/>
			</View>
			<TouchableOpacity style={{
				flexDirection: 'row',
				paddingVertical: 10,
				alignItems: 'center'
			}}
			onPress={() =>{
				logOut();
			}}
			>
				<Icon
					name='passport'
					style={{
						marginStart: 10
					}}
					size={20}
					color={colors.inactive}
				/>
				<Text style={{
					color: 'black',
					fontSize: fontSizes.h3,
					fontWeight: 'bold',
					paddingStart: 20,
				}}>LOG OUT</Text>
				<View style={{flex: 1}} />
				
				<Icon
					name='chevron-right'
					style={{
						paddingEnd: 10,
						opacity: 0.5,
					}}
					size={20} color={'black'}
				/>
			</TouchableOpacity>
		</ScrollView>
	</View>;
	
}

export default Setting;
