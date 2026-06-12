import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { Card, Button } from '../components/ui';
import { BigHeading, Body, WhiteButton } from '../components/sections';
import { useRadio } from '../components/RadioPlayer';

const CDN = 'https://lirp.cdn-website.com/cc91dfec/dms3rep/multi/opt';
const IMAGES = {
  studio: `${CDN}/P24-1920w.jpg`,
  logo: `${CDN}/logo-pride-radio-colour-1920w.png`,
};
const VOLUNTEER_FORM = 'https://forms.office.com/pages/responsepage.aspx?id=K6q2aPaxyEent-v5t6cWQP4CRc-e56FOibwz_cZwNqtUQ0hNQTZZMU41V1UzQkpDM05HQ0tJMUEySC4u&route=shorturl';

export default function RadioScreen() {
  const { playing, loading, toggle } = useRadio();
  return (
    <ScrollView style={styles.screen}>
      {/* Player stays on top */}
      <Card style={styles.playerCard}>
        <Text style={styles.live}>● LIVE NOW</Text>
        <Button label={loading ? 'Connecting…' : playing ? '⏸ Pause' : '▶ Play live stream'}
          color={theme.colors.accent} onPress={toggle} />
      </Card>

      {/* Hero: studio photo */}
      <Image source={{ uri: IMAGES.studio }} style={styles.hero} resizeMode="cover"
        accessibilityLabel="Inside the Pride Radio studio" />

      <View style={[styles.section, { backgroundColor: theme.colors.bg }]}>
        <BigHeading color={theme.colors.text}>PRIDE RADIO</BigHeading>
        <Text style={styles.tagline}>Community. Pride. Radio.{'\n'}Real voices. Real community.</Text>
        <Body>Pride Radio is a vibrant, award-winning radio station broadcasting across the North East on 89.2FM and DAB, and across the UK via the free Pride Radio app, TuneIn and smart speakers.</Body>
        <Body>Based at the ONE Centre - the North East’s dedicated LGBTQ+ centre – Pride Radio has been on air since 2010. Over the years, we’ve built a loyal and diverse audience who tune in for our mix of live and pre-recorded shows, great music, bold conversations and plenty of listener interaction.</Body>
        <Body>We’re proud to be an inclusive broadcaster that celebrates LGBTQ+ voices, supports our listeners and works closely with allies and communities across the region. Pride Radio is about connection, visibility and sharing stories that matter, on air and beyond.</Body>
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.accent }]}>
        <Body>Pride Radio is run by OUT North East and uses the power of broadcasting to amplify LGBTQ+ voices and raise awareness of the issues that matter most to our communities.</Body>
        <Body>Through our shows, campaigns and events, we promote inclusion, celebrate diversity and support health and wellbeing initiatives across the North East and beyond.</Body>
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.bg }]}>
        <Body>We proudly support charities and not-for-profit organisations by offering free airtime and campaign support, helping important messages reach wider audiences. Alongside this, we host professional and social networking events that bring people together and strengthen community connections.</Body>
        <Body>Working in partnership with organisations including the NHS, local and national health providers, campaigning groups, community organisations and education settings, we deliver impactful initiatives focused on sexual health and wellbeing, gender identity and mental health awareness.</Body>
      </View>

      <Image source={{ uri: IMAGES.logo }} style={styles.logoImg} resizeMode="contain"
        accessibilityLabel="Pride Radio logo" />

      <View style={[styles.section, { backgroundColor: theme.colors.primary }]}>
        <BigHeading>VOLUNTEER WITH PRIDE RADIO</BigHeading>
        <Body color="#fff">Want to get involved in community radio and help amplify LGBTQ+ voices? Pride Radio welcomes volunteer presenters, podcast makers, producers and researchers to be part of our vibrant broadcast team.</Body>
        <Body color="#fff">Whether you’re experienced or just starting out, volunteering with Pride Radio is a chance to learn new skills, share stories and connect with community.</Body>
        <Body color="#fff">If you’re passionate about radio, podcasts, music or conversation, we’d love to hear from you - get involved and help make Pride Radio happen.</Body>
        <WhiteButton label="BECOME A VOLUNTEER" url={VOLUNTEER_FORM} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.bg },
  playerCard: { margin: 16, backgroundColor: theme.colors.primaryDark },
  live: { color: '#FF6B6B', fontWeight: '800', marginBottom: 8 },
  hero: { width: '100%', height: 260 },
  logoImg: { width: '100%', height: 180, backgroundColor: theme.colors.primaryDark },
  section: { padding: 20, paddingVertical: 28 },
  tagline: { fontSize: 18, fontWeight: '800', color: theme.colors.accent, marginBottom: 14 },
});
