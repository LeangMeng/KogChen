import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ListItem1 from '../../ProductSrc/ListItem1'
import SlideScreen from '../../ProductSrc/SlideScreen'
const Products = () => {
    return (
    <>
        <FlatList 
                key={1}
                data={[]}
                renderItem={null}
                keyExtractor={({item,index}:any)=>index.toString()}
                ListEmptyComponent={()=>{
                        return (
                                <>
                                <SlideScreen/>
                                <ListItem1/>
                                </>)
                                }}>                 
        </FlatList>
    </>
    )
}

export default Products

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nodata:{
        color:'#000',
        fontSize: 16,
    }
})
