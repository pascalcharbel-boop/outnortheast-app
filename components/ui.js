import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { theme } from '../theme';

export function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function Pill({ label, color = theme.colors.primary }) {
  return (
    <View style={[styles.pill, { backgroundColor: color + '22' }]}>
      <Text style={[styles.pillText, { color }]}>{label}</Text>
    </View>
  );
}

export function Button({ label, onPress, color = theme.colors.primary }) {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: color }]} onPress={onPress}
      accessibilityRole="button" accessibilityLabel={label}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
}

export function LinkButton({ label, url, color }) {
  return <Button label={label} color={color} onPress={() => Linking.openURL(url)} />;
}

export function H1({ children }) { return <Text style={styles.h1}>{children}</Text>; }
export function Muted({ children }) { return <Text style={styles.muted}>{children}</Text>; }

const styles = StyleSheet.create({
  card: { backgroundColor: theme.colors.surface, borderRadius: theme.radius,
    padding: theme.spacing(2), marginBottom: theme.spacing(1.5),
    borderWidth: 1, borderColor: theme.colors.border },
  pill: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  pillText: { fontSize: 12, fontWeight: '700' },
  btn: { paddingVertical: 14, borderRadius: 12, alignItems: 'center', marginTop: 8 },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  h1: { fontSize: 26, fontWeight: '900', color: theme.colors.text, marginBottom: 6,
    textTransform: 'uppercase', letterSpacing: 0.5 },
  muted: { color: theme.colors.textMuted, fontSize: 14, lineHeight: 20 },
});
