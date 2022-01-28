import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Entypo from 'react-native-vector-icons/Entypo';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faShoppingBag, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { books } from '../../Data'
import { useTheme } from '@/Hooks'
import { useNavigation } from '@react-navigation/native';
import Home from './Home'
export default function Example() {
  const navigation = useNavigation();
  const { Fonts, Common, Images, Layout } = useTheme()
  return (
    <>


      <ScrollView nestedScrollEnabled={true} >
        <View style={{ flexDirection: 'row', backgroundColor: "#FFF", height: 50, borderRadius: 10, color: 'red' }}>
          <FontAwesomeIcon icon={faBars} size={20} style={{ heighy: 35, marginTop: 15, marginLeft: 20, borderRadius: 10, borderWidth: 2, borderColor: '#fff', elevation: 10, paddingHorizontal: 20, paddingVertical: 12, backgroundColor: '#fff' }} />
          <TouchableOpacity
            onPress={() => navigation.navigate('DescriptionScreen')}
          >
            <Entypo name='shopping-bag' size={25} style={{ height: 35, marginTop: 12, marginLeft: 280, borderRadius: 10, borderWidth: 2, borderColor: '#fff', elevation: 10, paddingHorizontal: 10, paddingVertical: 4, backgroundColor: '#fff' }} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: "#fff" }}>


          <Text style={[Fonts.titleSmall, Common.name]} >New arrival

          </Text>
          <FontAwesomeIcon icon={faArrowRight} size={20} style={{ marginTop: 34, marginHorizontal: 175 }} />

        </View>
        <Home />
        {/* Grid Method */}
        {/* <FlatGrid
              itemDimension={160}
              data={books}
              style={Common.gridView}
              spacing={15}
              renderItem={({ item }) => (
                <View style={[Common.itemContainer, { backgroundColor: "#F5F5F5" }]}>
                  <TouchableOpacity
                    >
                    <Image source={{ uri: item.imgUrl }} style={Common.thumbnail}
                    /> */}
        {/*End of Grid Method*/}
        {/* <Text style={Common.itemName}>{item.name}</Text>

                  </TouchableOpacity>
    
    
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={Common.itemRate}>{'\u20B9'} {item.rate}</Text>
                    
                  </View>
  
                </View>
   
              )}
            /> */}
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 20 }}>
          <Text style={[Fonts.titleSmall, Common.nameMiddle]} >Collections

          </Text>
          <FontAwesomeIcon icon={faArrowRight} size={20} style={{ marginTop: -15, marginHorizontal: 175 }} />
        </ View>
        <View style={{ marginTop: -2 }}>
          <Image source={Images.logo} style={Layout.table} />
        </View>
      </ScrollView>

    </>

  );
}

