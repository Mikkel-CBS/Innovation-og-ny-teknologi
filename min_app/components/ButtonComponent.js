import { Pressable, Text } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

// Fælles knap, så handlinger ser ens ud på alle skærme.
export default function ButtonComponent({ title, onPress }) {
  return (
    <Pressable
      // Giver brugeren visuel feedback, når knappen trykkes.
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
