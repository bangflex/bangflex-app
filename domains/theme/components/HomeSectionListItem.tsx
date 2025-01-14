import { Pressable, StyleSheet, Text, View } from 'react-native';

import HomeThemeListItem from './HomeThemeListItem';

export default function HomeSectionListItem() {
  return (
    <View>
      <View style={styles.header}>
        <Text>강남</Text>
        <Pressable>
          <Text>더보기</Text>
        </Pressable>
      </View>
      <HomeThemeListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
