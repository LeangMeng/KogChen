import { useNavigation } from '@react-navigation/native'
import { HStack } from 'native-base'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Header = () => {
    const navigate:any=useNavigation()
    return (
    <View style={{backgroundColor:'#fff'}}>
        <HStack style={styles.contianer} >
            <TouchableOpacity onPress={()=>navigate.openDrawer()}>
                <Ionicons style={{marginVertical: 5}} name="md-menu-outline" color='#000' size={30}/>
           </TouchableOpacity>
                <HStack space={2}>
                    <Image style={{width:45,height:45}} source={require('../../Assets/KohChen.jpg')}/>
                </HStack>
           <TouchableOpacity activeOpacity={0.9} onPress={()=>navigate.navigate('Search')}>
                <Ionicons style={{marginVertical: 5}} name="search-outline" color='#000' size={28}/>
            </TouchableOpacity>
        </HStack>
    </View>
    )
}
export default Header

const styles = StyleSheet.create({
    contianer:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:20,
        marginVertical:7,
    },
    KohChen:{
        color:'#000',
        fontSize:20,
        fontWeight:'700',
        marginVertical: 10,
    }
})
