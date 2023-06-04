import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput, Button, Linking } from 'react-native'
import React, { useState } from 'react'

const Test = () => {
  const [name, setName] = useState('Amna')
  const [lName, setLName] = useState('Arooj')

  const showName = () => {
    Alert.alert(`My First Name is ${name} and My Last Name is ${lName}`)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{name}</Text>
      <Text style={styles.titleText}>{lName}</Text>
      {/* <TouchableOpacity onPress={() => { setName('Ahsan'), setLName('Ali') }}> */}
      {/* <TouchableOpacity onPress={() => { Alert.alert(name, lName) }}> */}
      <View style={styles.img}>
        <TouchableOpacity onPress={() => { console.log(name, lName) }}>
          <Image source={require('../restaurant/src/Assets/Images/back.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.textInput}
          value={lName}
          onChangeText={text => setLName(text)}
        />
      </View>
      <View style={styles.btn}>
        <Button color={'#22EF2A'} title='Login' onPress={() => showName()} />
      </View>
      <View>
        <TouchableOpacity onPress={() => { Linking.openURL('https://www.google.com') }}>
          <Text>{'Google'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

export default Test

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F56B6B'
  },
  titleText: {
    fontSize: 35,
    color: '#000000',
    textAlign: 'center',
    marginTop: '10%',
  },
  img: {
    alignItems: 'center'
  },
  input: {
    width: '90%',
    alignSelf: 'center'
  },
  textInput: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 5
  },
  btn: {
    width: '50%',
    alignSelf: 'center',
    marginTop: '10%'
  }
})