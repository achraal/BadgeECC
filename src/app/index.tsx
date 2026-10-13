import React, { useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, Image, Alert, ActivityIndicator } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { captureRef } from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library/legacy';

// Importation des polices Google
import { 
  useFonts, 
  Montserrat_900Black, 
  Montserrat_800ExtraBold, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';
import { 
  Inter_400Regular, 
  Inter_500Medium, 
  Inter_600SemiBold 
} from '@expo-google-fonts/inter';

export default function IndexScreen() {
  const viewRef = useRef(null);

  // Chargement des polices
  let [fontsLoaded] = useFonts({
    Montserrat_900Black,
    Montserrat_800ExtraBold,
    Montserrat_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const assets = {
    background: require('../../assets/images/back.png'),
    logoForum: require('../../assets/images/ecc-forum.jpg'), 
    logoEcole: require('../../assets/images/ecc-ecole.jpeg'),
    photoProfil: require('../../assets/images/PHOTO.jpeg')
  };

  const userData = {
    firstName: "#####",
    lastName: "#####",
    role: "Élève Ingénieur",
    company: "EMSI Casablanca",
  };

  const downloadBadge = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permission refusée", "Nous avons besoin de votre permission pour sauvegarder l'image.");
        return;
      }

      const localUri = await captureRef(viewRef, {
        format: 'png',
        quality: 1,
        result: 'tmpfile'
      });

      await MediaLibrary.createAssetAsync(localUri);
      Alert.alert("Succès", "Votre badge a été enregistré dans votre galerie photo !");
      
    } catch (e) {
      console.error(e);
      Alert.alert("Erreur", "Une erreur est survenue lors de la sauvegarde.");
    }
  };

  // On affiche un loader le temps que les polices se téléchargent
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a192f' }}>
        <ActivityIndicator size="large" color="#00BFA5" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <View ref={viewRef} collapsable={false} style={styles.badgeWrapper}>
        <ImageBackground 
          source={assets.background} 
          style={styles.badgeContainer}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.overlay} />
          <View style={styles.lanyardHole} />

          {/* En-tête avec les logos */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image source={assets.logoForum} style={styles.logoImage} resizeMode="contain" />
            </View>
            <View style={styles.logoContainer}>
              <Image source={assets.logoEcole} style={styles.logoImage} resizeMode="contain" />
            </View>
          </View>

          {/* Titre de l'événement */}
          <View style={styles.titleSection}>
            <Text style={styles.mainTitle}>ECC FORUM</Text>
            <Text style={styles.subTitle}>ENTREPRISES</Text>
            <View style={styles.editionContainer}>
              <Text style={styles.editionText}>11e ÉDITION</Text>
              <Text style={styles.dateText}>14 OCT 2026</Text>
            </View>
          </View>

          {/* Informations de l'utilisateur */}
          <View style={styles.userInfoSection}>
            <Image source={assets.photoProfil} style={styles.profileImage} />
            <Text style={styles.userName}>{userData.firstName} {userData.lastName.toUpperCase()}</Text>
            <Text style={styles.userRole}>{userData.role}</Text>
            <Text style={styles.userCompany}>{userData.company}</Text>
          </View>

          {/* Section QR Code */}
          <View style={styles.qrSection}>
            <QRCode
              value="DONNEES_FACTICES_NON_SCANNABLES_ACHRAF"
              size={85}
              color="#0a192f"
              backgroundColor="transparent"
            />
          </View>

        </ImageBackground>
      </View>

      <TouchableOpacity style={styles.downloadButton} onPress={downloadBadge} activeOpacity={0.8}>
        <Text style={styles.downloadButtonText}>Enregistrer le Badge</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeWrapper: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },
  badgeContainer: {
    width: 350,
    height: 640,
    borderRadius: 20,
    padding: 20,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  backgroundImage: {
    borderRadius: 20,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(5, 15, 30, 0.75)',
  },
  lanyardHole: {
    position: 'absolute',
    top: 12,
    width: 60,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
    marginBottom: 20,
  },
  logoContainer: {
    width: 135,
    height: 65,
    backgroundColor: '#ffffff', 
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  mainTitle: {
    fontFamily: 'Montserrat_900Black', // Application de la police
    color: '#ffffff',
    fontSize: 34,
    letterSpacing: 2,
  },
  subTitle: {
    fontFamily: 'Montserrat_800ExtraBold', // Application de la police
    color: '#00BFA5',
    fontSize: 26,
    letterSpacing: 1,
    marginBottom: 12,
  },
  editionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    borderTopWidth: 1.5,
    borderTopColor: 'rgba(0, 191, 165, 0.5)',
    paddingTop: 12,
  },
  editionText: {
    fontFamily: 'Montserrat_700Bold', // Application de la police
    color: '#00BFA5',
    fontSize: 17,
  },
  dateText: {
    fontFamily: 'Inter_500Medium', // Application de la police
    color: '#d1d5db',
    fontSize: 15,
  },
  userInfoSection: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    width: '100%',
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#00BFA5',
    marginBottom: 15,
  },
  userName: {
    fontFamily: 'Montserrat_800ExtraBold', // Application de la police
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 6,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  userRole: {
    fontFamily: 'Inter_600SemiBold', // Application de la police
    color: '#00BFA5',
    fontSize: 14,
    marginBottom: 6,
    textAlign: 'center',
  },
  userCompany: {
    fontFamily: 'Inter_400Regular', // Application de la police
    color: '#e5e7eb',
    fontSize: 14,
  },
  qrSection: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#00BFA5",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  qrLabel: {
    fontFamily: 'Montserrat_900Black', // Application de la police
    marginTop: 6,
    fontSize: 10,
    color: '#0a192f',
    letterSpacing: 1,
  },
  downloadButton: {
    marginTop: 35,
    backgroundColor: '#00BFA5',
    paddingVertical: 16,
    paddingHorizontal: 35,
    borderRadius: 12,
    shadowColor: "#00BFA5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  downloadButtonText: {
    fontFamily: 'Montserrat_700Bold', // Application de la police
    color: '#ffffff',
    fontSize: 15,
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
});