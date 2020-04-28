import React from 'react';
import {TextInput,View,StyleSheet} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';

 export default Input = ({iconName,iconColor,placeholderText}) =>

    <View style={styles.inputsContainer}>
        <Icon 
        name={iconName} 
        color={iconColor}
        size={20}
        style={styles.inputIcon} />
        <TextInput 
        placeholderTextColor="#818181"
        placeholder={placeholderText}
        style={styles.input}
        />
    </View>

const styles= StyleSheet.create( 
{inputsContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#27314a',
    margin:10,
    marginLeft:30,
    marginRight:30
  },
  input: {
    fontFamily:'Poppins-Regular',
    flex:1,
    height:58,
    padding:10
    
  },
  inputIcon:{
      padding:17,
      paddingRight:23,
      marginLeft:8,
      borderRightWidth:0.5,
      borderColor:'white'
  },})
