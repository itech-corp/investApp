import React,{Component} from 'react';
import {View,StyleSheet, TouchableOpacity,Text} from 'react-native';

import { Input } from '_atoms';
import {Button} from '_atoms';


 export default class FormContainer extends Component { 
        

    render(){
        return(
    <View>
        <View style={styles.loginHeader}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} style={[styles.headerText,{color:'grey'}]} ><Text style={[styles.headerText]}>Sign In  </Text></TouchableOpacity><Text style={styles.textBar}>|</Text>
            <TouchableOpacity ><Text > Sign Up </Text></TouchableOpacity><Text style={styles.textBar}>|</Text> 
            <TouchableOpacity><Text style={[styles.headerText,{color:'grey'}]}> Guest</Text></TouchableOpacity> 
        </View>

        <View style={styles.loginInputs}>
            <Input iconName="user" iconColor="#f5a10e" placeholderText="Email, username, Limo ID or Code" />
            <Input iconName="lock" iconColor="#f5a10e" placeholderText="Password"/>
            <View style={{alignItems:'flex-end',width:'90%'}}>
                <Text style={{color:'#fff',fontFamily:'Poppins-Regular'}}>
                    Forgot your Password ? <Text style={{color:'orange',fontFamily:'Poppins-Regular'}}> reset here</Text> 
                </Text>
            </View>
            <Button navigation={this.props.navigation} iconName="sign-in" iconColor="#fff" buttonText="Sign In" />
        </View>
    </View>
 
        )
    }
}

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
