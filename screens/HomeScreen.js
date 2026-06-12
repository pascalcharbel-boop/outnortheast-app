import React from 'react';
import { ScrollView, View, Text, Image, ImageBackground, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { LINKS, CONTACT, SOCIAL } from '../data';

const COPY = {
  intro: 'OUT North East is an LGBTQ+ charity connecting people across the North East of England with the support, resources, and opportunities they need to live safer, healthier, and more fulfilled lives.',
  exist: 'Through our services, community spaces, outreach work, and partnerships, we connect individuals to practical help, trusted guidance, and meaningful opportunities, whether that means accessing support, building confidence, developing skills, or finding community.',
  education: 'A key part of our work is advancing education and raising public awareness of the issues and challenges affecting LGBTQ+ people, their families, friends, and allies.',
  challenge: 'Through inclusive education programmes, public campaigns, events, and creative media, we challenge discrimination and harmful attitudes such as homophobia, biphobia, and transphobia. Informed by lived experience, our work builds understanding, empathy, and positive change.',
  connection: [
    'We bring LGBTQ+ people together across generations, creating welcoming environments where experiences are shared, identities are celebrated, and everyone can learn from one another.',
    'Our work is rooted in the belief that nobody should feel isolated or excluded because of who they are. We actively challenge barriers linked to age, gender identity or sexuality, ensuring that support and opportunities are inclusive, accessible and responsive to different lived experiences.',
    'Through events, programmes and creative projects, we promote wellbeing, strengthen inclusion and help LGBTQ+ people feel seen, respected and supported. These relationships matter - they build confidence, reduce loneliness and foster a lasting sense of belonging.',
    'Whether someone is looking for connection, celebration, advice or simply a place to be themselves, OUT North East is here. Everyone is welcome, and everyone deserves to feel they belong.',
  ],
  campaign: [
    'We speak up where voices are too often unheard, advocate for LGBTQ+ rights, and work to influence the systems and decisions that shape people’s lives.',
    'By researching and amplifying underrepresented voices, we help ensure LGBTQ+ people are not excluded from public life or left without representation.',
    'Partnership is key to our impact. We work collaboratively with public, private, and voluntary sector organisations to develop and deliver initiatives that promote inclusion, wellbeing, and human rights.',
    'Everything we do is driven by care, collaboration, and community. OUT North East is more than an organisation, we are a connector, an advocate, and a platform for pride, resilience, and hope.',
    'We are here to strengthen communities and help shape a North East where LGBTQ+ people, their families, friends, and allies can participate fully in society and thrive.',
  ],
  objectives: [
    { n: 'ONE', title: 'To advance education and raise public awareness', body: 'of the issues and challenges affecting Lesbian, Gay, Bisexual, Transgender, Queer Plus (LGBTQ+) people, their families, friends, and allies, including by challenging discrimination and harmful attitudes such as homophobia, biphobia, and transphobia.' },
    { n: 'TWO', title: 'To promote social inclusion for the public benefit', body: 'by preventing LGBTQ+ people and their allies from being socially excluded on the grounds of sexual orientation or gender identity, and by enabling participation in society on equal terms.' },
    { n: 'THREE', title: 'To promote community development and wellbeing', body: 'through the provision and management of a community building and associated facilities that support connection, inclusion, and community-led activity.' },
    { n: 'FOUR', title: 'To promote equality, inclusion, and human rights', body: 'by working in partnership with public, private, and voluntary sector organisations to develop and deliver initiatives that improve understanding, access, and opportunities for LGBTQ+ people.' },
  ],
  vision: [
    'At OUT North East, we are committed to building a region where LGBTQ+ people are safe, visible, valued, and free to live openly and authentically. We believe that age, identity, and background should never prevent someone from thriving.',
    'Through trusted outreach and our inclusive community hub, the ONE Centre, we work to create lasting social change and meaningful support for our communities.',
  ],
};

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

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screen}>
      {/* Gradient header bar with real logo */}
      <View style={styles.headerBar}>
        <Image source={require('../assets/out-one-logo.png')} style={styles.logo}
          resizeMode="contain" accessibilityLabel="OUT North East logo" />
      </View>

      {/* Hero: ABOUT OUT NORTH EAST over pride photo */}
      <ImageBackground source={require('../assets/home-pride.jpg')} style={styles.hero}>
        <View style={styles.heroOverlay}>
          <Text style={styles.heroAbout}>ABOUT</Text>
          <View style={styles.heroTealBox}>
            <Text style={styles.heroTitle}>OUT{'\n'}NORTH{'\n'}EAST</Text>
          </View>
          <Body color="#fff">{COPY.intro}</Body>
        </View>
      </ImageBackground>

      {/* Purple donate banner */}
      <View style={[styles.section, { backgroundColor: theme.colors.primary }]}>
        <BigHeading>SUPPORT OUT NORTH EAST - HELP POWER OUR IMPACT</BigHeading>
        <WhiteButton label="DONATE" url={LINKS.donate} />
      </View>

      {/* Teal: we exist */}
      <View style={[styles.section, { backgroundColor: theme.colors.accent }]}>
        <BigHeading color={theme.colors.text}>WE EXIST TO ENSURE LGBTQ+ PEOPLE THRIVE AND ARE NOT NAVIGATING LIFE ALONE</BigHeading>
        <Body>{COPY.exist}</Body>
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.bg }]}>
        <Body>{COPY.education}</Body>
      </View>

      <Image source={require('../assets/home-pride.jpg')} style={styles.photo} resizeMode="cover"
        accessibilityLabel="Pride march in the North East" />

      <View style={[styles.section, { backgroundColor: theme.colors.bg }]}>
        <Body>{COPY.challenge}</Body>
      </View>

      {/* Purple: connection */}
      <View style={[styles.section, { backgroundColor: theme.colors.primary }]}>
        <BigHeading>CONNECTION SITS AT THE HEART OF EVERYTHING OUT NORTH EAST DELIVERS</BigHeading>
        {COPY.connection.map((p, i) => <Body key={i} color="#fff">{p}</Body>)}
      </View>

      {/* Newsletter */}
      <View style={[styles.section, { backgroundColor: theme.colors.primaryDark }]}>
        <BigHeading>SUBSCRIBE TO OUR NEWSLETTER</BigHeading>
        <WhiteButton label="SIGN UP" url={LINKS.contact} />
      </View>

      {/* Teal: campaign for change */}
      <View style={[styles.section, { backgroundColor: theme.colors.accent }]}>
        <BigHeading color={theme.colors.text}>ALONGSIDE DIRECT SUPPORT AND EDUCATION, WE CAMPAIGN FOR CHANGE</BigHeading>
        {COPY.campaign.map((p, i) => <Body key={i}>{p}</Body>)}
      </View>

      {/* Charitable objectives */}
      <View style={[styles.section, { backgroundColor: theme.colors.bg }]}>
        <BigHeading color={theme.colors.text}>CHARITABLE OBJECTIVES</BigHeading>
        <Body>OUT North East is established for the public benefit to pursue the following charitable objects:</Body>
        {COPY.objectives.map((o) => (
          <View key={o.n} style={styles.objective}>
            <Text style={styles.objectiveNum}>{o.n}</Text>
            <Text style={styles.objectiveTitle}>{o.title}</Text>
            <Body>{o.body}</Body>
          </View>
        ))}
      </View>

      {/* Vision */}
      <View style={[styles.section, { backgroundColor: theme.colors.primary }]}>
        <BigHeading>OUR VISION</BigHeading>
        {COPY.vision.map((p, i) => <Body key={i} color="#fff">{p}</Body>)}
        <Body color="#fff">You can view our full Vision, Mission and Theory of Change here:</Body>
        <WhiteButton label="DOWNLOAD PDF" url={LINKS.visionPdf} />
      </View>

      {/* Footer */}
      <View style={[styles.section, { backgroundColor: theme.colors.primaryDark }]}>
        <Image source={require('../assets/out-one-logo.png')} style={styles.footerLogo} resizeMode="contain" />
        <Body color="#fff">Out North East, ONE Centre,{'\n'}{CONTACT.address}</Body>
        <Text style={styles.footerLink} onPress={() => Linking.openURL(CONTACT.phoneLink)}>{CONTACT.phone}</Text>
        <Text style={styles.footerLink} onPress={() => Linking.openURL(CONTACT.emailLink)}>{CONTACT.email}</Text>
        <Text style={styles.footerHeading}>CONNECT WITH US</Text>
        <View style={styles.socialRow}>
          {SOCIAL.map((s) => (
            <TouchableOpacity key={s.id} onPress={() => Linking.openURL(s.url)}
              accessibilityRole="link" accessibilityLabel={s.label}>
              <Ionicons name={s.icon} size={26} color="#fff" style={styles.socialIcon} />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.footerLink} onPress={() => Linking.openURL(LINKS.privacy)}>PRIVACY POLICY</Text>
        <Text style={styles.footerSmall}>Copyright © 2026 Out North East - All Rights Reserved.</Text>
        <Text style={styles.footerSmall}>Charity Number {CONTACT.charityNumber}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.bg },
  headerBar: { backgroundColor: theme.colors.primary, alignItems: 'center', paddingVertical: 8 },
  logo: { width: 240, height: 64 },
  hero: { minHeight: 480 },
  heroOverlay: { flex: 1, backgroundColor: 'rgba(20,14,40,0.45)', padding: 20, paddingTop: 32 },
  heroAbout: { color: '#fff', fontSize: 56, fontWeight: '900', letterSpacing: 1 },
  heroTealBox: { backgroundColor: theme.colors.accent, alignSelf: 'flex-start',
    paddingHorizontal: 16, paddingVertical: 10, marginVertical: 14 },
  heroTitle: { color: '#fff', fontSize: 44, fontWeight: '900', lineHeight: 52, letterSpacing: 1 },
  section: { padding: 20, paddingVertical: 28 },
  bigHeading: { fontSize: 30, fontWeight: '900', lineHeight: 36, marginBottom: 14,
    textTransform: 'uppercase', letterSpacing: 0.5 },
  body: { fontSize: 16, lineHeight: 24, marginBottom: 14 },
  photo: { width: '100%', height: 260 },
  whiteBtn: { backgroundColor: '#fff', paddingVertical: 14, alignItems: 'center', marginTop: 4 },
  whiteBtnText: { color: theme.colors.text, fontWeight: '800', fontSize: 15, letterSpacing: 1 },
  objective: { marginTop: 18 },
  objectiveNum: { fontSize: 34, fontWeight: '900', color: theme.colors.primary },
  objectiveTitle: { fontSize: 18, fontWeight: '800', color: theme.colors.text, marginVertical: 6 },
  footerLogo: { width: 200, height: 54, marginBottom: 12 },
  footerHeading: { color: '#fff', fontSize: 20, fontWeight: '900', marginTop: 18, marginBottom: 8 },
  footerLink: { color: theme.colors.accent, fontSize: 15, marginBottom: 8, fontWeight: '700' },
  footerSmall: { color: '#B8B2CC', fontSize: 12, marginTop: 4 },
  socialRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 12 },
  socialIcon: { marginRight: 16, marginBottom: 8 },
});
