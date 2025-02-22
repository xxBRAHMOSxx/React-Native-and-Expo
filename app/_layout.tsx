import { Stack } from "expo-router";

export default function RootLayout() {
  return(
   <Stack initialRouteName={"(tab)"}>
    <Stack.Screen name="(tab)"  />
    <Stack.Screen name="(drawer)" options={{headerShown:false}}/>
    <Stack.Screen name="about/index" />
    {/**/}
  </Stack> 
)}
