import React, {useState, useEffect} from 'react';
import {
    Text, 
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Alert
} from 'react-native'
import {images, colors, icons, fontSizes} from '../../constants'
import { HeaderUI } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome5'
import ChatItem from './ChatItem';
function Chat(props) {
    const [chatHistory, setChatHistory] = useState([
        {
            url: 'https://randomuser.me/api/portraits/men/70.jpg',
            name: 'Amanda Weler',
            message: 'Hello, how are you ?',
            numberOfUnreadMessages: 3
        },
        {
            url: 'https://randomuser.me/api/portraits/men/72.jpg',
            name: 'Amanda Weler',
            message: 'Hello, how are you ?',
            numberOfUnreadMessages: 3
        }, 
        {
            url: 'https://randomuser.me/api/portraits/men/73.jpg',
            name: 'Amanda Weler',
            message: 'Hello, how are you ?',
            numberOfUnreadMessages: 6
        }, 
        {
            url: 'https://randomuser.me/api/portraits/men/74.jpg',
            name: 'Amanda Weler',
            message: 'Hello, how are you ?',
            numberOfUnreadMessages: 45
        }, 
        {
            url: 'https://randomuser.me/api/portraits/men/75.jpg',
            name: 'Amanda Weler',
            message: 'Hello, how are you ?',
            numberOfUnreadMessages: 12
        }, 
        {
            url: 'https://randomuser.me/api/portraits/men/76.jpg',
            name: 'Amanda Weler',
            message: 'Hello, how are you ?',
            numberOfUnreadMessages: 32
        }, 
        {
            url: 'https://randomuser.me/api/portraits/men/77.jpg',
            name: 'Amanda Weler',
            message: 'Hello, how are you ?',
            numberOfUnreadMessages: 34
        },         
    ])
    const {navigation, route} = props
    const {navigate, goBack} = navigation
    return <View style={{
        flexDirection: 'column',
    }}>
        <HeaderUI 
        title={"Notifications"} 
        leftIconName={"arrow-left"}
        rightIconName={"search"}
        onPressLeftIcon={()=>{
            alert('press left icon')
        }}
        onPressRightIcon={()=>{
            alert('press right icon')
        }}
        />

<View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingStart: 10
        }}>
            <Text style={{
                color: 'blue',
                fontSize: fontSizes.h4,
                marginStart: 10,
            }}>6 unread messages</Text>
            <Icon            
                name={'trash'}
                style={{ padding: 15 }}
                size={15} color={'black'}
                onPress={()=>{
                    alert('You pressed Delete')
                }}
            />
        </View>
        <FlatList style={{                
        }} 
        data={chatHistory}
        renderItem={({item}) => <ChatItem             
            onPress={()=> {                        
                //alert(`You press item's name: ${item.name}`)
                navigate('Messenger', {user: item})
            }}
            user = {item} key={item.url}/>}            
        />
    
    </View>
}

export default Chat