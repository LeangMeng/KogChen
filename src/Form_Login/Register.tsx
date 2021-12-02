import { useNavigation } from '@react-navigation/native'
import { HStack, Icon, Input, VStack } from 'native-base'
import React, { createRef, useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Register = () => {
    const inputRef = createRef<TextInput>()
    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    const navigate:any=useNavigation()
    return (
        <>
            <HStack style={styles.backButton}>
                <TouchableOpacity onPress={()=>navigate.goBack()}>
                    <Ionicons  name="arrow-back" color="#000" size={25}/>
                </TouchableOpacity>
                <Text style={styles.Promotion}>Register</Text>
            </HStack>
            <View style={{alignItems: 'center',justifyContent: 'center',flex:1}}>
            <VStack space={9}>
                <Text style={styles.enter}>Enter Your Phone Number </Text>
                <Input 
                ref = {inputRef}
                autoFocus = {true}
                w={320}
                InputLeftElement={
                <Icon
                  as={<FontAwesome name="phone" />}
                  size={6}
                  ml="2"
                  color="muted.400"
                />
              }fontSize={16}variant="rounded" placeholder="" keyboardType="numeric" />
            </VStack>
            <TouchableOpacity activeOpacity={0.9} style={styles.buttom}>
                <Text style={styles.next}>Next</Text>
            </TouchableOpacity>
            </View>
        </>
    )
}

export default Register

const styles = StyleSheet.create({
    backButton:{
        marginVertical: 10,
        marginHorizontal:20,
        justifyContent: 'space-between',
    },
    Promotion:{
        marginVertical:1,
        color:'#000',
        fontSize:20,
        fontFamily:'Battambang-Bold',
        marginRight:130
    },
    enter:{
        fontSize:18,
        color:'#000',
        alignSelf: 'center',
        top:6,
    },
    next:{
        fontSize:18,
        color:'#fff',
        alignSelf: 'center',
        top:6,
        fontFamily:'Battambang-Bold'
    },
    buttom:{
        backgroundColor:'#000',
        marginVertical: 100,
        borderWidth:1,
        borderRadius:17,
        height:40,
        width:260,
    }
})
