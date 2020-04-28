import React,{Component} from 'react';
import {View,StyleSheet, TouchableOpacity,Text} from 'react-native';

import { Input } from '_atoms';
import {Button} from '_atoms';


 export default SuccessPage = ({navigation})=>
    <View>
        <Text style={{fontSize:32,color:'white'}}>Success hero</Text>
    </View>
 
 

const styles= StyleSheet.create({
    loginHeader: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin: 20,
        marginTop: 240,
        padding: 20,
        marginBottom:0,
        paddingBottom:0
      },
      textBar:{
        fontSize:30,
        
        color:'#f5a10eff'
      },
      headerText: {
        fontFamily:'Poppins-Bold',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
      },
      loginInputs: {
        marginTop: 25
      },


})
