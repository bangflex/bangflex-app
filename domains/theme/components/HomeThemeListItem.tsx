import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import GenreChip from '@/domains/genre/components/GenreChip';
import ReviewGrade from '@/domains/review/components/ReviewGrade';
import { colors } from '@/shared/theme/colors';

import ThemeLevelChip from './ThemeLevelChip';
import ThemeStoreMarker from './ThemeStoreMarker';

export default function HomeThemeListItem() {
  return (
    <View style={styles.container}>
      <Image
        contentFit="cover"
        source="https://picsum.photos/seed/696/3000/2000"
        style={styles.themeImage}
      />
      <View style={styles.bottom}>
        <View style={styles.topOfBottom}>
          <GenreChip genreName="SF" />
          <ReviewGrade grade={4.7} />
          <Text style={styles.reviewCount}>(128개)</Text>
        </View>
        <Text style={styles.title}>우주정거장 SOS</Text>
        <Text style={styles.description}>
          우주정거장에서 펼쳐지는 긴박한 탈출 미션
        </Text>
        <ThemeLevelChip level={4} />
        <ThemeStoreMarker storeName="스페이스 이스케이스" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    width: 280,
  },
  themeImage: {
    width: '100%',
    height: 160,
  },
  bottom: {
    padding: 16,
    gap: 8,
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
  topOfBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  reviewCount: {
    color: colors.textGray,
  },
  title: {
    fontWeight: 700,
    fontSize: 14,
  },
  description: {
    color: colors.textGray,
  },
});
