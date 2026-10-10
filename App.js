import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';

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

const SIZES = [
  { key: 'S', label: 'small', fontSize: 16, cardPadding: 12 },
  { key: 'M', label: 'medium', fontSize: 28, cardPadding: 20 },
  { key: 'L', label: 'large', fontSize: 44, cardPadding: 32 },
];

export default function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [size, setSize] = useState('M');
  const { fontSize, cardPadding } = SIZES.find((s) => s.key === size);

  useEffect(() => {
    console.log(`[stim:tutorial] started title=${titleColor} background=${backgroundColor}`);
    if (__DEV__) console.info('[stim:readiness] ready');
  }, []);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: titleColor }]}>Stim Tutorial</Text>
      <Text style={[styles.subtitle, { color: mutedColor }]}>Edit theme.js and save.</Text>

      <View
        testID="accent-card"
        style={[styles.card, { backgroundColor: dark ? darkAccentColor : accentColor, padding: cardPadding }]}
      >
        <Text testID="tap-count" style={[styles.cardText, { color: dark ? darkTextColor : textColor, fontSize }]}>
          Tapped {count} {count === 1 ? 'time' : 'times'}
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

      <View
        accessibilityRole="radiogroup"
        accessibilityLabel="Size"
        style={styles.sizeRow}
      >
        {SIZES.map(({ key, label }) => {
          const selected = size === key;
          return (
            <Pressable
              key={key}
              testID={`size-${key.toLowerCase()}`}
              accessibilityRole="radio"
              accessibilityLabel={`Size ${label}`}
              accessibilityState={{ selected }}
              onPress={() => setSize(key)}
              style={[
                styles.chip,
                { borderColor: selected ? buttonColor : inputBorderColor, backgroundColor: selected ? buttonColor : backgroundColor },
              ]}
            >
              <Text style={[styles.chipText, { color: selected ? buttonTextColor : textColor }]}>{key}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 44, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 16 },
  card: { alignSelf: 'stretch', borderRadius: 12, marginTop: 32 },
  cardText: { fontSize: 18 },
  button: { alignSelf: 'stretch', borderRadius: 12, paddingVertical: 14, marginTop: 16, alignItems: 'center' },
  buttonText: { fontSize: 18, fontWeight: '600' },
  row: { alignSelf: 'stretch', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 },
  label: { fontSize: 18 },
  sizeRow: { alignSelf: 'stretch', flexDirection: 'row', gap: 8, marginTop: 16 },
  chip: { flex: 1, borderWidth: 1, borderRadius: 12, paddingVertical: 12, alignItems: 'center' },
  chipText: { fontSize: 18, fontWeight: '600' },
});
