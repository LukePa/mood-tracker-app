import React, {useState} from 'react';
import { View, Button, StatusBar, TextInput, Text } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import getFirebaseAuth from '../../firebase/getFirebaseAuth';

const auth = getFirebaseAuth();

const CreateAccountPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createAccount = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .catch((error) => {
            console.log(error);
          });
      }

    return (
        <View>
            <StatusBar />
            <Text>Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
            />
            <Text>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
            />
            <Button 
                title='Create Account' 
                onPress={() => {createAccount(email, password)}}
            />
            <Button
                title='Already have an account? Click here to log in'
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}

export default CreateAccountPage;