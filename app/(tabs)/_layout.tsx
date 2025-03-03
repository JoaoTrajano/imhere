import { Tabs } from 'expo-router';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={28}
              name="home-outline"
              color={color}
              style={[{ marginBottom: -3 }]}
            />
          ),
        }}
      />
    </Tabs>
  );
}
