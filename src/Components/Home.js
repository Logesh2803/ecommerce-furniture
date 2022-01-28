import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import Swiper from './Swiper'

export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                backgroundColor: "#FFF",
                paddingHorizontal: 20
            }}
        >



            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <Swiper
                    src={require('../Assets/Images/Table.png')}
                    name="Hallingdal Chair"
                    extraName="Hay"
                    rate="400"
                    onPress={() => { navigation.navigate('DescriptionScreen') }}

                />
                <Swiper
                    src={require('../Assets/Images/Table2.png')}
                    name="Drawer Table"
                    extraName="Ikea"
                    rate="560"

                />
                <Swiper
                    src={require('../Assets/Images/Table2.png')}
                    name="Drawer Table"
                    extraName="Ikea"
                    rate="560"

                />




            </ScrollView>







            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal>


            </ScrollView>


        </ScrollView>
    );
}
