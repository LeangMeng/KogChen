import { useNavigation } from '@react-navigation/core';
import { Divider, HStack, VStack } from 'native-base';
import React, { useCallback } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import Entypo from 'react-native-vector-icons/Entypo'
const {width,height}=Dimensions.get('window')
const DetailLocation = (props:any) => {
    const naviagte= useNavigation()
    const {item} = props.route.params;
    return (
        <>
            <TouchableOpacity style={styles.backButton}onPress={()=>naviagte.goBack()}>
                <Ionicons  name="arrow-back" color="#000" size={25}/>
            </TouchableOpacity>
            <FlatList 
                key={1}
                data={[]}
                renderItem={null}
                keyExtractor={({item,index}:any)=>index.toString()}
                ListEmptyComponent={()=>{
                    return (
                    <>
                        <VStack space={2}>
                            <Image style={styles.image} source={item.image}/>
                            <HStack style={styles.space}>
                                <Text style={styles.Branh}>{item.Branh}</Text>    
                            </HStack>
                            <Divider/>
                            <HStack style={styles.space} h={10}>
                                <Ionicons name="location-sharp" color="#000" size={20}/>
                                <Text style={styles.name}>{item.location}</Text>                              
                            </HStack>
                            <Divider/>
                            <HStack style={styles.space} h={10}>
                                <Foundation name='telephone' color="#000" size={20}/>
                                <Text style={styles.name}>{item.Phone}</Text>
                                
                            </HStack>
                            <Divider/>
                            <HStack style={styles.space} h={10}>
                                <Entypo name="mail" color="#000" size={20}/>
                                <Text style={styles.name}>{item.Email}</Text>
                            </HStack> 
                            <Divider/>
                        </VStack>
                    </>)
                }}
        >
        </FlatList>
        </>
    )
}

export default DetailLocation

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:350,
    },
    name:{
        color:"#000",
        fontSize:15,
        marginBottom: 5,
        marginHorizontal: 15,
    },
    backButton: {
        width: 45,
        height: 45,
        backgroundColor: 'grey',
        borderRadius: 45 / 2,
        position: 'absolute',
        zIndex: 1,
        elevation: 1,
        left: 20,
        top:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    space:{
        marginHorizontal:25,
        marginTop: 12,
    },
    Branh:{
        color:'#000',
        fontSize:19,
        fontWeight:'900',
        marginBottom:5,
        marginLeft: 20,
        fontFamily:'Battambang-Bold'
    },
})
