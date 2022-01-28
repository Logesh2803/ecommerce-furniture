
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, Button } from 'react-native'
import SwiperComponents from './SwiperComponents'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faShoppingBag, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import Counter from "react-native-counters";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/Hooks'
function onChange(number, type) {
  console.log(number, type) // 1, + or -
}

const minusIcon = (isDisabled) => {
  return <Feather name='minus' size={20} color={'black'} />
};

const plusIcon = (isPlusDisabled) => {
  return <Feather name='plus' size={20} color={'black'} />
};


export default function DescriptionScreen() {

  const navigation = useNavigation();
  const { Common } = useTheme()
  return (
    <>
      <View style={{ flexDirection: 'row', backgroundColor: "#FFF", height: 60, borderRadius: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Main')}
        >
          <AntDesign name="arrowleft" size={20} style={{ height: 40, marginTop: 12, marginLeft: 20, borderRadius: 10, borderWidth: 2, borderColor: '#fff', elevation: 10, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#fff' }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CartScreen')}
        >
          <Entypo name='shopping-bag' size={25} style={{ height: 40, marginTop: 12, marginLeft: 280, borderRadius: 10, borderWidth: 2, borderColor: '#fff', elevation: 10, paddingHorizontal: 10, paddingVertical: 6, backgroundColor: '#fff' }} />
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 50
      }}>


        <View style={{
          flexDirection: "row",
          height: 350,
          width: "100%"
        }}>

          <SwiperComponents />
        </View>


        <View style={{
          flexDirection: "row",
          alignItems: "center",
          width: 15, marginTop: 40, marginLeft: -20,
          width: "100%"
        }}>
          <View style={{
            width: "65%",
            flexDirection: 'row'
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 25,
              color: "#4f4a4a"
            }}>Hallingdal Chair</Text>
            <View style={{ marginLeft: 70, backgroundColor: '#F6F8FC', borderRadius: 10 }}>
              <Counter start={1}
                onChange={onChange.bind(this)}
                minusIcon={minusIcon}
                plusIcon={plusIcon} />
            </View>

          </View>

        </View>

        <View style={{ marginTop: 12, marginLeft: -20, }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: "#4f4a4a"
          }}>Description</Text>
        </View>
        <View style={{ marginTop: 10, marginLeft: -20, }}>
          <Text style={{ color: '#b3aeae', lineHeight: 18 }}>A chair with a high back will provide optimum{"\n"}comfort.The fashionable design of the chair will {"\n"}allow you to decorate  any room at home.</Text>
        </View>

        <TouchableOpacity style={{ backgroundColor: '#2E85E3', bottom: 0, height: 55, width: 350, marginLeft: -20, marginRight: 40, marginTop: 10, borderRadius: 10, flexDirection: 'row', elevation: 10 }}
          onPress={() => navigation.navigate('CartScreen')}>

          <Entypo name='shopping-bag' size={25} style={{ height: 38, marginTop: 6, marginLeft: 25, borderRadius: 10, borderColor: '#fff', elevation: 2, paddingHorizontal: 8, paddingVertical: 8, backgroundColor: '#5BADEC', color: '#fff' }} />

          <Text style={{ color: '#C0E9FF', fontWeight: 'bold', marginLeft: 25, fontSize: 18, marginTop: 14 }}>Add to Cart           |       {'\u0024'} 400</Text>

        </TouchableOpacity>



      </View>
    </>
  );
}


