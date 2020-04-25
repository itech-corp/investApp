import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';

 export default Button = ({iconName,iconColor,buttonText,navigation}) =>

        <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.loginButton}>
                <View style={styles.submitButton}>
                    <Text style={styles.loginText}>{buttonText}</Text>
                    <Icon 
                    name={iconName} 
                    color={iconColor}
                    size={26}
                    style={styles.signIcon} />
                </View>
            </TouchableOpacity>
        </View>

const styles= StyleSheet.create( 
{
    loginButton: {
        backgroundColor: '#f5a10e',
        borderRadius: 5,
        marginTop: 40,
        marginBottom: 20,
        marginLeft: 80,
        marginRight: 80,
        width:'86%',
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
