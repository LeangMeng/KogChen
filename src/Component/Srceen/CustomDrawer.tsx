import { Divider, HStack, VStack } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/core'
const CustomDrawer = () => {
    const navigate:any=useNavigation()
    return (
        <>
        <View style={styles.from}>
            <HStack alignSelf='center' space={5} style={styles.profile}>
                <View style={styles.user}>
                    <SimpleLineIcons name='user' color='#fff' size={40}/>
                </View>
                <TouchableOpacity style={styles.buttom_sign} activeOpacity={0.9} onPress={()=>navigate.navigate('Sigin')}>
                    <Text style={styles.signin}>Sign in</Text>
                </TouchableOpacity>
            </HStack> 
        </View>
        <VStack space={5} style={styles.list}>
            <TouchableOpacity activeOpacity={0.9}>
                <HStack space={10}>
                    <EvilIcons name='credit-card' color="#000" size={30}/>
                    <Text style={styles.menu}>My Cards</Text>
                </HStack>    
            </TouchableOpacity>
            <Divider w={220}/>
            <TouchableOpacity activeOpacity={0.9}>
                <HStack space={10}>
                    <EvilIcons name='archive' color="#000" size={30}/>
                    <Text style={styles.menu}>Purchase History</Text>
                </HStack>    
            </TouchableOpacity>
            <Divider w={220}/>
            <TouchableOpacity activeOpacity={0.9}>
                <HStack space={10}>
                    <EvilIcons name='paperclip' color="#000" size={30}/>
                    <Text style={styles.menu}>Terms and Conditions</Text>
                </HStack>    
            </TouchableOpacity>
            <Divider w={220}/>
            <TouchableOpacity activeOpacity={0.9}>
                <HStack space={10}>
                    <EvilIcons name='exclamation' color="#000" size={30}/>
                    <Text style={styles.menu}>About as</Text>
                </HStack> 
            </TouchableOpacity>
            <Divider w={220}/>
            <TouchableOpacity activeOpacity={0.9}>
                <HStack space={10}>
                    <Ionicons name='md-list-outline' color="#000" size={25}/>
                    <Text style={styles.menu}>Categories</Text>
                </HStack>    
            </TouchableOpacity>
            <Divider w={220}/>
            <TouchableOpacity activeOpacity={0.9}>
                <HStack space={10}>
                    <EvilIcons name='refresh' color="#000" size={30}/>
                    <Text style={styles.menu}>Return Policy</Text>
                </HStack>    
            </TouchableOpacity>
        </VStack>
        </>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    user:{
        backgroundColor:'#E5E5E5',
        width:70,
        height:70,
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signin:{
        color:'#FFF',
        fontSize:20,
        fontFamily:'Battambang-Bold'
    },
    buttom_sign:{
        backgroundColor:'#000',
        width:150,
        height:40,
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:15
    },
    profile:{
        alignSelf:'center',
        marginVertical: 40,
    },
    from:{
        backgroundColor:'grey',
        borderBottomRightRadius: 50,
    },
    menu:{
        color:'#000',
        fontSize:15,
        fontWeight:'100',
        fontFamily:'Battambang-Bold'
    },
    list:{
        marginVertical: 50,
        marginLeft: 35,
    }
})
