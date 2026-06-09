import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { Card, H1, Muted, Button } from '../components/ui';
import { PROJECTS, LINKS, EXPLORE, SOCIAL, CONTACT } from '../data';

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
        <Muted>The region's dedicated LGBTQ+ community centre — kitchen, social spaces, private rooms and more.</Muted>
        <Button label="Visit the ONE Centre" onPress={() => Linking.openURL(LINKS.oneCentre)} />
      </Card>

      <Text style={styles.section}>Explore</Text>
      <Card>
        {EXPLORE.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.row}
            accessibilityRole="link"
            accessibilityLabel={item.label}
            onPress={() => Linking.openURL(item.url)}>
            <Text style={styles.rowText}>{item.label}</Text>
            <Ionicons name="open-outline" size={18} color={theme.colors.textMuted} />
          </TouchableOpacity>
        ))}
      </Card>

      <Text style={styles.section}>Follow us</Text>
      <Card>
        <View style={styles.socialRow}>
          {SOCIAL.map((s) => (
            <TouchableOpacity
              key={s.id}
              accessibilityRole="link"
              accessibilityLabel={s.label}
              onPress={() => Linking.openURL(s.url)}
              style={styles.socialBtn}>
              <Ionicons name={s.icon} size={26} color={theme.colors.primary} />
            </TouchableOpacity>
          ))}
        </View>
      </Card>

      <Text style={styles.section}>Get in touch</Text>
      <Card>
        <TouchableOpacity onPress={() => Linking.openURL(LINKS.contact)} style={styles.row}>
          <Text style={styles.rowText}>Contact form</Text>
          <Ionicons name="open-outline" size={18} color={theme.colors.textMuted} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(CONTACT.phoneLink)} style={styles.row}>
          <Text style={styles.rowText}>{CONTACT.phone}</Text>
          <Ionicons name="call-outline" size={18} color={theme.colors.textMuted} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(CONTACT.emailLink)} style={styles.row}>
          <Text style={styles.rowText}>{CONTACT.email}</Text>
          <Ionicons name="mail-outline" size={18} color={theme.colors.textMuted} />
        </TouchableOpacity>
        <Muted>{CONTACT.address}</Muted>
      </Card>

      <Card>
        <TouchableOpacity onPress={() => Linking.openURL(CONTACT.funder)} style={styles.row}>
          <Text style={styles.rowText}>Funded by The National Lottery Community Fund</Text>
          <Ionicons name="open-outline" size={18} color={theme.colors.textMuted} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(LINKS.privacy)} style={styles.row}>
          <Text style={styles.rowText}>Privacy Policy</Text>
          <Ionicons name="open-outline" size={18} color={theme.colors.textMuted} />
        </TouchableOpacity>
        <Muted>Charity Number {CONTACT.charityNumber} · © {new Date().getFullYear()} Out North East</Muted>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.bg },
  section: { fontSize: 18, fontWeight: '800', color: theme.colors.text, marginVertical: 12 },
  title: { fontSize: 16, fontWeight: '800', color: theme.colors.text, marginBottom: 4 },
  row: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: theme.colors.border,
  },
  rowText: { fontSize: 15, color: theme.colors.text, flexShrink: 1, paddingRight: 8 },
  socialRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 18, paddingVertical: 4 },
  socialBtn: { padding: 4 },
});
