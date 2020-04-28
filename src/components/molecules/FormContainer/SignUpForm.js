import React,{Component} from 'react';
import {View,StyleSheet, TouchableOpacity,Text} from 'react-native';

import { Input } from '_atoms';
import {Button} from '_atoms';



class SignUpForm extends Component{
    state ={
        formData:<View style={styles.loginInputs}>
        <Input iconName="user" iconColor="#f5a10e" placeholderText="First Name" />
        <Input iconName="user" iconColor="#f5a10e" placeholderText="Last Name"/>
        <TouchableOpacity onPress={()=>this.nextForm(1)} ><Button  iconName="sign-in" iconColor="#fff" buttonText="Next" /></TouchableOpacity>
    </View>
    }
    
    nextForm = (flow)=>{
        let formData ='';
        switch(flow) {
            case 1:
                formData = <View style={styles.loginInputs}>
                <Input iconName="user" iconColor="#f5a10e" placeholderText="Username" />
                <Input iconName="envelope" iconColor="#f5a10e" placeholderText="Email"/>
                <TouchableOpacity onPress={()=>this.nextForm(2)} ><Button  iconName="sign-in" iconColor="#fff" buttonText="Next" /></TouchableOpacity>
                </View>
                this.setState({formData})
                break;
            case 2:
                formData = <View style={styles.loginInputs}>
                <Input iconName="flag" iconColor="#f5a10e" placeholderText="Country" />
                <Input iconName="phone" iconColor="#f5a10e" placeholderText="Tel"/>
                <TouchableOpacity onPress={()=>this.nextForm(3)} ><Button  iconName="sign-in" iconColor="#fff" buttonText="Next" /></TouchableOpacity>
                </View>
                this.setState({formData})
                break;
            case 3:
                formData = <View style={styles.loginInputs}>
                <Input iconName="lock" iconColor="#f5a10e" placeholderText="Password" />
                <Input iconName="lock" iconColor="#f5a10e" placeholderText="Repeat Password"/>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Success")} ><Button  iconName="sign-in" iconColor="#fff" buttonText="Finish" /></TouchableOpacity>
                </View>
                this.setState({formData})
                break;                
            default:
                break;
        }
    }
    render(){
        
        return(
    <View>
        <View style={styles.loginHeader}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}  ><Text style={[styles.headerText,{color:'grey'}]}>Sign In  </Text></TouchableOpacity><Text style={styles.textBar}>|</Text>
            <TouchableOpacity ><Text style={styles.headerText} > Sign Up </Text></TouchableOpacity><Text style={styles.textBar}>|</Text> 
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Guest')} ><Text style={[styles.headerText,{color:'grey'}]}> Guest</Text></TouchableOpacity> 
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

export default  SignUpForm