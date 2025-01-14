import { ScrollView } from 'react-native';

import HomeThemeListItem from './HomeThemeListItem';

export default function HomeThemeList() {
  return (
    <ScrollView>
      <HomeThemeListItem />
      <HomeThemeListItem />
      <HomeThemeListItem />
      <HomeThemeListItem />
      <HomeThemeListItem />
    </ScrollView>
  );
}
