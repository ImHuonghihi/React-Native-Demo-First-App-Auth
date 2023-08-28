import * as React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity, 
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Setting, FoodList, ProductGridView, Chat} from '../screens';

import {fontSizes, colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
    headerShown: false,
    tabBarActiveTintColor: 'white',
    tabBarInActiveTintColor: colors.inactive,
    tabBarActiveBackgroundColor: colors.primary,
    tabBarInactiveBackgroundColor: colors.primary,
    tabBarBackground: () => (
        <View style={{backgroundColor: colors.primary, flex: 1}}></View>
    ),
    tabBarIcon: ({ focused,color, size}) => {
        return <Icon style={{
            paddingTop: 5
        }}
        name = {route.name == "ProductGridView" ? "align-center":
                (route.name == "FoodList" ? "accusoft" : (
                    route.name == "Setting" ? "cogs" : 
                    (route.name == "Profile" ? "user" : 
                    (route.name == "Chat" ? "comment-dots" : ""))
                ))}
        size={23} 
        color={focused ? 'white' : colors.inactive}/>
    }

})

function UITab(props) {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name={"ProductGridView"} component={ProductGridView} options={{
                tabBarLabel: 'Products',
                tabBarLabelStyle: {fontSize: fontSizes.h5}
            }} />
            <Tab.Screen name={"Chat"} component={Chat} options={{
                tabBarLabel: 'Chat',
                tabBarLabelStyle: {fontSize: fontSizes.h5}
            }} />
            <Tab.Screen name={"FoodList"} component={FoodList} options={{
                tabBarLabel: 'FoodLists',
                tabBarLabelStyle: {fontSize: fontSizes.h5}
            }} />
            <Tab.Screen name={"Setting"} component={Setting} options={{
                tabBarLabel: 'Settings',
                tabBarLabelStyle: {fontSize: fontSizes.h5}
            }} />
        </Tab.Navigator>
    );
}

export default UITab;
