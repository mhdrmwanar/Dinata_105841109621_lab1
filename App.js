import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inputan from './component/Inputan/Inputan';
import SignUpButton from './component/SignUp/SignUpButton';
import SocialLogin from './component/Social/SocialLogin';

const Stack = createNativeStackNavigator();

const SignUp = ({ navigation }) => {
  const handleSignUp = () => {
    // Logika untuk signup di sini
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>

      <Inputan placeholder="Name" />
      <Inputan placeholder="Email" />
      <Inputan placeholder="Password" secureTextEntry={true} />

      <SignUpButton onPress={handleSignUp} />

      <Text style={styles.existingAccountText}>
        Already have an account?{' '}
        <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>
          Log in
        </Text>
      </Text>

      <Text style={styles.orText}>Or sign up with social account</Text>

      <SocialLogin />
    </View>
  );
};

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Inputan placeholder="Email" />
      <Inputan placeholder="Password" secureTextEntry={true} />
      
      
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Inputan placeholder="Email" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SEND</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
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
  forgotPasswordText: {
    color: 'red',
    marginTop: 30,
    fontSize: 14,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
