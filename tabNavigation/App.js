import Favourites from './src/Pages/Favourites';
import Products from './src/Pages/Products';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Member from './src/Pages/Member/Member';
import MemberDetail from './src/Pages/Member/MemberDetail';
import MemberUpdate from './src/Pages/Member/MemberUpdate';
import Profile from './src/Pages/Profile/Profile';
import ProfileEdit from './src/Pages/Profile/PorfileEdit';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab=createBottomTabNavigator();
const Stack= createNativeStackNavigator();

const MemberStack=()=>{
  return(
  <Stack.Navigator>
    <Stack.Screen name="memberscreen" component={Member}></Stack.Screen>
    <Stack.Screen name="memberDetailscreen" component={MemberDetail}></Stack.Screen>
    <Stack.Screen name="memberUpdatescreen" component={MemberUpdate}></Stack.Screen>
  </Stack.Navigator>
  )
}
const ProfileStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile}></Stack.Screen>
      <Stack.Screen name='ProfileEdit' component={ProfileEdit}></Stack.Screen>
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer   >
      <Tab.Navigator>
        <Tab.Screen name='Member' component={MemberStack}></Tab.Screen>
        <Tab.Screen name='Profile' component={ProfileStack}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
