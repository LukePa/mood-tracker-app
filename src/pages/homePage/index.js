import React from 'react';
import { View, Text, Button } from 'react-native';


const HomePage = ({ navigation, signOut }) => {
    return (
        <View>
            <Text>Mood Tracker</Text>
            <Button 
                title='View Logs' 
                onPress={() => {
                    navigation.navigate('ViewLogs')
                }}
            />
            <Button 
                title='Make New Log' 
                onPress={() => {
                    navigation.navigate('CreateLog')
                }}
            />
            <Button 
                title='View Metrics' 
                onPress={() => {
                    navigation.navigate('ViewMetrics')
                }}
            />
            <Button 
                title='Sign Out'
                onPress={signOut}
            />
        </View>
    );
}

export default HomePage