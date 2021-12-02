import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native';
import DetailPromotion from '../Component/HomeScreen/DetailPromotion';
import DetailLocation from '../Component/HomeScreen/DetailLocation';
import Search from '../Component/Srceen/Search';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainDrawer from './MainDrawer';
import Register from '../Form_Login/Register';
import Forgot_Password from '../Form_Login/Forgot_Password';
import Sigin from '../Form_Login/Sigin';
import Detail from '../Detailscreen/Detail';
const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef()
export function navigate(name: string, params: any = {}) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(
        CommonActions.navigate({
          name,
          params
        })
      );
    }
  }
export function goBack() {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(CommonActions.goBack())
    }
  }
  const Drawer = createDrawerNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false,presentation: 'card'}}>
            <Stack.Screen name="MainDrawer" component={MainDrawer} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="DetailPromotion" component={DetailPromotion} />
            <Stack.Screen name="DetailLocation" component={DetailLocation} />
            <Stack.Screen name="Sigin" component={Sigin} />
            <Stack.Screen name="Forgot_Password" component={Forgot_Password} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

export default MainStack

const styles = StyleSheet.create({})
