import { View, Text, StyleSheet, TextInput} from 'react-native'
import React, { useState } from 'react'
import Button from '@/src/components/Button';

const CreateProductScreen = () => {

const [name, setName] = useState('');
const [price, setPrice] = useState('');

const onCreate = () => {
    console.warn("creating product");
};

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Product Name</Text>
      <TextInput placeholder='name' style={styles.input}/>
      
      <Text style={styles.label}>Price ($)</Text>
      <TextInput placeholder='10.9' style={styles.input} keyboardType='numeric'/>


      <Button onPress={onCreate} text='Create' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },

    input:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
    },

    label:{
        color: 'gray',
        fontSize: 16,
    },
});


export default CreateProductScreen