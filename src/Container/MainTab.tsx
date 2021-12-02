import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Products from '../Component/HomeScreen/Products';
import Promotions from '../Component/HomeScreen/Promotions';
import Stores_Location from '../Component/HomeScreen/Stores_Location';
const MainTab = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
    <Tab.Navigator screenOptions={{
                                    tabBarLabelStyle: { fontSize: 16,alignSelf:'center',fontFamily:'Battambang-Bold'},
                                    swipeEnabled:false, 
                                    tabBarIndicatorStyle:{backgroundColor:'#000'},
                                    tabBarStyle:{backgroundColor:'#E5E5E5'}
                                    }} >
        <Tab.Screen name="ផលិតផល" component={Products}/>
        <Tab.Screen name="ប្រូម៉ូសិន" component={Promotions} />
        <Tab.Screen name="ទីតាំង​ ហាង" component={Stores_Location} />
    </Tab.Navigator>
    )
}
export default MainTab

const styles = StyleSheet.create({})
