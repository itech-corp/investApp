import React,{Component} from 'react';
import {View,StyleSheet, TouchableOpacity,Text} from 'react-native';

import { Input } from '_atoms';
import {Button} from '_atoms';



 export default class GuestUpForm extends Component {

      state={
        formData:<View style={styles.loginInputs}>
        <Input iconName="user" iconColor="#f5a10e" placeholderText="Full Name" />
        <Input iconName="envelope" iconColor="#f5a10e" placeholderText="Email Address"/>
        <TouchableOpacity onPress={()=>this.nextForm(1)} ><Button  iconName="sign-in" iconColor="#fff" buttonText="Next" /></TouchableOpacity>
      </View>
      }

      nextForm = (flow)=>{
        let 
                formData = <View style={styles.loginInputs}>
                <Input iconName="user" iconColor="#f5a10e" placeholderText="Username" />
                <Input iconName="envelope" iconColor="#f5a10e" placeholderText="Email"/>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} ><Button  iconName="sign-in" iconColor="#fff" buttonText="Proceed" /></TouchableOpacity>
                </View>
                this.setState({formData})
       
    }
   render(){
    return(
          <View>
        <View style={styles.loginHeader}>
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Login')} ><Text style={[styles.headerText,{color:'grey'}]}>Sign In  </Text></TouchableOpacity><Text style={styles.textBar}>|</Text>
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('SignUp')}><Text style={[styles.headerText,{color:'grey'}]} > Sign Up </Text></TouchableOpacity><Text style={styles.textBar}>|</Text> 
            <TouchableOpacity><Text style={styles.headerText}> Guest</Text></TouchableOpacity> 
        </View>
        {this.state.formData}
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
