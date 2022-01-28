import { Common } from '@/Theme';
import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

export default class Couches extends React.Component {

    render() {

        return (

            <TouchableOpacity
                onPress={this.props.onPress}
                style={{
                    marginTop: 30,
                    backgroundColor: "#FFF",
                    height: 330,
                    width: 200,
                    elevation: 2,
                    borderRadius: 10,
                    padding: 15,
                    marginRight: 30,
                    marginLeft: 2,
                    marginBottom: 40
                }}
            >
                <Image
                    source={this.props.src}
                    style={{
                        width: 170,
                        height: 150,
                        borderRadius: 10
                    }}
                />
                <TouchableOpacity >
                    <Text style={{ backgroundColor: '#1E90FF', width: 50, borderRadius: 8, textAlign: 'center', color: "#fff", marginTop: 10, padding: 4 }}>NEW
                    </Text>
                </TouchableOpacity>

                <View style={{


                    marginVertical: 10
                }}>

                    <Text style={{
                        fontWeight: 'bold',
                        color: "black",
                        fontSize: 18
                    }}>
                        {this.props.name}
                    </Text>


                    <View style={{
                        height: 4,
                        width: 4,
                        borderRadius: 4,

                        marginHorizontal: 4
                    }}>

                    </View>
                    <View style={{ marginLeft: -120 }}>
                        <Stars
                            default={5}
                            count={5}
                            half={true}
                            starSize={10}

                            fullStar={require('../Assets/Images/star.png')} />
                    </View>


                </View>
                <Text style={{
                    fontWeight: 'bold',
                    color: "black",
                    fontSize: 18
                }}>
                    {this.props.extraName}
                </Text>


                <View style={{
                    flexDirection: "row",
                    marginTop: 5,
                    alignItems: "center",
                    width: "100%"
                }}>
                    <View style={{
                        width: "80%"
                    }}>
                        <Text style={{

                            color: "#696969",
                            fontSize: 16
                        }}>
                            {'\u0024'} {this.props.rate}
                        </Text>
                    </View>

                </View>

            </TouchableOpacity>
        );
    }
}