import { useMemo } from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { colors } from '../theme/colors';

type AppButtonShapeVariant = 'filled' | 'text';
type AppButtonColorVariant = 'primary' | 'inactive';

type Props = {
  buttonTitle: string;
  onPress: () => void;
  shapeVariant?: AppButtonShapeVariant;
  colorVariant?: AppButtonColorVariant;
};

export default function AppButton({
  buttonTitle,
  onPress,
  shapeVariant = 'filled',
  colorVariant = 'primary',
}: Props) {
  const buttonStyles = useMemo(() => {
    const containerStyles: StyleProp<ViewStyle> = [styles.container];
    const buttonTextStyles: StyleProp<TextStyle> = [styles.buttonText];

    if (shapeVariant === 'filled') {
      if (colorVariant === 'primary') {
        containerStyles.push(styles.primaryBg);
        buttonTextStyles.push(styles.buttonTextWhite);
      }
    } else if (shapeVariant === 'text') {
      containerStyles.push(styles.textButtonBg);

      if (colorVariant === 'inactive') {
        buttonTextStyles.push(styles.buttonTextInactive);
      }
    }

    return [containerStyles, buttonTextStyles];
  }, [colorVariant, shapeVariant]);

  return (
    <Pressable
      style={buttonStyles[0] as StyleProp<ViewStyle>}
      onPress={onPress}
    >
      <Text style={buttonStyles[1] as StyleProp<TextStyle>}>{buttonTitle}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
  },
  primaryBg: {
    backgroundColor: colors.primary,
  },
  textButtonBg: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 500,
  },
  buttonTextWhite: {
    color: 'white',
  },
  buttonTextInactive: {
    color: '#4B5563',
  },
});
