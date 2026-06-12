import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { BigHeading, Body, WhiteButton } from '../components/sections';
import { LINKS } from '../data';

const CDN = 'https://lirp.cdn-website.com/cc91dfec/dms3rep/multi/opt';
const FILES = 'https://irp.cdn-website.com/cc91dfec/files/uploaded';

const VOLUNTEER_FORM = 'https://forms.office.com/pages/responsepage.aspx?id=K6q2aPaxyEent-v5t6cWQP4CRc-e56FOibwz_cZwNqtUQ0hNQTZZMU41V1UzQkpDM05HQ0tJMUEySC4u&route=shorturl';
const RAINBOW_LOTTERY = 'https://www.rainbowlottery.co.uk';
const SHOP = 'https://de53b0-2.myshopify.com/?utm_medium=shop_web';
const PRIDE_GRID_PDF = `${FILES}/new+Pride+Grid+A6+NB.pdf`;
const SPONSOR_PACK_PDF = `${FILES}/New+Summer+Of+Pride+26+-+Sponsor+Pack+Web+version.pdf`;

const ROLES = [
  { label: 'Befriending Officer', pdf: `${FILES}/Befriending+Officer.pdf` },
  { label: 'Event & Festival Officer', pdf: `${FILES}/Event+and+Festival+Officer.pdf` },
  { label: 'Group Support Officer', pdf: `${FILES}/Group+Support+Officer.pdf` },
  { label: 'LGBTQ+ Arts Officer', pdf: `${FILES}/LGBTQ-+Arts+Officer.pdf` },
  { label: 'LGBTQ+ History Officer', pdf: `${FILES}/LGBTQ-+History+Officer.pdf` },
  { label: 'LGBTQ+ Outreach Officer', pdf: `${FILES}/LGBTQ-+Outreach+Officer.pdf` },
  { label: 'LGBTQ+ Research Officer', pdf: `${FILES}/LGBTQ-+Research+Officer.pdf` },
  { label: 'Pride Radio Officer', pdf: `${FILES}/Pride+Radio+Officer.pdf` },
];

export default function SupportScreen() {
  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.section, { backgroundColor: theme.colors.primary }]}>
        <BigHeading>SUPPORT US</BigHeading>
        <Body color="#fff">Supporting OUT North East means supporting LGBTQ+ communities across the North East. As a charity, we rely on the generosity, skills and commitment of people who believe in connection, equality and care.</Body>
        <Body color="#fff">Whether you can donate, share your fundraising experience, offer professional services or get involved as a volunteer, your support helps us deliver vital projects, events, advice and advocacy. Every contribution helps us reach more people, reduce isolation and create safer, more inclusive spaces where communities can thrive.</Body>
        <Body color="#fff">By supporting OUT North East, you become part of a community working together to make lasting, positive change.</Body>
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.bg }]}>
        <BigHeading color={theme.colors.text}>VOLUNTEER</BigHeading>
        <Text style={styles.subhead}>Give Your Time. Build Community</Text>
        <Body>Volunteering with OUT North East and the ONE Centre is about more than giving your time, it is about helping to build a stronger, more connected LGBTQI+ community across the region.</Body>
        <Body>At the ONE Centre, volunteers play a key role in shaping a welcoming space where people can meet, learn, share experiences, and support one another. Whether you are greeting someone at a drop-in, helping organise an event, contributing to arts and creative projects, supporting LGBTQI+ research, or helping us tell community stories through media and archives, your contribution helps create a centre that truly belongs to the community.</Body>
        <Body>Volunteering with us can also be a great opportunity to develop new skills, build confidence, and meet people who share your values.</Body>
        <Body>Explore the volunteer roles below to learn more about how you can get involved with OUT North East and the ONE Centre.</Body>
        {ROLES.map((r) => (
          <TouchableOpacity key={r.label} style={styles.roleBtn} onPress={() => Linking.openURL(r.pdf)}
            accessibilityRole="button" accessibilityLabel={`${r.label} role description (PDF)`}>
            <Text style={styles.roleBtnText}>{r.label}</Text>
            <Ionicons name="document-text-outline" size={16} color={theme.colors.primary} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.primaryDark }]}>
        <BigHeading>BECOME A VOLUNTEER</BigHeading>
        <Body color="#fff">If you’re interested in any of our advertised positions, click below.</Body>
        <WhiteButton label="BECOME A VOLUNTEER" url={VOLUNTEER_FORM} />
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.accent }]}>
        <BigHeading color={theme.colors.text}>MAKE A DONATION</BigHeading>
        <Body>Donating to OUT North East is a powerful way to support LGBTQ+ people across our region.</Body>
        <Body>Your gift helps us provide safe, welcoming spaces, community activities, wellbeing support, and outreach that ensures LGBTQ+ people feel visible, valued, and able to thrive.</Body>
        <Body>Every donation, no matter the size, makes a real difference.</Body>
        <WhiteButton label="DONATE" url={LINKS.donate} />
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.bg }]}>
        <BigHeading color={theme.colors.text}>FUNDRAISE</BigHeading>
        <Text style={styles.subhead}>Make It Happen for OUT North East</Text>
        <Body>We’re a charity and we need your support to help us fundraise and continue our work with LGBTQ+ communities across the North East.</Body>
        <Body>Whether you want to host a cake bake in your school or workplace, run the Great North Run, take on a sponsored challenge or nominate us as your chosen charity, there are lots of ways to get involved.</Body>
        <Body>Whatever your idea, get in touch and we’ll support you every step of the way.</Body>
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.primary }]}>
        <BigHeading>PRIDE GRID</BigHeading>
        <Text style={[styles.subhead, { color: '#fff' }]}>STAND PROUD. BE VISIBLE. TOGETHER AS ONE</Text>
        <Body color="#fff">Help support the ONE Centre by taking your place on our Pride Grid.</Body>
        <Body color="#fff">Whether it’s a message of support, a unique birthday gift, or a way for your organisation to show its commitment to LGBTQIA+ communities, the Pride Grid is a visible and meaningful way to stand with us.</Body>
        <Body color="#fff">Every square helps support our work, and everyone who visits the ONE Centre will see your message of pride, celebration or allyship on display.</Body>
        <WhiteButton label="PRIDE GRID PDF" url={PRIDE_GRID_PDF} />
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.accent }]}>
        <BigHeading color={theme.colors.text}>SUMMER OF PRIDE PARTNER OPPORTUNITIES</BigHeading>
        <Body>Become a Friend, Ally or Champion of our Summer of Pride Festival 2026 and help us deliver a FREE Pride for everyone.</Body>
        <Body>Your support ensures Pride remains accessible, inclusive and welcoming to all communities across the North East. As a supporter, you’ll gain positive exposure while helping our charity reach more people through vibrant events, celebration and connection.</Body>
        <Body>By standing with OUT North East, you’re investing in visibility, wellbeing and community - and helping make Pride possible for everyone.</Body>
        <WhiteButton label="SPONSOR PACK PDF" url={SPONSOR_PACK_PDF} />
      </View>

      <Image source={{ uri: `${CDN}/Rainbow+Lottery-1920w.jpg` }} style={styles.photo}
        resizeMode="cover" accessibilityLabel="Rainbow Lottery" />

      <View style={[styles.section, { backgroundColor: theme.colors.primaryDark }]}>
        <BigHeading>RAINBOW LOTTERY</BigHeading>
        <Body color="#fff">The Rainbow Lottery is a not-for-profit organisation that supports LGBTQ+ communities across the UK while offering players the chance to win prizes.</Body>
        <Body color="#fff">When you play, you can nominate OUT North East as your chosen cause, meaning a portion of your ticket goes directly towards supporting our work across the region. Every ticket helps us continue providing safe spaces, community activities, and vital support for LGBTQ+ people in the North East - making a difference simply by taking part.</Body>
        <WhiteButton label="RAINBOW LOTTERY" url={RAINBOW_LOTTERY} />
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.primary }]}>
        <BigHeading>SHOP</BigHeading>
        <Text style={[styles.subhead, { color: '#fff' }]}>Merch With Meaning</Text>
        <Body color="#fff">Wear your Pride and support LGBTQ+ communities by visiting the OUT North East online shop. From great merch to meaningful designs, every purchase helps show your support while making a real difference.</Body>
        <Body color="#fff">A donation from every sale supports our charity, helping us deliver projects, events, advice and safe spaces across the North East. Look good, feel proud and help support community with every purchase.</Body>
        <WhiteButton label="MAIN SHOP" url={SHOP} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.bg },
  section: { padding: 20, paddingVertical: 28 },
  subhead: { fontSize: 17, fontWeight: '800', color: theme.colors.primary, marginBottom: 12 },
  photo: { width: '100%', height: 220 },
  roleBtn: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10,
    paddingVertical: 14, paddingHorizontal: 16, marginTop: 8,
    backgroundColor: theme.colors.surface },
  roleBtnText: { fontSize: 15, fontWeight: '700', color: theme.colors.text },
});
