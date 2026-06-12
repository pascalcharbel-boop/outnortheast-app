import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from './theme';
import { RadioProvider } from './components/RadioPlayer';
import HomeScreen from './screens/HomeScreen';
import SummerOfPrideScreen from './screens/SummerOfPrideScreen';
import WhatsOnScreen from './screens/WhatsOnScreen';
import RadioScreen from './screens/RadioScreen';
import SupportScreen from './screens/SupportScreen';
import MoreScreen from './screens/MoreScreen';

const Tab = createBottomTabNavigator();

const ICONS = {
  Home: 'home', "Whats On": 'calendar', Pride: 'sunny', Radio: 'radio',
  Support: 'heart', More: 'menu',
};

export default function App() {
  return (
    <SafeAreaProvider>
      <RadioProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: {
                backgroundColor: theme.colors.primaryDark,
                borderTopColor: theme.colors.primaryDark,
              },
              tabBarActiveTintColor: theme.colors.accent,
              tabBarInactiveTintColor: '#A79FBF',
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                  name={focused ? ICONS[route.name] : `${ICONS[route.name]}-outline`}
                  size={size}
                  color={color}
                />
              ),
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Whats On" component={WhatsOnScreen} />
            <Tab.Screen name="Pride" component={SummerOfPrideScreen}
              options={{ tabBarLabel: 'Summer of Pride' }} />
            <Tab.Screen name="Radio" component={RadioScreen} />
            <Tab.Screen name="Support" component={SupportScreen} />
            <Tab.Screen name="More" component={MoreScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </RadioProvider>
    </SafeAreaProvider>
  );
}
