import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.button, { backgroundColor: 'red' }]}>
        <Text style={styles.buttonText}>Login</Text>
      </View>
      <View style={[styles.button, { backgroundColor: 'blue' }]}>
        <Text style={styles.buttonText}>Register</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    backgroundColor: 'white',
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
