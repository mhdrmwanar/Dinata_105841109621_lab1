import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SocialLogin = () => {
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity>
        <Image source={require('../assets/google.png')} style={styles.socialIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    marginTop: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});

export default SocialLogin;
