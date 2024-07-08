import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Inputan from './component/Inputan';
import SignUpButton from './component/SignUpButton';
import SocialLogin from './component/SocialLogin';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      
      <Inputan placeholder="Name" />
      <Inputan placeholder="Email" />
      <Inputan placeholder="Password" secureTextEntry={true} />
      
      <SignUpButton />

      <Text style={styles.existingAccountText}>
        Already have an account? <Text style={styles.loginText}>Log in</Text>
      </Text>
      
      <Text style={styles.orText}>Or sign up with social account</Text>
      
      <SocialLogin />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  existingAccountText: {
    fontSize: 14,
    marginVertical: 10,
  },
  loginText: {
    color: 'red',
  },
  orText: {
    fontSize: 14,
    marginVertical: 10,
    marginTop: 200,
  },
});

export default App;
