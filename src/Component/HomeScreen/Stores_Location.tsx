import { Divider, HStack, VStack } from 'native-base'
import React, { useCallback, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StoreData } from '../../Item/Store'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/core'
import Map from './Map'
const {width,height}=Dimensions.get('window')
const Stores_Location = (props:any) => {
    const navigate:any= useNavigation()
    const keyExtractor = useCallback(
        (_, index) => {
            return index.toString()
        },
        [],
    )
    const renderData = ({ item,index }: any) => { 
        return (  
            <TouchableOpacity style={styles.item} activeOpacity={0.9} onPress={()=>navigate.navigate('DetailLocation',{item})}> 
            <VStack space={1}>    
                <Text style={styles.Branh}>{item.Branh}</Text> 
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.distane}>{item.Distane}</Text>  
            </VStack>
            <Divider/>
            </TouchableOpacity>     
        )
    }
    return (
        <>
            <Map/>
            <Divider/>
            <Text style={styles.Store}>Store</Text>
            <Divider/>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={StoreData}
                scrollEventThrottle={16}
                renderItem={renderData}
                keyExtractor={keyExtractor}
            />
        </>
    )
}

export default Stores_Location

const styles = StyleSheet.create({
    Store:{
        color:'#000',
        fontSize:19,
        fontWeight: '900',
        alignSelf: 'center',
        borderBottomWidth:1,
        marginBottom: 10,
        marginTop: 10,
    },
    image:{
        width:"100%",
        height:width/1.4,
    },
    item:{
        marginHorizontal: 15,
    },
    Branh:{
        color:'#000',
        fontSize:18,
        fontWeight:'700',
        fontFamily:'Battambang-Bold',
    },
    location:{
        color:'#000',
        fontSize:14,
        marginBottom: 10,
        fontFamily:'Battambang-light'
    },
    space:{
        marginHorizontal:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    distane:{
        color:'red',
        fontSize:15,
    },
})
