import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const AboutScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Screen: About</Text>

    <TouchableHighlight  onPress={() => navigation.navigate('Login')}>
      <Text>Go to login</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default AboutScreen;