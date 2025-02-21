import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import React from 'react'

const DrawerRoot = () => {
  return (
    <GestureHandlerRootView  >
        <Drawer>
            <Drawer.Screen name="index" options={{title:"Home"}} />
            <Drawer.Screen name="contact" />
        </Drawer>
    </GestureHandlerRootView>
  )
}

export default DrawerRoot