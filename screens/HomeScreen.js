import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Linking } from 'react-native';
import { theme } from '../theme';
import { Card, Button, Pill, H1, Muted } from '../components/ui';
import { useRadio } from '../components/RadioPlayer';
import { RADIO, EVENTS, PROJECTS, LINKS, CONTACT } from '../data';

export default function HomeScreen({ navigation }) {
  const { playing, loading, toggle } = useRadio();
  const today = EVENTS.slice(0, 2);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      <View style={styles.header}>
        {/* TODO: drop the real logo file at assets/out-one-logo.png */}
        <Image
          source={require('../assets/out-one-logo.png')}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="OUT North East logo"
        />
      </View>

      <H1>OUT North East</H1>
      <Muted>LGBTQ+ community across Gateshead, Sunderland & South Tyneside.</Muted>

      <Card style={{ marginTop: 16, backgroundColor: theme.colors.primaryDark }}>
        <Text style={styles.radioTitle}>{RADIO.name} · {RADIO.fm}</Text>
        <Text style={styles.radioTag}>{RADIO.tagline}</Text>
        <Button
          label={loading ? 'Connecting…' : playing ? '❚❚ Pause live' : '▶ Listen live'}
          color={theme.colors.accent}
          onPress={toggle}
        />
      </Card>

      <Text style={styles.section}>Today at the ONE Centre</Text>
      {today.map((e) => (
        <Card key={e.id}>
          <Pill label={e.category} />
          <Text style={styles.evTitle}>{e.title}</Text>
          <Muted>{e.time} · {e.room}</Muted>
        </Card>
      ))}
      <Button label="See full What's On" onPress={() => navigation.navigate('Whats On')} />

      <Text style={styles.section}>Quick actions</Text>
      <View style={styles.row}>
        <Button label="Donate" color={theme.colors.accent} onPress={() => Linking.openURL(LINKS.donate)} />
      </View>
      {/* TODO: confirm LINKS.directions is a precise maps link before relying on this */}
      <Button label="Get directions to the ONE Centre" onPress={() => Linking.openURL(LINKS.directions)} />

      <Text style={styles.section}>Featured project</Text>
      <Card>
        <Text style={styles.evTitle}>{PROJECTS[0].title}</Text>
        <Muted>{PROJECTS[0].desc}</Muted>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.bg },
  header: { alignItems: 'center', paddingTop: 8, paddingBottom: 4 },
  logo: { width: 220, height: 90, marginBottom: 8 },
  section: { fontSize: 18, fontWeight: '800', color: theme.colors.text, marginVertical: 12 },
  evTitle: { fontSize: 16, fontWeight: '700', color: theme.colors.text, marginVertical: 4 },
  radioTitle: { color: '#fff', fontWeight: '800', fontSize: 16 },
  radioTag: { color: '#D9CFF2', marginBottom: 6 },
  row: {},
});
