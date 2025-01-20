import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';

import { colors } from '@/shared/theme/colors';

type TabItem = {
  name: string;
  title: string;
  icon: keyof typeof Feather.glyphMap;
};

export default function TabLayout() {
  const tabItems: TabItem[] = [
    {
      name: 'index',
      title: '홈',
      icon: 'home',
    },
    {
      name: 'search',
      title: '찾아보기',
      icon: 'search',
    },
    {
      name: 'community',
      title: '와글와글',
      icon: 'clipboard',
    },
    {
      name: 'my',
      title: '마이페이지',
      icon: 'user',
    },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.inactive,
      }}
    >
      {tabItems.map((tabItem) => (
        <Tabs.Screen
          key={tabItem.name}
          name={tabItem.name}
          options={{
            title: tabItem.title,
            tabBarIcon: ({ color }) => (
              <Feather color={color} name={tabItem.icon} size={20} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
