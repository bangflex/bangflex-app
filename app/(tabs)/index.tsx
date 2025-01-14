import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeSectionListItem from '@/domains/theme/components/HomeSectionListItem';
import AppButton from '@/shared/components/AppButton';

type SortBy = 'area' | 'genre';

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

      <ScrollView>
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
  topButtonContainer: {
    flexDirection: 'row',
    padding: 4,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
});
