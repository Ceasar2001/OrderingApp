import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.background,
        tabBarInactiveTintColor: 'gainsboro',
        tabBarStyle: {
          backgroundColor: Colors.light.tint,
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>

      {/* using this line it will hide a button that will appear on the navbar */}
      <Tabs.Screen name="index" options={{ href: null }} />

      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          // to hide other headers 
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="cutlery" color={color} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
    </Tabs>
  );
}
