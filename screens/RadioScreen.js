import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { Card, Button, H1, Muted, Pill } from '../components/ui';
import { useRadio } from '../components/RadioPlayer';
import { RADIO, SHOWS } from '../data';

export default function RadioScreen() {
  const { playing, loading, toggle } = useRadio();
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      <H1>Pride Radio</H1>
      <Muted>{RADIO.tagline} Broadcasting on {RADIO.fm} and online since 2010.</Muted>

      <Card style={{ marginTop: 16, backgroundColor: theme.colors.primaryDark }}>
        <Text style={styles.live}>● LIVE NOW</Text>
        <Button label={loading ? 'Connecting…' : playing ? '⏸ Pause' : '▶ Play live stream'}
          color={theme.colors.accent} onPress={toggle} />
      </Card>

      <Text style={styles.section}>Shows & podcasts</Text>
      {SHOWS.map((s) => (
        <Card key={s.id}>
          <Pill label={s.type} />
          <Text style={styles.title}>{s.title}</Text>
          {s.time ? <Muted>{s.time}</Muted> : null}
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.bg },
  live: { color: '#FF6B6B', fontWeight: '800', marginBottom: 8 },
  section: { fontSize: 18, fontWeight: '800', color: theme.colors.text, marginVertical: 12 },
  title: { fontSize: 16, fontWeight: '700', color: theme.colors.text, marginTop: 4 },
});
