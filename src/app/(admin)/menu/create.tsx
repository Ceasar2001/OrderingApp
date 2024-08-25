import { View, Text, StyleSheet, TextInput} from 'react-native'
import React, { useState } from 'react'
import Button from '@/src/components/Button';

const CreateProductScreen = () => {

const [name, setName] = useState('');
const [price, setPrice] = useState('');

const [errors, setErrors] = useState('');

const resetFields = () => {
    setName('');
    setPrice('');
};

const validateInput = () => {
    if(!name){
        setErrors('Name is required');
        return false;
    }
    
    if(!price){
        setErrors('Price is required');
        return false;
    }
    if (isNaN(parseFloat(price))){
        setErrors('Price must be a number');
        return false;
    }
    return true;
};

const onCreate = () => {
    if(!validateInput()){
        return;
    }

    console.warn("creating product", name);

    resetFields();
    //save on the database
};

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Product Name</Text>
      <TextInput 
            value={name} 
            onChangeText={setName} 
            placeholder='name' 
            style={styles.input}
        />
      
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
            value={price}
            onChangeText={setPrice} 
            placeholder='10.9' 
            style={styles.input} 
            keyboardType='numeric'/>

        <Text style={{ color: 'red '}}>{errors}</Text>

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