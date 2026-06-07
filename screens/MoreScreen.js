import React from 'react';
import { ScrollView, Text, StyleSheet, Linking } from 'react-native';
import { theme } from '../theme';
import { Card, H1, Muted, Button } from '../components/ui';
import { PROJECTS, LINKS } from '../data';

export default function MoreScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      <H1>More</H1>

      <Text style={styles.section}>Our projects</Text>
      {PROJECTS.map((p) => (
        <Card key={p.id}>
          <Text style={styles.title}>{p.title}</Text>
          <Muted>{p.desc}</Muted>
        </Card>
      ))}

      <Card>
        <Text style={styles.title}>The ONE Centre</Text>
        <Muted>The region's dedicated LGBTQ+ community centre — kitchen, social spaces, private rooms and a podcast studio.</Muted>
      </Card>

      <Button label="Contact us" onPress={() => Linking.openURL(LINKS.contact)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.bg },
  section: { fontSize: 18, fontWeight: '800', color: theme.colors.text, marginVertical: 12 },
  title: { fontSize: 16, fontWeight: '800', color: theme.colors.text, marginBottom: 4 },
});
