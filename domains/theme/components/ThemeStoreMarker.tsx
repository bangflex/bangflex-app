import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/shared/theme/colors';

type Props = {
  storeName: string;
};

export default function ThemeStoreMarker({ storeName }: Props) {
  return (
    <View style={styles.container}>
      <FontAwesome5 color={colors.textGray} name="map-marker-alt" size={12} />
      <Text style={styles.storeName}>{storeName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  storeName: {
    color: colors.textGray,
    fontSize: 14,
  },
});
