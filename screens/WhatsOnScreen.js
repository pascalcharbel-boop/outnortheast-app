import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { theme } from '../theme';
import { Card, Pill, H1, Muted } from '../components/ui';
import { EVENTS, CATEGORIES } from '../data';

async function setReminder(ev) {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') { Alert.alert('Permission needed', 'Enable notifications to set reminders.'); return; }
  await Notifications.scheduleNotificationAsync({
    content: { title: 'Coming up at the ONE Centre', body: `${ev.title} — ${ev.time}` },
    trigger: { seconds: 5 }, // demo: fires in 5s. Replace with real event datetime.
  });
  Alert.alert('Reminder set', `We'll remind you about "${ev.title}".`);
}

export default function WhatsOnScreen() {
  const [filter, setFilter] = useState('All');
  const data = filter === 'All' ? EVENTS : EVENTS.filter((e) => e.category === filter);

  return (
    <View style={styles.screen}>
      <View style={{ padding: 16, paddingBottom: 0 }}>
        <H1>What's On</H1>
        <Muted>Events, workshops & drop-ins at the ONE Centre.</Muted>
      </View>

      <FlatList
        horizontal showsHorizontalScrollIndicator={false}
        data={CATEGORIES} keyExtractor={(c) => c}
        style={{ maxHeight: 56 }} contentContainerStyle={{ paddingHorizontal: 16, gap: 8, alignItems: 'center' }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setFilter(item)}
            style={[styles.chip, filter === item && styles.chipActive]}>
            <Text style={[styles.chipText, filter === item && { color: '#fff' }]}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={data} keyExtractor={(e) => e.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <Card>
            <Pill label={item.category} />
            <Text style={styles.title}>{item.title}</Text>
            <Muted>{item.date} · {item.time} · {item.room}</Muted>
            <Text style={styles.desc}>{item.desc}</Text>
            <TouchableOpacity style={styles.remind} onPress={() => setReminder(item)}>
              <Text style={styles.remindText}>🔔 Remind me</Text>
            </TouchableOpacity>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.bg },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 999,
    backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border },
  chipActive: { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary },
  chipText: { color: theme.colors.text, fontWeight: '600' },
  title: { fontSize: 17, fontWeight: '700', color: theme.colors.text, marginVertical: 4 },
  desc: { color: theme.colors.text, marginTop: 6, lineHeight: 20 },
  remind: { marginTop: 10, alignSelf: 'flex-start' },
  remindText: { color: theme.colors.primary, fontWeight: '700' },
});
