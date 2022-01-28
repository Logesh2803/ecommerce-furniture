import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/Hooks'


export default function SwiperComponent() {
    const { Common } = useTheme()
    return (

        <View style={Common.slide}>
            <Image
                source={require('../Assets/Images/Table.png')}
                style={{ height: 350, width: 410, marginTop: 50, backgroundColor: '#F5F7FB' }}
            />

        </View>




    );
}
