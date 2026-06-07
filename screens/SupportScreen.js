import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { Card, H1, Muted, LinkButton } from '../components/ui';
import { VOLUNTEER_ROLES, LINKS } from '../data';

export default function SupportScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      <H1>Support</H1>
      <Muted>Donate, volunteer or get involved with OUT North East.</Muted>

      <Card style={{ marginTop: 16 }}>
        <Text style={styles.title}>Make a donation</Text>
        <Muted>Every gift helps provide safe spaces, activities and wellbeing support.</Muted>
        <LinkButton label="Donate" url={LINKS.donate} color={theme.colors.accent} />
      </Card>

      <Card>
        <Text style={styles.title}>Volunteer roles</Text>
        {VOLUNTEER_ROLES.map((r) => <Text key={r} style={styles.role}>• {r}</Text>)}
        <LinkButton label="Become a volunteer" url={LINKS.volunteer} />
      </Card>

      <Card>
        <Text style={styles.title}>Shop with meaning</Text>
        <Muted>A donation from every sale supports the charity.</Muted>
        <LinkButton label="Visit the shop" url={LINKS.shop} />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.bg },
  title: { fontSize: 17, fontWeight: '800', color: theme.colors.text, marginBottom: 6 },
  role: { color: theme.colors.text, lineHeight: 24 },
});
