import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Inputan = ({ placeholder, secureTextEntry }) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    width: 300,
    height: 50,
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Inputan;
