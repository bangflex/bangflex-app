import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeSectionListItem from '@/domains/theme/components/HomeSectionListItem';
import AppButton from '@/shared/components/AppButton';

type SortBy = 'area' | 'genre';

// TODO: status bar color -> 투명하게 두고 background color를 설정하는 방법도 있음.
// TODO: background color
// TODO: 마지막 section과 bottom tab 간격

export default function HomeScreen() {
  const [sortBy, setSortBy] = useState<SortBy>('area');

  const onPressAreaBy = () => {
    setSortBy('area');
  };
  const onPressGenreBy = () => {
    setSortBy('genre');
  };

  return (
    <SafeAreaView>
      <View style={styles.top}>
        <View style={styles.header}>
          <Pressable style={styles.notificationButton}>
            <Ionicons color="black" name="notifications-outline" size={20} />
          </Pressable>
        </View>
        <View style={styles.topButtonContainer}>
          <AppButton
            buttonTitle="지역별"
            colorVariant={sortBy === 'area' ? 'primary' : 'inactive'}
            shapeVariant={sortBy === 'area' ? 'filled' : 'text'}
            onPress={onPressAreaBy}
          />
          <AppButton
            buttonTitle="장르별"
            colorVariant={sortBy === 'area' ? 'inactive' : 'primary'}
            shapeVariant={sortBy === 'area' ? 'text' : 'filled'}
            onPress={onPressGenreBy}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.sectionList}>
        <HomeSectionListItem />
        <HomeSectionListItem />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  notificationButton: {},
  topButtonContainer: {
    flexDirection: 'row',
    padding: 4,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
  sectionList: {
    gap: 48,
    paddingVertical: 32,
  },
});
