import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {SignUpForm } from '_molecules'
import investBrand from '../../assets/images/invest.png';
import  Icon  from 'react-native-vector-icons/FontAwesome';


const SucessScreen = ({navigation}) => (
  <KeyboardAwareScrollView
  style={styles.container}
>
    <View style={styles.imageContainer}>
      <Image source={investBrand} style={styles.image}  />
    </View>
   <View style={{alignItems:'center',justifyContent:'center',alignContent:'center',marginTop:200}}>
      <Text style={{color:'white',fontSize:30}} ><Icon name="check-circle" size={35} color="#10ae06"  /> Good Job !</Text>
   </View>
   <View style={{alignItems:'center',marginLeft:30,marginRight:30,justifyContent:"center",marginTop:100}}>
                <Text style={{color:'#fff',fontFamily:'Poppins-Regular',fontSize:20,alignItems:'stretch'}}>
                Your account was created successfully. An 
                Email was sent to<Text style={{color:'#06b0b6',fontFamily:'Poppins-Regular'}}> yungong@briluce.org </Text>  for
                confirmation. Please click on the attached 
                link to activate your account.  
                </Text>
    </View>
    <TouchableOpacity style={{marginTop:120}} onPress={()=>navigation.navigate('Login')} ><Button  iconName="sign-in" iconColor="#fff" buttonText="Login Now" bgColor='#10ae06' /></TouchableOpacity>
    
</KeyboardAwareScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000c2c',
  },
  imageContainer: {
    alignItems:'center',
  },
  image:{
    resizeMode:'center',
    position:'absolute',
    top:40,
    opacity:.2,
    width:150
  },
});

export default SucessScreen;