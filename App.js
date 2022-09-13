/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



import { useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App =()=>{
  const {Item,setItems}=useState([
  {name:'Item1'},
  {name:'Item2'},
  {name:'Item3'},
  {name:'Item4'},
  {name:'Item5'},
  {name:'Item6'},
  {name:'Item7'},
  {name:'Item8'},
  {name:'Item9'},
  {name:'Item10'},

])
const Items = ({item})=>{
  return(
    <View>
      <Text>
        {item.name}
      </Text>
    </View>
  );
};

return(
  <SafeAreaView>
    <View style={{flex:1,alignItems:'center',backgroundColor:'red'}}>
      <Text>
        MULTIPLE ITEMS
      </Text>
    </View>
  </SafeAreaView>
)
}
export default App;
