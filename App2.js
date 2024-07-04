import { Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const App = () => {
  const Inputan = ({ nama, color })=>{
    return(
      <TextInput
      placeholder={`Masukan ${nama}`}
      style ={{
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 10,
        width: 300,
        height: 50,
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'white',
        color:color,
      }}
      />
    )
  }
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Inputan nama= "Email" color = "blue"/>
      <Inputan nama= "Username" color = "blue"/>
      <Inputan nama= "Password" color = "blue"/>
    </View>
  )
}
export default App;