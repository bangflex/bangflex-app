import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  level: number;
};

export default function ThemeLevelChip({ level }: Props) {
  return (
    <View style={styles.container}>
      <Text>난이도:</Text>
      <View style={styles.icons}>
        {Array.from({ length: 5 }, (_, i) => i + 1) // [1, 2, 3, 4, 5]
          .map((val) => (
            <FontAwesome5
              color={val <= level ? 'black' : '#D1D5DB'}
              key={val}
              name="key"
              size={12}
            />
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  icons: {
    flexDirection: 'row',
    gap: 2,
  },
});
