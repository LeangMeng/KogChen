import React from 'react'
import { StyleSheet, Text, View, Image, Platform, Dimensions, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import { HStack } from 'native-base'
import { SlideData } from '../ProductSrc/Slides'
const {height,width}=Dimensions.get('window')
const Slide = () => {
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
                        {SlideData.map((item:any) => (
                        <Image
                                key={item.id}
                                source={item.image}
                                style={styles.image}
                                resizeMethod='resize'
                                resizeMode='cover'
                        />
                        ))}
                </Swiper>
                <View style={styles.bottom}>
                        <Text style={{ color:'#000', fontSize:15, paddingTop:15,}}>
                        អតិថិជនជាទីស្រលាញ់មានចំណាប់អារម្មណ៍ស្រលាញ់គាំទ្រផលិតផលខ្មែរ 
                        ចង់មកជាវ ផលិតផលស្ពាន់សុទ្ធៗ ស្នាដៃប្រណិត ប្រភពផលិតផ្ទាល់  
                        ធានាតម្លៃធូរពិសេសៗសិប្បកម្មផ្ទាល់ៗតែម្តង 
                                        </Text>
                                        <HStack>
                <Text style={{ color:'#000', fontSize:15, paddingTop:15,}}>price : </Text>
                <Text style={{ color:'red', fontSize:15, paddingTop:15,}}> 265$ </Text>
                </HStack>
                </View>
                <View>
                <Text style={{ color:'#000', fontSize:17, marginLeft:5, paddingTop: 5}}> ចំណាប់អារម្មណ៍ចង់ជាវ</Text>
                </View>
        </View>
        )
}

export default Slide

const styles = StyleSheet.create({
        container: {
                height:height/1.5,
                
        },
        wrapper: {
                height:height
        },
        image:{
                height:width ,
                width: width,
        },
        bottom:{
                backgroundColor: '#fff',
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                padding: 10

        }

})
