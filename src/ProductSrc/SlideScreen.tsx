import React from 'react'
import { StyleSheet, Text, View, Image, Platform, Dimensions, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import { HStack } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SlideData } from '../Item/Slides'
const {height,width}=Dimensions.get('window')
const SlideScreen = () => {
        return (
                <View style={styles.container}>
                <Swiper
                        style={styles.wrapper}
                        removeClippedSubviews={false}
                        autoplay
                        loop
                        autoplayTimeout={5}
                        activeDotColor= '#eee'
                >
                        {SlideData.map((item) => (
                        <Image
                                key={item.id}
                                source={item.image}
                                style={styles.image}
                                resizeMethod='resize'
                                resizeMode='cover'
                        />
                        ))}
                </Swiper>
                <HStack style={styles.bottom}>
                        <Text style={{ color:'#000', fontSize:18, paddingTop:15,fontFamily:'Battambang-Bold'}}>Category</Text>
                        <TouchableOpacity>
                                <Text style={{ color:'#000', fontSize:16, paddingTop:15,}}> View all 
                                <AntDesign name = "caretright" size = {20} color = "#000" />
                                </Text>
                        </TouchableOpacity>
                </HStack>
        </View>
        )
}

export default SlideScreen

const styles = StyleSheet.create({
        container: {
                height:height/2.5,
                
        },
        wrapper: {
                height:height
        },
        image:{
                height: width -139,
                width: width,
        },
        bottom:{
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingBottom: 10,
                paddingHorizontal: 15,

        }

})
