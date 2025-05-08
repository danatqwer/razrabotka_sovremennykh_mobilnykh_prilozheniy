import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs initialRouteName="screens/characters">
      <Tabs.Screen
        name="screens/characters"
        options={{
          title: 'Characters',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-sharp' : 'person-outline'} color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="screens/locations"
        options={{
          title: 'Locations',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'location-sharp' : 'location-outline'} color={color} size={24} />
          )
        }}

      />
      <Tabs.Screen
        name="screens/episodes"
        options={{
          title: 'Episodes',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'tv-sharp' : 'tv-outline'} color={color} size={24} />
          )
        }}
      />
    </Tabs>
  );
}
