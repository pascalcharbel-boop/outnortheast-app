import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { theme } from '../theme';

export function BigHeading({ children, color = '#fff' }) {
  return <Text style={[styles.bigHeading, { color }]}>{children}</Text>;
}

export function Body({ children, color = theme.colors.text }) {
  return <Text style={[styles.body, { color }]}>{children}</Text>;
}

export function WhiteButton({ label, url, onPress }) {
  return (
    <TouchableOpacity style={styles.whiteBtn} onPress={onPress || (() => Linking.openURL(url))}
      accessibilityRole="button" accessibilityLabel={label}>
      <Text style={styles.whiteBtnText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bigHeading: { fontSize: 28, fontWeight: '900', lineHeight: 34, marginBottom: 14,
    textTransform: 'uppercase', letterSpacing: 0.5 },
  body: { fontSize: 16, lineHeight: 24, marginBottom: 14 },
  whiteBtn: { backgroundColor: '#fff', paddingVertical: 14, alignItems: 'center', marginTop: 10 },
  whiteBtnText: { color: theme.colors.text, fontWeight: '800', fontSize: 14, letterSpacing: 1 },
});
