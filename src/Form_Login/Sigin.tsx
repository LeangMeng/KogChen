import { useNavigation } from '@react-navigation/core'
import { FormControl, HStack, Icon, Input, VStack} from 'native-base'
import React, { createRef, useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Sigin = () => {
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
                <Text style={styles.Promotion}>Sign In</Text>
            </HStack>
        <View style={{alignItems: 'center',flex:1}}>
        <View style={{alignSelf: 'center',width:340,marginLeft: 20,marginVertical: 50,}}>
            <Text style={styles.Tag}>Phone Number</Text>    
            <Input
            ref = {inputRef}
            autoFocus = {true}
            InputLeftElement={
                <Icon
                  as={<FontAwesome name="phone" />}
                  size={6}
                  ml="2"
                  color="muted.400"
                />
              }fontSize={16} variant="underlined" placeholder="" keyboardType="numeric" />
            <Text style={styles.Tag}>Password</Text>
            <Input
        
            InputLeftElement={
                <Icon
                  as={<Ionicons name="key" />}
                  size={7}
                  ml="2"
                  color="muted.400"
                />
              }fontSize={16} variant="underlined" placeholder="" />
        </View>
        <VStack space={8} style={{alignItems: 'center',flex:1}}>
            <TouchableOpacity onPress={()=>navigate.navigate('Forgot_Password')}>
                <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth: 1,width:320,justifyContent: 'center',alignItems: 'center',borderRadius: 10,backgroundColor:"#032D3C"}}>
                <Text style={styles.buttom}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth: 1,width:320,justifyContent: 'center',alignItems: 'center',borderRadius: 10,}} onPress={()=>navigate.navigate('Register')}>
                <Text style={styles.buttom}>Register Now</Text>
            </TouchableOpacity>
        </VStack>  
        </View>
        </>
    )
}

export default Sigin

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
        marginRight:138
    },
    Num:{
        color:'#000',
        paddingTop:20,
        bottom:5,
        fontWeight:'800'
    },
    Tag:{
        paddingTop:20,
        color:'grey',
    },
    buttom:{
        paddingTop:20,
        color:'grey',
        bottom: 11,
        fontSize:15,
        fontFamily:'Battambang-Bold',
    },
    forgot:{
        color:'#000',
        borderBottomWidth:1,
        fontSize:15
    }
})
