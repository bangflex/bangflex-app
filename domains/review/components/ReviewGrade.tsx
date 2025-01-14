import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/shared/theme/colors';

type Props = {
  grade: number;
};

export default function ReviewGrade({ grade }: Props) {
  return (
    <View style={styles.container}>
      <AntDesign color={colors.reviewTint} name="star" size={16} />
      <Text style={styles.grade}>{grade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
  },
  grade: {
    color: colors.reviewTint,
    fontSize: 14,
  },
});
