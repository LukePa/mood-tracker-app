import React, {useState} from 'react';
import { View, Button, StatusBar, TextInput, Text } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import getFirebaseAuth from '../../firebase/getFirebaseAuth';

const auth = getFirebaseAuth();

const LoginPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
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
                title='Sign In' 
                onPress={() => {login(email, password)}}
            />
            <Button
                title='No Account? Click here to create one'
                onPress={() => navigation.navigate('CreateAccount')}
            />
        </View>
    );
}

export default LoginPage;