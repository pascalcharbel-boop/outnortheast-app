import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Linking, TouchableOpacity, Modal, Platform, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { LINKS } from '../data';

const PRIDE_GUIDE_PDF = 'https://irp.cdn-website.com/cc91dfec/files/uploaded/Summer+of+Pride+Guide+26+web.pdf';
const DONATE = 'https://gtap.uk/N3KPHV';
const CDN = 'https://lirp.cdn-website.com/cc91dfec/dms3rep/multi/opt';

const IMAGES = {
  hero: `${CDN}/Summer+of+Pride+A+Ad-22-+%28dragged%29-1920w.png`,
  logo: `${CDN}/SUMMER+OF+PRIDE+LOGO-1920w.png`,
  bingo: `${CDN}/Ophelia-s+bingo+and+quiz+night+%282%29-1920w.png`,
  concert: `${CDN}/Screenshot+2026-05-14+at+12.57.01-1920w.png`,
  march: `${CDN}/Summer+of+Pride+in+Sunderland-1920w.png`,
  beacon: `${CDN}/Beacon_page-0001-1920w.jpg`,
  bowling: `${CDN}/BOWLING_page-0001-1920w.jpg`,
  colourRun: `${CDN}/COLOUR_page-0001-1920w.jpg`,
};

const HIGHLIGHTS = [
  { id: 'bingo', title: "Highlighted Event: Ophelia's Bingo Night", img: IMAGES.bingo },
  { id: 'concert', title: 'Highlighted Event: Pride Concert Fundraiser', img: IMAGES.concert },
  { id: 'march', title: 'Highlighted Event: Pride March', img: IMAGES.march },
  { id: 'beacon', title: 'Highlighted Event: Beacon of Light Family Day', img: IMAGES.beacon },
  { id: 'bowling', title: 'Highlighted Event: Pride Lawn Bowling Tournament', img: IMAGES.bowling },
  { id: 'colour-run', title: 'Highlighted Event: Colour Fun Run', img: IMAGES.colourRun },
];

const EVENT_TYPES = ['TALKS', 'FILM SCREENINGS', 'SPORTING ACTIVITIES', 'COFFEE MORNINGS',
  'TAKE OVERS', 'FAMILY EVENTS', 'CRAFTING WORKSHOPS', 'AND MORE...'];

function BigHeading({ children, color = '#fff' }) {
  return <Text style={[styles.bigHeading, { color }]}>{children}</Text>;
}

function Body({ children, color = theme.colors.text }) {
  return <Text style={[styles.body, { color }]}>{children}</Text>;
}

function WhiteButton({ label, url }) {
  return (
    <TouchableOpacity style={styles.whiteBtn} onPress={() => Linking.openURL(url)}
      accessibilityRole="button" accessibilityLabel={label}>
      <Text style={styles.whiteBtnText}>{label}</Text>
    </TouchableOpacity>
  );
}

const FEATURED_EVENT = {
  kicker: 'SUMMER OF PRIDE FESTIVAL · OUT NORTH EAST EVENT',
  title: 'Pride in Sunderland - Pride Concert Fundraiser',
  poster: IMAGES.concert,
  tagline: 'Keep Pride Free – Join Us for a Night to Remember',
  desc: 'We’re kicking things off in style with our FREE concert at Sheepfolds and you’re invited.',
  when: 'Saturday 6 June 18:00 - 22:00',
  ticketsUrl: LINKS.events,
  shareUrl: 'https://www.outnortheast.org.uk/summer-of-pride',
};

function FeaturedEventPopup({ visible, onClose }) {
  const ev = FEATURED_EVENT;
  const copyLink = () => {
    if (Platform.OS === 'web' && navigator?.clipboard) navigator.clipboard.writeText(ev.shareUrl);
    else Share.share({ message: ev.shareUrl });
  };
  const inviteByEmail = () => Linking.openURL(
    `mailto:?subject=${encodeURIComponent(ev.title)}&body=${encodeURIComponent(`${ev.tagline}\n${ev.when}\n${ev.shareUrl}`)}`
  );
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.popupBackdrop}>
        <View style={styles.popupCard}>
          <TouchableOpacity style={styles.popupClose} onPress={onClose}
            accessibilityRole="button" accessibilityLabel="Close popup">
            <Ionicons name="close" size={20} color="#fff" />
          </TouchableOpacity>
          <ScrollView>
            <View style={styles.popupHeader}>
              <Text style={styles.popupKicker}>
                <Text style={{ color: '#E8A33D' }}>SUMMER OF PRIDE FESTIVAL</Text>
                <Text style={{ color: theme.colors.textMuted }}>  ·  </Text>
                <Text style={{ color: '#1E7A5A' }}>OUT NORTH EAST EVENT</Text>
              </Text>
              <Text style={styles.popupTitle}>{ev.title}</Text>
              <TouchableOpacity style={styles.ticketsBtn} onPress={() => Linking.openURL(ev.ticketsUrl)}
                accessibilityRole="button" accessibilityLabel="Get tickets">
                <Text style={styles.ticketsBtnText}>GET TICKETS</Text>
              </TouchableOpacity>
            </View>
            <Image source={{ uri: ev.poster }} style={styles.popupPoster} resizeMode="cover"
              accessibilityLabel={ev.title} />
            <View style={styles.popupBody}>
              <Text style={styles.popupTagline}>{ev.tagline}</Text>
              <Text style={styles.popupDesc}>{ev.desc}</Text>
              <View style={styles.popupMetaRow}>
                <Ionicons name="time-outline" size={16} color={theme.colors.text} />
                <Text style={styles.popupMetaLabel}>  WHEN</Text>
              </View>
              <Text style={styles.popupDesc}>{ev.when}</Text>
              <View style={styles.popupMetaRow}>
                <Ionicons name="arrow-redo-outline" size={16} color={theme.colors.text} />
                <Text style={styles.popupMetaLabel}>  SHARE</Text>
              </View>
              <View style={styles.popupShareRow}>
                <TouchableOpacity style={styles.shareBtn} onPress={copyLink}
                  accessibilityRole="button" accessibilityLabel="Copy link">
                  <Ionicons name="link-outline" size={16} color={theme.colors.text} />
                  <Text style={styles.shareBtnText}> COPY LINK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareBtn} onPress={inviteByEmail}
                  accessibilityRole="button" accessibilityLabel="Invite via email">
                  <Ionicons name="mail-outline" size={16} color={theme.colors.text} />
                  <Text style={styles.shareBtnText}> INVITE VIA EMAIL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

export default function SummerOfPrideScreen() {
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setPopupVisible(true), 10000);
    return () => clearTimeout(t);
  }, []);

  return (
    <ScrollView style={styles.screen}>
      <FeaturedEventPopup visible={popupVisible} onClose={() => setPopupVisible(false)} />
      <Image source={{ uri: IMAGES.hero }} style={styles.hero} resizeMode="cover"
        accessibilityLabel="Summer of Pride Festival 2026" />

      <View style={[styles.section, { backgroundColor: theme.colors.accent }]}>
        <BigHeading color={theme.colors.text}>CELEBRATING PRIDE IN OUR COMMUNITIES</BigHeading>
        <Body>OUT North East’s Summer of Pride Festival 2026 is a free, community-focused celebration of LGBTQ+ life, creativity and belonging and we’d love you to be part of it.</Body>
        <Body>This year marks an exciting step forward. Rather than hosting separate festivals in Sunderland, South Tyneside and Gateshead, we’re connecting these three proud boroughs through one vibrant month of Pride, events and shared experiences.</Body>
        <Body>From arts and culture to wellbeing, learning and family-friendly activities, the festival will feel visible and inclusive, where everyone is welcome.</Body>
        <Body>Taking place in June - recognised globally as Pride Month - the festival will create space for people to connect, be visible and celebrate together across our communities.</Body>
        <Body>At its heart, the Summer of Pride Festival 2026 is about shared experiences and what brings us together.</Body>
        <Body>To deliver this ambitious programme, we need your support. By partnering with OUT North East, you can help ensure the festival is free, inclusive and truly community led. Together, we can strengthen connections, support wellbeing and mark Pride in ways that reflect the diversity of our communities - creating positive, lasting impact well beyond Pride Month.</Body>
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.primary }]}>
        <Body color="#fff">June is bursting with Pride as Sunderland, South Tyneside and Gateshead come together for the Summer of Pride Festival 2026.</Body>
        <Body color="#fff">A month of connection, shared experiences and community, where everyone is welcome.</Body>
        <WhiteButton label="DOWNLOAD YOUR FREE PRIDE GUIDE" url={PRIDE_GUIDE_PDF} />
        <WhiteButton label="KEEP PRIDE FREE - PLEASE DONATE" url={DONATE} />
      </View>

      <Image source={{ uri: IMAGES.logo }} style={styles.logoImg} resizeMode="contain"
        accessibilityLabel="Summer of Pride logo" />

      {HIGHLIGHTS.map((h) => (
        <View key={h.id}>
          <View style={[styles.section, { backgroundColor: theme.colors.primaryDark, paddingVertical: 14 }]}>
            <Text style={styles.highlightTitle}>{h.title}</Text>
          </View>
          <Image source={{ uri: h.img }} style={styles.poster} resizeMode="cover"
            accessibilityLabel={h.title} />
        </View>
      ))}

      <View style={[styles.section, { backgroundColor: theme.colors.accent }]}>
        {EVENT_TYPES.map((t) => (
          <Text key={t} style={styles.eventType}>{t}</Text>
        ))}
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.primary }]}>
        <BigHeading>IF YOU'VE AN IDEA FOR AN EVENT OR WOULD LIKE TO HOST ONE AS PART OF OUR SUMMER OF PRIDE FESTIVAL, GET IN TOUCH - WOULD LOVE TO HEAR FROM YOU.</BigHeading>
        <WhiteButton label="CONTACT US" url={LINKS.contact} />
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.bg }]}>
        <BigHeading color={theme.colors.text}>GET INVOLVED IN SUMMER OF PRIDE 2026</BigHeading>
        <Body>There are many ways to be part of our Summer of Pride Festival 2026 - whether you’re an individual, a business, a school, or a community group.</Body>
        <Body>We know that support looks different for everyone, and not everyone is in a position to contribute financially - and that’s ok.</Body>
        <Body>What matters most is showing up, being visible, and standing alongside our LGBTQ+ communities.</Body>
        <Body>You could volunteer your time, offer in-kind support, help at events, fundraise for OUT North East, share your skills, or collaborate with us in creative ways. Every contribution makes a real difference.</Body>
        <Body>Visible allyship is just as important. It sends a powerful message that LGBTQ+ people are valued, respected and supported. That might mean flying the Pride flag, changing your logo during Pride Month, sharing positive messages, educating staff and customers, or creating spaces where people feel safe and seen - not just in June, but all year round.</Body>
        <Body>Pride is strongest when it’s built together - through partnership, visibility and shared commitment.</Body>
        <Body>If you’d like to get involved, we’d love to hear from you.</Body>
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.primaryDark }]}>
        <WhiteButton label="CONTACT US" url={LINKS.contact} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.bg },
  hero: { width: '100%', height: 320 },
  logoImg: { width: '100%', height: 220, backgroundColor: '#fff' },
  poster: { width: '100%', height: 420 },
  section: { padding: 20, paddingVertical: 28 },
  bigHeading: { fontSize: 28, fontWeight: '900', lineHeight: 34, marginBottom: 14,
    textTransform: 'uppercase', letterSpacing: 0.5 },
  body: { fontSize: 16, lineHeight: 24, marginBottom: 14 },
  highlightTitle: { color: '#fff', fontSize: 18, fontWeight: '900', textTransform: 'uppercase' },
  eventType: { fontSize: 26, fontWeight: '900', color: theme.colors.text, marginBottom: 8,
    letterSpacing: 0.5 },
  whiteBtn: { backgroundColor: '#fff', paddingVertical: 14, alignItems: 'center', marginTop: 10 },
  whiteBtnText: { color: theme.colors.text, fontWeight: '800', fontSize: 14, letterSpacing: 1 },
  popupBackdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center',
    alignItems: 'center', padding: 16 },
  popupCard: { backgroundColor: '#fff', borderRadius: 12, width: '100%', maxWidth: 560,
    maxHeight: '90%', overflow: 'hidden' },
  popupClose: { position: 'absolute', top: 10, right: 10, zIndex: 2, backgroundColor: '#9C9C9C',
    borderRadius: 999, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' },
  popupHeader: { padding: 20, paddingTop: 28, alignItems: 'center' },
  popupKicker: { fontSize: 13, fontWeight: '800', letterSpacing: 0.5, marginBottom: 10,
    textAlign: 'center' },
  popupTitle: { fontSize: 22, fontWeight: '800', color: theme.colors.text, textAlign: 'center',
    marginBottom: 14 },
  ticketsBtn: { backgroundColor: '#D7263D', borderRadius: 6, paddingVertical: 10,
    paddingHorizontal: 26 },
  ticketsBtnText: { color: '#fff', fontWeight: '800', fontSize: 14, letterSpacing: 0.5 },
  popupPoster: { width: '100%', height: 300, backgroundColor: '#000' },
  popupBody: { padding: 20 },
  popupTagline: { fontSize: 16, fontWeight: '700', color: theme.colors.text, marginBottom: 8 },
  popupDesc: { fontSize: 14, lineHeight: 21, color: theme.colors.textMuted, marginBottom: 14 },
  popupMetaRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  popupMetaLabel: { fontSize: 14, fontWeight: '800', color: theme.colors.text },
  popupShareRow: { flexDirection: 'row', gap: 10, flexWrap: 'wrap' },
  shareBtn: { flexDirection: 'row', alignItems: 'center', borderWidth: 1,
    borderColor: theme.colors.border, borderRadius: 8, paddingVertical: 10,
    paddingHorizontal: 16, flexGrow: 1, justifyContent: 'center' },
  shareBtnText: { fontSize: 13, fontWeight: '700', color: theme.colors.text },
});
