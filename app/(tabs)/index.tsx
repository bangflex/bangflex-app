import { ScrollView, Text, View } from 'react-native';

import HomeSectionListItem from '@/domains/theme/components/HomeSectionListItem';

export default function HomeScreen() {
  return (
    <View>
      <View></View>
      <ScrollView>
        <HomeSectionListItem />
      </ScrollView>
    </View>
  );
}
