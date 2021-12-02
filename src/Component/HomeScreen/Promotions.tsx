import { VStack } from 'native-base'
import { ItemClick } from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types'
import React, { useCallback } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PromotionData } from '../../Item/Dataitem'
import { useNavigation } from '@react-navigation/core'
const {width,height}=Dimensions.get('window')
const Promotions = (props:any) => {
    const naviagtion:any= useNavigation()
    const keyExtractor = useCallback(
        (_, index) => {
            return index.toString()
        },
        [],
    )
    const renderItem=({ item,index }: any)=>{
        return(
        <TouchableOpacity activeOpacity={0.9} onPress={()=>naviagtion.navigate('DetailPromotion',{item})}>
            <VStack space={2}>
                <Image style={styles.image} source={item.image}/>
                <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </VStack>
        </TouchableOpacity>
        )
    }
    return (
    <>
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={PromotionData}
        scrollEventThrottle={16}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
    />
    </>
    )
}

export default Promotions

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:width/2,
    },
    name:{
        color:"#000",
        fontSize:17,
        fontFamily:'Battambang-Black',
        marginBottom: 5,
        marginHorizontal: 15,
    },
    date:{
        color:"red",
        fontSize:15,
        marginHorizontal: 15, 
        marginBottom: 15,  
    }
})
