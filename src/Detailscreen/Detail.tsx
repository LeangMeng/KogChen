import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ListItem2 from './ListItem2'
import Slide from './Slide'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Detail = (props:any) => {
    const {item}=props.route.params;
    const naviagte= useNavigation()
    const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState();
  const [statusBarTransition, setStatusBarTransition] = useState();
    return (
        <>
        <StatusBar
          animated={true}
          backgroundColor="#000"
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={hidden} />
        <TouchableOpacity style={styles.backButton}onPress={()=>naviagte.goBack()}>
            <Ionicons  name="arrow-back" color="#000" size={25}/>
        </TouchableOpacity>
        <FlatList 
                key={1}
                data={[]}
                renderItem={null}
                keyExtractor={({item,index}:any)=>index.toString()}
                ListEmptyComponent={()=>{
                        return (
                                <>
                                <Slide item={item}/>
                                <ListItem2/>
                                </>)
                                }}
                ></FlatList>
        </>
    )
}

export default Detail

const styles = StyleSheet.create({
    backButton: {
        width: 45,
        height: 45,
        backgroundColor: '#E5E5E5',
        borderRadius: 45 / 2,
        position: 'absolute',
        zIndex: 1,
        elevation: 1,
        left: 20,
        top:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
