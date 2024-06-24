import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ButtonComponent from  './component/buttons/button';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyApp</Text>
      <Image
        source={require('./assets/WhatsApp23.png')}
        style={styles.logo}
      />
      <Text style={styles.subtitle}>
      "Kami percaya pada potensi Anda untuk berkembang, Jangan ragu untuk bertanya dan belajar hal baru, Kami selalu siap membantu Anda mencapai kesuksesan."
      </Text>
      <View style={styles.buttonContainer}>
        <ButtonComponent title="Sign In" color="blue"/>
        <ButtonComponent title="Sign Up" color="orange"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 10, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
