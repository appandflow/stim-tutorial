import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { backgroundColor, titleColor } from './theme';

if (__DEV__) console.info('[stim:readiness] pending');

export default function App() {
  useEffect(() => {
    console.log(`[stim:tutorial] started title=${titleColor} background=${backgroundColor}`);
    if (__DEV__) console.info('[stim:readiness] ready');
  }, []);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: titleColor }]}>Stim Tutorial</Text>
      <Text style={styles.subtitle}>Edit theme.js and save.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 44, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#6b7280' },
});
