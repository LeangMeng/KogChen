import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Component/Srceen/Home';
import CustomDrawer from '../Component/Srceen/CustomDrawer';
const Drawer = createDrawerNavigator();
const MainDrawer = () => {
    return (
        <Drawer.Navigator
                    screenOptions={{
                    headerShown: false,
                    drawerStyle: {width: '75%'}}}
                    drawerContent={() => <CustomDrawer/>}>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    )
}

export default MainDrawer

const styles = StyleSheet.create({})
