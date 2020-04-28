import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';

 export default Button = ({iconName,iconColor,buttonText,bgColor}) =>

        <View style={{alignItems:'center'}}>
            <View  style={[styles.loginButton, {backgroundColor:bgColor? bgColor:'#f5a10e'}]}>
                <View style={styles.submitButton}>
                    <Text style={styles.loginText}>{buttonText}</Text>
                    <Icon 
                    name={iconName} 
                    color={iconColor}
                    size={26}
                    style={styles.signIcon} />
                </View>
            </View>
        </View>

const styles= StyleSheet.create( 
{
    loginButton: {
       
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        flex:1,
        flexDirection:'row',
        height:60
      },
      submitButton:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      },
      signIcon:{
       marginLeft:10
      },
      loginText: {
       
        fontFamily:'Poppins-Bold',
        padding: 10,
        fontSize: 20,
        color: '#ffff',
        textAlign: 'center',
        
      },
})
