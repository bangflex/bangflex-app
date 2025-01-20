import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import HomeThemeListItem from './HomeThemeListItem';

export default function HomeSectionListItem() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>강남</Text>
        <Pressable style={styles.moreButton}>
          <Text style={styles.moreButtonText}>더보기</Text>
          <MaterialIcons color="black" name="navigate-next" size={14} />
        </Pressable>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={styles.themeList}
        showsHorizontalScrollIndicator={false}
      >
        <HomeThemeListItem />
        <HomeThemeListItem />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  moreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreButtonText: {
    fontSize: 14,
  },
  themeList: {
    gap: 16,
    paddingHorizontal: 16,
  },
});
