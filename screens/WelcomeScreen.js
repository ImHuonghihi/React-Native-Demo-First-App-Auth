import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {images} from '../constants';
import {icons} from '../constants';
import {UIButton} from '../components';
import {fontSizes} from '../constants';
import {colors} from '../constants';

function WelcomeScreen({navigation}) {
  //state => khi trangj thasi thay doi thi ui reload lai

  //like getter/setter
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Influencer',
      isSelected: true,
    },
    {
      name: 'Business',
      isSelected: false,
    },
    {
      name: 'Individual',
      isSelected: false,
    },
  ]);


  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 100,
      }}>
      <ImageBackground
        source={images.background}
        resizeMode={'cover'}
        style={{
          flex: 100,
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 150,
            marginTop: 15,
            marginEnd: 15,
          }}>
          <Image
            source={icons.icon_fire}
            style={{
              width: 30,
              height: 30,
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginStart: 10,
              marginEnd: 5,
            }}
          />
          <Text style={{color: 'white'}}>NORTHSTUDIO TTAS., JSC</Text>
          <View style={{flex: 1}} />
          <Image
            source={icons.icon_question}
            style={{
              width: 20,
              height: 20,
              tintColor: 'white',
              marginEnd: 10,
            }}
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              marginBottom: 7,
              fontSize: 12,
            }}>
            Welcome to
          </Text>
          <Text
            style={{
              color: 'white',
              marginBottom: 7,
              fontWeight: 'bold',
            }}>
            NORTHSTUDIO TTAS., JSC
          </Text>
          <Text
            style={{
              color: 'white',
              marginBottom: 7,
              fontSize: 12,
            }}>
            Please select your account
          </Text>
        </View>
        <View
          style={{
            flex: 4,
          }}>
          {accountTypes.map(accountType => (
            <UIButton
              key={accountType.name}
              onPress={() => {
                let newAccountTypes = accountTypes.map(eachAccountType => {
                  return {
                    ...eachAccountType,
                    isSelected: eachAccountType.name == accountType.name,
                  };
                });
                setAccountTypes(newAccountTypes);
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          ))}
        </View>
        <View
          style={{
            flex: 3,
          }}>
          <UIButton
            onPress={() => {
              navigation.navigate('Login');
            }}
            title={'Login'.toUpperCase()}
          />
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
              fontSize: fontSizes.h4,
            }}>
            Want to register new Account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register')
            }}
            style={{
              padding: 5,
            }}>
            <Text
              style={{
                color: colors.primary,
                alignSelf: 'center',
                fontSize: fontSizes.h3,
                textDecorationLine: 'underline',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default WelcomeScreen;
