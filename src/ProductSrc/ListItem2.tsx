
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
                        <View>
                        <TouchableOpacity>
                        <Image
                                style={styles.item}
                                source={item.image}
                        />
                        </TouchableOpacity>
                        <View style={styles.text}>
                                <Text style={{ fontSize: 15, color: '#000'}}>{item.name}</Text>
                                <Text style={{ fontSize: 15, color: 'red'}}>{item.price}</Text>
                        </View>
                        </View>
                        
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
                width: (width / 2) - 15,
                height: width / 2.6,
                marginLeft: 10,
                borderRadius: 3
        },
        text: {
                paddingVertical: 10,
                marginLeft: 10,

        },
        list: {
                paddingTop:5,
                marginLeft: 10,
                marginVertical: 2
        }
})