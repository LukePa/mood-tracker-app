import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/pages/loginPage';
import HomePage from './src/pages/homePage';
import CreateLogPage from './src/pages/createLogPage';
import ViewLogsPage from './src/pages/viewLogsPage';
import ViewMetricsPage from './src/pages/viewMetricsPage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Home'
            component={HomePage}
          />
          <Stack.Screen 
            name='ViewLogs'
            component={ViewLogsPage}
          />
          <Stack.Screen
            name='CreateLog'
            component={CreateLogPage}
          />
          <Stack.Screen
            name='ViewMetrics'
            component={ViewMetricsPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <LoginPage />
  }
}
