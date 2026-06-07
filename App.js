import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from './theme';
import { RadioProvider } from './components/RadioPlayer';
import HomeScreen from './screens/HomeScreen';
import WhatsOnScreen from './screens/WhatsOnScreen';
import RadioScreen from './screens/RadioScreen';
import SupportScreen from './screens/SupportScreen';
import MoreScreen from './screens/MoreScreen';

const Tab = createBottomTabNavigator();

const ICONS = {
  Home: 'home', "Whats On": 'calendar', Radio: 'radio',
  Support: 'heart', More: 'ellipsis-horizontal',
};

export default function App() {
  return (
    <SafeAreaProvider>
      <RadioProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarActiveTintColor: theme.colors.primary,
              tabBarInactiveTintColor: theme.colors.textMuted,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={ICONS[route.name]} size={size} color={color} />
              ),
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Whats On" component={WhatsOnScreen} />
            <Tab.Screen name="Radio" component={RadioScreen} />
            <Tab.Screen name="Support" component={SupportScreen} />
            <Tab.Screen name="More" component={MoreScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </RadioProvider>
    </SafeAreaProvider>
  );
}
