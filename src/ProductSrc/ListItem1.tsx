
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { List } from '../Item/List'
const { width } = Dimensions.get('window')
const ListItem1 = (props:any) => {
        const navigation:any=useNavigation();
        const _renderItem = ({ item, index }: any) => {
                return (
                <>
                        <TouchableOpacity
                                style={styles.data}
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('Detail',{item})}>
                        <Image
                                style={styles.item}
                                source={item.image}
                                resizeMode='stretch'
                                resizeMethod='resize'
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
                        data={List}
                        renderItem={_renderItem}
                        keyExtractor={(item, index) => index.toString()}
                />
                </>
        )
        }

        export default ListItem1

        const styles = StyleSheet.create({
        item: {
                width: (width /2)-13,
                height: width /1.7,
                borderTopLeftRadius:5,
                borderTopRightRadius:5,

        },
        text: {
                paddingVertical: 10,
                marginLeft: 10,

        },
        list: {
                paddingTop:10,
                marginLeft: 10,
                marginVertical: 2
        },
        data:{
                alignSelf: 'center',
                backgroundColor:'#fff',
                borderRadius:5,
                marginHorizontal:5,
                marginBottom: 15,
                marginLeft: 8.5,
        }
})