import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
  FlatList,
  ImageBackground
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import Feather from 'react-native-vector-icons/Feather';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faShoppingBag, faArrowRight, faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { cart } from '../JSON/cart'
import { useNavigation } from '@react-navigation/native';
import Counter from "react-native-counters";
function onChange(number, type) {
  console.log(number, type) // 1, + or -
}
const minusIcon = (isDisabled) => {
  return <Feather name='minus' size={20} color={'black'} />
};

const plusIcon = (isPlusDisabled) => {
  return <Feather name='plus' size={20} color={'black'} />
};

export default function CartScreen() {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()



  const [userId, setUserId] = useState('9')
  const [
    fetchOne,
    { data, isSuccess, isLoading, isFetching, error },
  ] = useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }
  const navigation = useNavigation();

  return (
    <View style={{ height: '100%' }}>
      <View style={{ flexDirection: 'row', backgroundColor: "#FFF", height: 60, borderRadius: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DescriptionScreen')}
        >


          <AntDesign name="arrowleft" size={20} style={{ height: 40, marginTop: 12, marginLeft: 20, borderRadius: 10, borderWidth: 2, borderColor: '#fff', elevation: 10, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#fff' }} />
        </TouchableOpacity>
        <AntDesign name="delete" size={20} style={{ height: 40, width: 45, marginTop: 13, marginLeft: 275, borderRadius: 10, borderWidth: 2, borderColor: 'white', elevation: 10, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#fff' }} />


      </View>
      <View style={{ marginTop: 0 }}>
        <Text style={{ textAlign: 'center', marginTop: -45, fontSize: 26, fontWeight: 'bold', color: 'black' }}>Cart</Text>
      </View>


      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}

        renderItem={({ item }) => (

          <View>
            <TouchableOpacity
              style={{
                marginTop: 5,
                backgroundColor: "#FFF",
                height: 340,
                width: 400,
                elevation: 2,
                borderRadius: 10,

                marginRight: 30,
                marginLeft: 2,
                marginBottom: -200,
                borderBottom: 1,

              }}
            >
              <View style={[Common.row1]}>

                <Image style={{ height: 122, width: 122, backgroundColor: 'red' }} source={{ uri: item.imgUrl }} />

                <View>
                  <Text style={{ textAlign: 'left', marginTop: 10, fontSize: 16, color: '#000000', fontWeight: 'bold', paddingHorizontal: 15, width: '90%' }}>{item.name}</Text>
                  <Text style={{ textAlign: 'left', marginTop: 5, fontSize: 13, color: '#b3aeae', fontWeight: 'bold', paddingHorizontal: 15, width: '90%' }}>{item.subName}</Text>

                  <View style={Common.row}>
                    <Text style={{ color: '#b3aeae', marginLeft: 15, marginTop: 10 }}>{'\u0024'}
                      <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 15, fontSize: 18, color: 'black', paddingHorizontal: 15 }}> {item.rate}</Text>
                    </Text>
                    <View style={{ width: 10, height: 20 }} />
                    <View style={{ borderColor: 'teal', paddingVertical: 3, paddingHorizontal: 60, flexDirection: 'row' }}>
                      <Counter start={1}
                        onChange={onChange.bind(this)}
                        minusIcon={minusIcon}
                        plusIcon={plusIcon} />
                    </View>
                  </View>
                </View>


              </View>
            </TouchableOpacity>


          </View>




        )} />
      <TouchableOpacity
        style={{
          marginTop: 5,
          backgroundColor: "#FFF",
          height: 340,
          width: 400,
          elevation: 2,
          borderRadius: 10,

          marginRight: 30,
          marginLeft: 2,
          marginBottom: -210,
          borderBottom: 1,
          borderEndColor: 'red'
        }}
      >
        <View style={{ flexDirection: 'row', }}>
          <Text style={{ marginTop: 20, color: '#b3aeae', fontSize: 20, marginLeft: 20, fontWeight: '600' }}>Total (3 items) :</Text>
          <Text style={{ color: '#b3aeae', marginLeft: 140, marginTop: 20 }}>{'\u0024'}
            <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 15, fontSize: 20, color: 'black', paddingHorizontal: 15 }}> 1,370</Text>
          </Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#2E85E3', height: 55, width: 340, marginLeft: 30, marginRight: 40, marginTop: 20, borderRadius: 10, flexDirection: 'row' }}>
          <Text style={{ color: '#fff', marginLeft: 60, fontSize: 18, marginTop: 12 }}>Proceed to checkout</Text>
          <AntDesign name="arrowright" size={20} style={{ height: 35, marginTop: 8, marginLeft: 50, borderRadius: 10, borderColor: '#fff', elevation: 2, paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#5BADEC', color: '#fff' }} />

        </TouchableOpacity>
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  sfl: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e08b73'
  }
});