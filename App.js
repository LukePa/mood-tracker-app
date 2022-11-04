import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { signOut, onAuthStateChanged } from "firebase/auth";
import LoginPage from './src/pages/loginPage';
import CreateAccountPage from './src/pages/createAccountPage';
import HomePage from './src/pages/homePage';
import CreateLogPage from './src/pages/createLogPage';
import ViewLogsPage from './src/pages/viewLogsPage';
import ViewMetricsPage from './src/pages/viewMetricsPage';
import getFirebaseAuth from './src/firebase/getFirebaseAuth';

const Stack = createNativeStackNavigator();
const auth = getFirebaseAuth()

export default function App() {
  const [user, setUser] = useState(auth.currentUser)

  const signOutAccount = () => {
    signOut(auth);
  }

  onAuthStateChanged(auth, user => {
    setUser(user)
  })

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home'>
            {(props) => <HomePage {...props} signOut={signOutAccount} />}
          </Stack.Screen>
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
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login'>
            {(props) => <LoginPage {...props} />}
          </Stack.Screen>
          <Stack.Screen name='CreateAccount'>
            {(props) => <CreateAccountPage {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
