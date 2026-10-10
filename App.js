import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

import {
  accentColor,
  backgroundColor,
  buttonColor,
  buttonTextColor,
  darkAccentColor,
  darkTextColor,
  inputBorderColor,
  mutedColor,
  textColor,
  titleColor,
} from './theme';

if (__DEV__) console.info('[stim:readiness] pending');

export default function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(`[stim:tutorial] started title=${titleColor} background=${backgroundColor}`);
    if (__DEV__) console.info('[stim:readiness] ready');
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={[styles.title, { color: titleColor }]}>Stim Tutorial</Text>
      <Text style={[styles.subtitle, { color: mutedColor }]}>Edit theme.js and save.</Text>

      <View
        testID="accent-card"
        style={[styles.card, { backgroundColor: dark ? darkAccentColor : accentColor }]}
      >
        <Text testID="tap-count" style={[styles.cardText, { color: dark ? darkTextColor : textColor }]}>
          Tapped {count} {count === 1 ? 'time' : 'times'}
        </Text>
        <Text testID="greeting" style={[styles.cardText, { color: dark ? darkTextColor : textColor }]}>
          Hello, {name.trim() || 'world'}
        </Text>
      </View>

      <Pressable
        testID="tap-button"
        accessibilityRole="button"
        accessibilityLabel="Tap me"
        onPress={() => setCount((n) => n + 1)}
        style={({ pressed }) => [styles.button, { backgroundColor: buttonColor, opacity: pressed ? 0.7 : 1 }]}
      >
        <Text style={[styles.buttonText, { color: buttonTextColor }]}>Tap me</Text>
      </Pressable>

      <View style={styles.row}>
        <Text style={[styles.label, { color: textColor }]}>Dark accent</Text>
        <Switch
          testID="dark-accent-switch"
          accessibilityLabel="Dark accent"
          value={dark}
          onValueChange={setDark}
          trackColor={{ true: buttonColor }}
        />
      </View>

      <TextInput
        testID="name-input"
        accessibilityLabel="Your name"
        placeholder="Your name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        autoCorrect={false}
        placeholderTextColor={mutedColor}
        style={[styles.input, { borderColor: inputBorderColor, color: textColor }]}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 44, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 16 },
  card: { alignSelf: 'stretch', borderRadius: 12, padding: 16, marginTop: 32, gap: 4 },
  cardText: { fontSize: 18 },
  button: { alignSelf: 'stretch', borderRadius: 12, paddingVertical: 14, marginTop: 16, alignItems: 'center' },
  buttonText: { fontSize: 18, fontWeight: '600' },
  row: { alignSelf: 'stretch', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 },
  label: { fontSize: 18 },
  input: { alignSelf: 'stretch', borderWidth: 1, borderRadius: 12, padding: 12, fontSize: 18, marginTop: 16 },
});
