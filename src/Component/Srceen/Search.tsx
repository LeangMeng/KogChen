import { useNavigation } from '@react-navigation/native'
import { HStack, Icon, Input } from 'native-base'
import React, { createRef, useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Search = () => {
    const inputRef = createRef<TextInput>()
    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    const navigate:any=useNavigation()
    return (
        <HStack style={styles.backButton}>
            <TouchableOpacity onPress={()=>navigate.goBack()}>
                <Ionicons style={{marginVertical:8,width:50}} name="arrow-back" color="#000" size={25}/>
            </TouchableOpacity>
            <Input
            ref = {inputRef}
            autoFocus = {true}
                w={{
                    base: "85%",
                    md: "25%",
                }}
                variant = "rounded"
                InputLeftElement={
                <Icon
                    as={<Ionicons name="search-outline" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                />
                }
                placeholder="Search"
            />
        </HStack>
    )
}

export default Search

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
        marginRight:126
    }
})
