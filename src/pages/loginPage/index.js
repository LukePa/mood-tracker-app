import React from 'react';
import { View, Button, SafeAreaView, StatusBar } from 'react-native'

const LoginPage = () => {
    return (
        <View>
            <StatusBar />
            <Button 
                title='Sign In With Google' 
            />
        </View>
    );
}

export default LoginPage;