import { FlatList, Text, View } from 'react-native';
import { CARS } from '../data/const';
import { globalStyles } from '../styles/GlobalStyles';

export default function ListeScreen() {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.screenTitle}>Mine biler</Text>
      <Text style={globalStyles.screenSubtitle}>Vælg en bil for at se dit overblik.</Text>
      <View style={globalStyles.listContainer}>
        <FlatList
          data={CARS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text style={globalStyles.car}>{item}</Text>}
        />
      </View>
    </View>
  );
}
