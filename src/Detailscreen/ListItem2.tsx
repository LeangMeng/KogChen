
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native'
import { ListData } from '../ProductSrc/ListShow'
const { width } = Dimensions.get('window')
const ListItem2 = () => {
        const navigation:any=useNavigation();
        const _renderItem = ({ item, index }: any) => {
                return (
                <>
                        <TouchableOpacity style={styles.data} activeOpacity={0.9}>
                        <Image
                                style={styles.item}
                                source={item.image}
                        />
                        <View style={styles.text}>
                                <Text style={{ fontSize: 15, color: '#000',fontFamily:'Battambang-Bold'}}>{item.name}</Text>
                                <Text style={{ fontSize: 15, color: 'red'}}>{item.price}</Text>
                        </View>
                        </TouchableOpacity>
                        
                </>
                )
        }
        return (
                <>
                <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.list}>
                </TouchableOpacity>
                <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={ListData}
                        renderItem={_renderItem}
                        keyExtractor={(item:any, index:any) => index.toString()}
                />
                </>
        )
        }

        export default ListItem2

        const styles = StyleSheet.create({
        item: {
                width: (width / 2)-13,
                height: width / 1.7,
                borderTopLeftRadius:5,
                borderTopRightRadius:5

        },
        text: {
                paddingVertical: 10,
                marginLeft: 10,

        },
        list: {
                paddingTop:5,
                marginLeft: 10,
                marginVertical: 2
        },
        data:{
                alignSelf: 'center',
                backgroundColor:'#fff',
                borderRadius:5,
                marginHorizontal: 5,
                marginBottom: 15,
                marginLeft: 8.5,
        }
})