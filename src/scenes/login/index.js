import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {FormContainer } from '_molecules'
import investBrand from '../../assets/images/invest.png';


const LoginScreen = ({navigation}) => (
  <KeyboardAwareScrollView
        style={styles.container}
      >
          <View style={styles.imageContainer}>
            <Image source={investBrand} style={styles.image}  />
          </View>
          <FormContainer navigation={navigation} />
          
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

export default LoginScreen;