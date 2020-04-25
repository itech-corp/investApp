import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {FormContainer } from '_molecules'
import investBrand from '../../assets/images/invest.png';


const HomeScreen = ({navigation}) => (
  <KeyboardAwareScrollView
        style={styles.container}
      >
          <View style={styles.imageContainer}>
            <Image source={investBrand} style={styles.image}  />
          </View>
         <View style={{alignItems:'center',justifyContent:'center',alignContent:'center',marginTop:200}}>
           <Text style={{color:'white',fontSize:30}} >Here is Home</Text>
         </View>
          
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

export default HomeScreen;