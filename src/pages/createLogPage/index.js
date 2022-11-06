import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import { getUserOverview, createLog } from '../../db'

// Look here https://github.com/miblanchard/react-native-slider for slider documentation

const CreateLogPage = ({navigation}) => {
    const [customMetrics, setCustomMetrics] = useState({});
    const [briefDescription, setBriefDescription] = useState('');
    const [overallMood, setOverallMood] = useState(50);
    const [longDescription, setLongDescription] = useState(''); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAndSetCustomMetrics = async () => {
        try {
            setLoading(true);
            setError(null);
            const userOverview = await getUserOverview();
            const metricValues = {}
            userOverview.trackedMetrics.forEach(metric => { 
                metricValues[metric.toUpperCase()] = 50;
            });
            setCustomMetrics(metricValues);
            setLoading(false);
        } catch(e) {
            console.log(e.message);
            setError(e);
        }
    }

    const updateCustomMetricValue = (metric, value) => {
        customMetrics[metric.toUpperCase()] = value;
        setCustomMetrics({...customMetrics})
    }

    const MetricSlider = ({metric}) => {
        return (
            <View>
                <Text>{metric.item}</Text>
                <Slider 
                    minimumValue={1}
                    maximumValue={100}
                    step={1}
                    value={customMetrics[metric.item]}
                    onSlidingComplete={value => updateCustomMetricValue(metric.item, value)}
                />
            </View>
        )
    } 

    const submitLog = async () => {
        try{
            await createLog(briefDescription, overallMood, customMetrics, longDescription);
            navigation.navigate('Home')
        } catch(e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getAndSetCustomMetrics();
    }, []);

    if (error) {
        return (
            <View>
                <Text>{error.message}</Text>
            </View>
        )
    } else if (loading) {
        return(
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
    return (
        <View>
            <Text>Create Log Page!</Text>
            <Text>Brief Description</Text>
            <TextInput 
                value={briefDescription}
                onChangeText={newDescription => setBriefDescription(newDescription)}
            />
            <Text>OVERALL MOOD</Text>
            <Slider 
                    minimumValue={1}
                    maximumValue={100}
                    step={1}
                    value={overallMood}
                    onSlidingComplete={value => setOverallMood(value)}
                />
            <FlatList
                data={Object.keys(customMetrics)}
                renderItem={(metric) => <MetricSlider metric={metric} />}
            />
            <Text>Extended Description</Text>
            <TextInput 
                value={longDescription}
                onChangeText={newDescription => setLongDescription(newDescription)}
            />
            <Button 
                title='Create New Log'
                onPress={submitLog}
            />
        </View>
    );
}

export default CreateLogPage