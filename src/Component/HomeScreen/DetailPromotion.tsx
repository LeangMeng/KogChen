import { useNavigation } from '@react-navigation/core'
import { HStack } from 'native-base'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const {width,height}=Dimensions.get('window')
const DetailPromotion = (props:any) => {
    const naviagte= useNavigation()
    const {item} = props.route.params;
    return (
        <View>
            <HStack style={styles.backButton}>
                <TouchableOpacity onPress={()=>naviagte.goBack()}>
                    <Ionicons  name="arrow-back" color="#000" size={25}/>
                </TouchableOpacity>
                <Text style={styles.Promotion}>Promotion</Text>
            </HStack>
            <Image style={styles.image} source={item.image}/>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.date}>{item.date}</Text>
        </View>
    )
}

export default DetailPromotion

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:width/2,

    },
    name:{
        color:"#000",
        fontSize:18,
        marginBottom: 10,
        marginHorizontal: 13,
        marginTop:15,
        fontFamily:'Battambang-Regular',
    },
    date:{
        color:"red",
        fontSize:15,
        marginHorizontal: 15,   
    },
    backButton:{
        marginVertical: 10,
        marginHorizontal:20,
        justifyContent: 'space-between',
    },
    Promotion:{
        marginVertical:1,
        color:'#000',
        fontSize:20,
        marginRight:126,
        fontFamily:'Battambang-Bold'
    }
})
