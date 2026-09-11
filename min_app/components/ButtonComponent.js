import { Pressable, Text } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function ButtonComponent({ title, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        globalStyles.button,
        pressed && globalStyles.buttonPressed,
      ]}
      onPress={onPress}
    >
      <Text style={globalStyles.buttonText}>{title}</Text>
    </Pressable>
  );
}
