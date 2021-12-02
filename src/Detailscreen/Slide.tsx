import { HStack, VStack } from 'native-base';
import React from 'react'
import { StyleSheet, Text, View, Image, Platform, Dimensions, TouchableOpacity, FlatList } from 'react-native'
const Slide = (props:any) => {
        const {item}=props;
        return (
        <>
          <Image style={styles.image} source={item.image} resizeMethod="resize" resizeMode='stretch'/>
          <VStack space={3} style={styles.data}>
                <Text style={styles.name}>{item.name}</Text>
                <HStack space={5}>
                        <Text style={styles.Price}>Availabile</Text>
                        <Text style={styles.Availabile}>: {item.productSKU}</Text>
                </HStack>
                <HStack space={5}>
                        <Text style={styles.Price}>Product</Text>
                        <Text style={styles.product}>   : {item.product}</Text>
                </HStack>
                <HStack space={5}>
                        <Text style={styles.Price}>Price</Text>
                        <Text style={styles.Availabile}>      : {item.price}</Text>
                </HStack>
                <Text style={styles.name}>You May Also Like</Text>
          </VStack>
        </>
        )
}

export default Slide

const styles = StyleSheet.create({
        image:{
                height:430 ,
                width:"100%",
        },
        bottom:{
                backgroundColor: '#fff',
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                padding: 10
        },
        name:{
                color:"#000",
                fontSize:22,
                fontFamily:'Battambang-Bold',
        },
        data:{
                marginHorizontal:20,
                marginVertical:10,
        },
        Availabile:{
                color:"red",
                fontSize:18,
                fontFamily:'Battambang-Bold',  
        },
        Price:{
                color:"#000",
                fontSize:15,
        },
        product:{
                color:"#000",
                fontSize:18,
                fontFamily:'Battambang-Bold',    
        }

})
