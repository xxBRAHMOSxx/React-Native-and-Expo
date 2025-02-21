import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const TabRoot = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{title:"home",tabBarIcon:({color})=>(
          <FontAwesome name="home" size={24} color={color} />
        )}} />
        <Tabs.Screen name="about"  />
        <Tabs.Screen name="profile"  />
    </Tabs>
  )
}

export default TabRoot