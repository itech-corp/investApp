import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Carousel } from '_molecules';

import {FormContainer } from '_molecules'
import investBrand from '../../assets/images/invest.png';
import {Button} from '_atoms';


const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
     <View style={{alignItems:'center',marginLeft:30,marginRight:30,justifyContent:"center",marginTop:100}}>
                <Text style={{color:'#fff',fontFamily:'Poppins-Regular',fontSize:20,alignItems:'stretch'}}>
                Good Job ! Welcome Mr John Doe. Please select
a plan to get started  
                </Text>
    </View>
         <View style={{flex:12,flexDirection:'row' ,marginTop:5,alignItems:'center'}}>
              <Carousel/> 
         </View>
          <View style={{flex:2,padding:0,marginTop:-30,marginBottom:20}}>
             <TouchableOpacity style={{alignItems:'flex-start',justifyContent:'center'}}><Button  iconName="sign-in" iconColor="#fff" buttonText="proceed"/></TouchableOpacity>
          </View>
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000c2c',
  },
  
});

export default HomeScreen;