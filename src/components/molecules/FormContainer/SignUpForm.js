import React,{Component} from 'react';
import {View,StyleSheet, TouchableOpacity,Text} from 'react-native';

import { Input } from '_atoms';
import {Button} from '_atoms';



 export default SignUpForm = ({navigation}) =>
    <View>
        <View style={styles.loginHeader}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}  ><Text style={[styles.headerText,{color:'grey'}]}>Sign In  </Text></TouchableOpacity><Text style={styles.textBar}>|</Text>
            <TouchableOpacity ><Text style={styles.headerText} > Sign Up </Text></TouchableOpacity><Text style={styles.textBar}>|</Text> 
            <TouchableOpacity  onPress={()=>navigation.navigate('Guest')} ><Text style={[styles.headerText,{color:'grey'}]}> Guest</Text></TouchableOpacity> 
        </View>

        <View style={styles.loginInputs}>
            <Input iconName="user" iconColor="#f5a10e" placeholderText="First Name" />
            <Input iconName="user" iconColor="#f5a10e" placeholderText="Last Name"/>
            <Button navigation={navigation} iconName="sign-in" iconColor="#fff" buttonText="Next" />
        </View>
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
