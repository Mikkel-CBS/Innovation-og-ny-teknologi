import { useState } from 'react';
import { Text, View } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import { globalStyles } from '../styles/GlobalStyles';

export default function GroupDetailsScreen({ route }) {
  // Henter den gruppe, som kunden trykkede på.
  const { group } = route.params;
  // Holder styr på, om kunden har tilmeldt sig gruppen.
  const [joined, setJoined] = useState(false);

  return (
    <View style={globalStyles.screen}>
      {/* Kunden kan se rabatten og tilmelde sig gruppen her. */}
      <Text style={globalStyles.eyebrow}>{group.area.toUpperCase()}</Text>
      <Text style={globalStyles.screenTitle}>{group.service}</Text>
      <Text style={globalStyles.screenSubtitle}>{group.description}</Text>
      <View style={globalStyles.detailCard}>
        {/* Viser gruppens forventede rabat og fremdrift. */}
        <Text style={globalStyles.detailLabel}>FORVENTET RABAT</Text>
        <Text style={globalStyles.detailDiscount}>{group.discount}</Text>
        <Text style={globalStyles.cardMeta}>{group.price}  ·  {group.deadline}</Text>
        <View style={globalStyles.progressTrack}>
          <View
            style={[
              globalStyles.progressFill,
              // Viser hvor tæt gruppen er på sit mål.
              { width: `${(group.participants / group.target) * 100}%` },
            ]}
          />
        </View>
        <Text style={globalStyles.cardDetail}>
          {group.participants} af {group.target} deltagere er med
        </Text>
      </View>
      <ButtonComponent
        title={joined ? 'Du er med i gruppen' : 'Bliv medlem af gruppen'}
        // Skifter knapteksten, når kunden tilmelder sig.
        onPress={() => setJoined(true)}
      />
      {joined && (
        <Text style={globalStyles.successText}>
          Du får besked, når den bedste lokale deal er fundet.
        </Text>
      )}
      <Text style={globalStyles.noteText}>
        Prisen fastsættes, når deadline udløber. Du accepterer først en aftale, når du bekræfter den.
      </Text>
    </View>
  );
}
