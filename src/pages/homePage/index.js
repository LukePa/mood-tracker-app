import React from 'react';
import { View, Text, Button } from 'react-native';
import {setInitialUser} from '../../db';
import {updateUser} from '../../db';
import {getOrderedLogs} from '../../db';


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
            <Button
                title='WE LOVE TESTING SHIT'
                //onPress={async () => {console.log(await setInitialUser('billyboby', ['gym', 'diet']))}}
                //onPress={async () => {console.log(await updateUser({nickname: 'hehehe little goblin'}))}}
                onPress={async () => {await getOrderedLogs(5)}}
            />
        </View>
    );
}

export default HomePage