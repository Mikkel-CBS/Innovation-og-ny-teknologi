import { Fragment, useState } from 'react';
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { createGroup } from '../database/groups';
import { colors, globalStyles } from '../styles/GlobalStyles';

const textFields = [
  ['company', 'Virksomhed', 'Fx Klar Rude'],
  ['target', 'Mål for deltagere', 'Fx 10'],
  ['discount', 'Rabat', 'Fx 20%'],
  ['price', 'Pris', 'Fx Fra 249 kr.'],
  ['deadline', 'Deadline', 'Fx Om 4 dage'],
  ['description', 'Beskrivelse', 'Fortæl kort om tilbuddet'],
];

// Faste valgmuligheder sikrer ens stavning i databasen.
const services = [
  { id: 'window-cleaning', name: 'Vinduespudsning' },
  { id: 'hedge-trimming', name: 'Hækklipning' },
  { id: 'lawn-mowing', name: 'Græsslåning' },
];

const areas = [
  { id: 'valby', name: 'Valby' },
  { id: 'frederiksberg', name: 'Frederiksberg' },
  { id: 'vanloese', name: 'Vanløse' },
];

// Viser et simpelt modalvindue med de mulige valg.
function SelectionField({ label, value, options, onSelect }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Text style={globalStyles.inputLabel}>{label}</Text>
      <Pressable style={globalStyles.select} onPress={() => setVisible(true)}>
        <Text style={value ? globalStyles.selectText : globalStyles.selectPlaceholder}>
          {value || `Vælg ${label.toLowerCase()}`}
        </Text>
      </Pressable>
      <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
        <Pressable style={globalStyles.modalOverlay} onPress={() => setVisible(false)}>
          <View style={globalStyles.modalCard}>
            <Text style={globalStyles.modalTitle}>Vælg {label.toLowerCase()}</Text>
            {options.map((option) => (
              <Pressable
                key={option.id}
                style={globalStyles.option}
                onPress={() => {
                  // Gemmer både valget i formularen og lukker dropdown-vinduet.
                  onSelect(option);
                  setVisible(false);
                }}
              >
                <Text style={globalStyles.optionText}>{option.name}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

export default function CreateGroupScreen({ navigation }) {
  // Formularens værdier holdes samlet, så de kan gemmes som ét opslag.
  const [form, setForm] = useState({
    company: '',
    service: '',
    area: '',
    target: '',
    discount: '',
    price: '',
    deadline: '',
    description: '',
  });
  const [saving, setSaving] = useState(false);

  function updateField(name, value) {
    // Bevarer de øvrige formularfelter, når kun ét felt ændres.
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  async function handleCreate() {
    // Stopper gemning, hvis et obligatorisk felt mangler.
    if (Object.values(form).some((value) => !value.trim())) {
      Alert.alert('Fel', 'Udfyld alle felter, før opslaget gemmes.');
      return;
    }

    // Deltagermålet gemmes som et tal, så det kan bruges i beregninger.
    const target = Number(form.target);
    if (!Number.isInteger(target) || target < 1) {
      Alert.alert('Fel', 'Mål for deltagere skal være et helt tal over 0.');
      return;
    }

    setSaving(true);
    try {
      // De valgte navne gemmes sammen med stabile ID'er til senere filtrering.
      await createGroup({
        ...form,
        serviceId: services.find((service) => service.name === form.service).id,
        areaId: areas.find((area) => area.name === form.area).id,
        icon: 'sparkles-outline',
        participants: 0,
        target,
      });
      navigation.goBack();
    } catch (error) {
      Alert.alert('Kunne ikke gemme', 'Opslaget kunne ikke gemmes i Firebase.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <ScrollView
      style={globalStyles.formScreen}
      contentContainerStyle={globalStyles.formContent}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={globalStyles.screenSubtitle}>
        Opret et tilbud, som lokale brugere kan tilmelde sig.
      </Text>
      <SelectionField
        label="Service"
        value={form.service}
        options={services}
        onSelect={(option) => updateField('service', option.name)}
      />
      <SelectionField
        label="Område"
        value={form.area}
        options={areas}
        onSelect={(option) => updateField('area', option.name)}
      />
      {/* De resterende tekstfelter bygges ud fra listen øverst i filen,
          så labels, placeholders og værdier holdes samlet ét sted. */}
      {textFields.map(([name, label, placeholder]) => (
        <Fragment key={name}>
          <Text style={globalStyles.inputLabel}>{label}</Text>
          <TextInput
            style={globalStyles.input}
            placeholder={placeholder}
            placeholderTextColor={colors.muted}
            value={form[name]}
            onChangeText={(value) => updateField(name, value)}
            keyboardType={name === 'target' ? 'numeric' : 'default'}
            multiline={name === 'description'}
            accessibilityLabel={label}
          />
        </Fragment>
      ))}
      <Pressable
        style={({ pressed }) => [
          globalStyles.button,
          globalStyles.createButton,
          saving && globalStyles.buttonDisabled,
          pressed && !saving && globalStyles.buttonPressed,
        ]}
        onPress={handleCreate}
        disabled={saving}
      >
        <Text style={globalStyles.buttonText}>
          {saving ? 'Gemmer opslag...' : 'Opret opslag'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}
