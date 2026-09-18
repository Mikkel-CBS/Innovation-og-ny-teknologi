import { Pressable, Text } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function ButtonComponent({ title, onPress }) {
  return (
    // Genbrugelig knap til handlinger i appen.
    <Pressable
      // Giver knappen en tydelig trykket-tilstand.
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
