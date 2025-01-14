import { StyleSheet, Text, View } from 'react-native';

type Props = {
  genreName: string;
};

export default function GenreChip({ genreName }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.genreName}>{genreName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  genreName: {
    fontSize: 12,
  },
});
