import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackRouter} from 'react-navigation';
import {WelcomeScreen, Login, Register, Messenger} from '../screens';
import UITab from './UITab';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

function App(props) {
  // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
//>>> ????
//e, bi k navigate udoc

    return (
        <NavigationContainer>
        <Stack.Navigator
           // initialRouteName="WelcomeScreen"
            screenOptions={{
            headerShown: false,
            animation: 'simple_push',
            }}>
            {/* {user ? ( */}
            <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
            {/* ) : (
                //luc dau e dung <View> o day thi k su dung duoc, no goi y dung f</View>
            <> */}
                <Stack.Screen name={'Login'} component={Login} />
                <Stack.Screen name={'Register'} component={Register} />
                <Stack.Screen name={'UITab'} component={UITab} />
                <Stack.Screen name={'Messenger'} component={Messenger} />
            {/* </>
            )} */}
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
