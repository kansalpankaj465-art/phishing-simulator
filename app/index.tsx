import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SMSSimulation from '../src/components/SMSSimulation';
import EmailSimulation from '../src/components/EmailSimulation';
import PhishingPage from '../src/components/PhishingPage';
import EducationalWarning from '../src/components/EducationalWarning';
import DebitSimulation from '../src/components/DebitSimulation';
import QuizSimulation from '../src/components/QuizSimulation';
import SecurityTips from '../src/components/SecurityTips';

type Step = 'intro' | 'sms' | 'email' | 'phishing' | 'warning' | 'debit' | 'quiz' | 'tips';

const { width, height } = Dimensions.get('window');

export default function Index() {
  const [currentStep, setCurrentStep] = useState<Step>('intro');
  const [userData, setUserData] = useState({ account: '', otp: '', password: '' });

  const resetSimulation = () => {
    setCurrentStep('intro');
    setUserData({ account: '', otp: '', password: '' });
  };

  if (currentStep === 'intro') {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Ionicons name="shield-checkmark" size={48} color="#3B82F6" style={styles.titleIcon} />
              <Text style={styles.title}>Phishing Awareness Simulator</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Educational Purpose Only</Text>
            </View>
            <Text style={styles.subtitle}>
              Learn to identify and protect yourself from phishing attacks through this safe, educational simulation.
            </Text>
          </View>

          <View style={styles.featuredCard}>
            <View style={styles.cardIcon}>
              <Ionicons name="warning" size={64} color="#F59E0B" />
            </View>
            <Text style={styles.featuredTitle}>🚨 Recognize Threats First</Text>
            <Text style={styles.featuredDescription}>
              Your first line of defense! Learn to spot suspicious messages, emails, and websites before they fool you. Knowledge is your best protection against phishing attacks.
            </Text>
          </View>

          <View style={styles.cardGrid}>
            <View style={styles.card}>
              <View style={styles.cardIconSmall}>
                <Ionicons name="brain" size={40} color="#10B981" />
              </View>
              <Text style={styles.cardTitle}>🛡️ Experience Safely</Text>
              <Text style={styles.cardDescription}>
                Practice with realistic simulations in a completely safe environment. No risk, just learning through hands-on experience.
              </Text>
            </View>

            <View style={styles.card}>
              <View style={styles.cardIconSmall}>
                <Ionicons name="shield-checkmark" size={40} color="#3B82F6" />
              </View>
              <Text style={styles.cardTitle}>🔒 Stay Protected</Text>
              <Text style={styles.cardDescription}>
                Master proven techniques and best practices to shield yourself from real-world phishing attempts and cyber threats.
              </Text>
            </View>
          </View>

          <View style={styles.disclaimerCard}>
            <View style={styles.disclaimerHeader}>
              <Ionicons name="information-circle" size={24} color="#F59E0B" />
              <Text style={styles.disclaimerTitle}>Important Safety Notice</Text>
            </View>
            <View style={styles.disclaimerList}>
              <Text style={styles.disclaimerItem}>✓ Completely safe educational simulation</Text>
              <Text style={styles.disclaimerItem}>✓ No real data transmitted or stored</Text>
              <Text style={styles.disclaimerItem}>✓ All banking interfaces are fake demos</Text>
              <Text style={styles.disclaimerItem}>✓ Educational cybersecurity purpose only</Text>
            </View>
          </View>

          <View style={styles.appSection}>
            <Text style={styles.appSectionTitle}>🎯 Choose Your Training App</Text>
            <Text style={styles.appSectionSubtitle}>
              Select an interactive cybersecurity training module to start your learning journey
            </Text>

            <View style={styles.appGrid}>
              <TouchableOpacity
                style={[styles.appButton, styles.smsApp]}
                onPress={() => setCurrentStep('sms')}
              >
                <Text style={styles.appEmoji}>📱</Text>
                <Text style={styles.appTitle}>SMS Security</Text>
                <Text style={styles.appSubtitle}>Interactive Mobile Demo</Text>
                <View style={styles.appBadge}>
                  <Text style={styles.appBadgeText}>Beginner Friendly</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.appButton, styles.emailApp]}
                onPress={() => setCurrentStep('email')}
              >
                <Text style={styles.appEmoji}>📧</Text>
                <Text style={styles.appTitle}>Email Shield</Text>
                <Text style={styles.appSubtitle}>Advanced Email Training</Text>
                <View style={styles.appBadge}>
                  <Text style={styles.appBadgeText}>Intermediate</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.appButton, styles.quizApp]}
                onPress={() => setCurrentStep('quiz')}
              >
                <Text style={styles.appEmoji}>🧠</Text>
                <Text style={styles.appTitle}>Brain Trainer</Text>
                <Text style={styles.appSubtitle}>Knowledge Assessment</Text>
                <View style={styles.appBadge}>
                  <Text style={styles.appBadgeText}>Test Your Skills</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.tapHint}>
              <Text style={styles.tapHintText}>👆 Tap any app to begin your training!</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (currentStep === 'sms') {
    return <SMSSimulation onNext={() => setCurrentStep('phishing')} />;
  }

  if (currentStep === 'email') {
    return <EmailSimulation onNext={() => setCurrentStep('phishing')} />;
  }

  if (currentStep === 'phishing') {
    return (
      <PhishingPage 
        onSubmit={(data) => {
          setUserData(data);
          setCurrentStep('warning');
        }} 
      />
    );
  }

  if (currentStep === 'warning') {
    return <EducationalWarning onNext={() => setCurrentStep('debit')} userData={userData} />;
  }

  if (currentStep === 'debit') {
    return <DebitSimulation onNext={() => setCurrentStep('tips')} />;
  }

  if (currentStep === 'quiz') {
    return <QuizSimulation onComplete={() => setCurrentStep('tips')} />;
  }

  if (currentStep === 'tips') {
    return <SecurityTips onRestart={resetSimulation} />;
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleIcon: {
    marginRight: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    flex: 1,
  },
  badge: {
    backgroundColor: '#E2E8F0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 16,
  },
  badgeText: {
    fontSize: 14,
    color: '#475569',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 18,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 26,
    paddingHorizontal: 16,
  },
  featuredCard: {
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  cardIcon: {
    backgroundColor: '#FEF3C7',
    padding: 16,
    borderRadius: 50,
    marginBottom: 16,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#92400E',
    marginBottom: 12,
    textAlign: 'center',
  },
  featuredDescription: {
    fontSize: 16,
    color: '#78350F',
    textAlign: 'center',
    lineHeight: 24,
  },
  cardGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    gap: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardIconSmall: {
    backgroundColor: '#F1F5F9',
    padding: 12,
    borderRadius: 30,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  disclaimerCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    padding: 20,
    marginBottom: 48,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  disclaimerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  disclaimerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#92400E',
    marginLeft: 8,
  },
  disclaimerList: {
    gap: 8,
  },
  disclaimerItem: {
    fontSize: 14,
    color: '#78350F',
    lineHeight: 20,
  },
  appSection: {
    alignItems: 'center',
  },
  appSectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
    textAlign: 'center',
  },
  appSectionSubtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  appGrid: {
    gap: 24,
    marginBottom: 32,
  },
  appButton: {
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    minHeight: 200,
    justifyContent: 'center',
    position: 'relative',
  },
  smsApp: {
    backgroundColor: '#3B82F6',
  },
  emailApp: {
    backgroundColor: '#10B981',
  },
  quizApp: {
    backgroundColor: '#F59E0B',
  },
  appEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  appSubtitle: {
    fontSize: 14,
    color: '#E5E7EB',
    marginBottom: 12,
  },
  appBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
  },
  appBadgeText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  tapHint: {
    backgroundColor: '#EBF4FF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  tapHintText: {
    fontSize: 16,
    color: '#1D4ED8',
    fontWeight: '600',
  },
});