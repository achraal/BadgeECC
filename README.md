# 🪪 BadgeECC - Forum Entreprises Digital Badge

[![Expo SDK](https://img.shields.io/badge/Expo-SDK%2057-000020.svg?style=flat&logo=expo)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React%20Native-0.86-61DAFB.svg?style=flat&logo=react)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61DAFB.svg?style=flat&logo=react)](https://react.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android%20%7C%20Web-blue)](https://expo.dev)

A modern, high-performance mobile application built with **React Native** and **Expo** designed to generate, display, and export digital attendee badges for the **ECC Forum Entreprises** (11th Edition).

The app delivers a sleek physical lanyard pass aesthetic, complete with attendee credentials, institutional logos, integrated QR code for fast on-site verification, and 1-tap badge saving directly to the device's photo gallery.

---

## ✨ Features

- 🎫 **Digital Lanyard Pass Aesthetic**: Styled badge card featuring high-resolution event branding, translucent frosted overlays, profile photo frame, and realistic lanyard notch.
- ⚡ **Dynamic QR Code Integration**: Embedded QR code generation using `react-native-qrcode-svg` for instantaneous check-in and attendee verification.
- 💾 **1-Tap Save to Camera Roll**: High-resolution view capture via `react-native-view-shot` and native gallery export with `expo-media-library`.
- 🔤 **Curated Typography**: Beautiful typography powered by Google Fonts (`Montserrat` for titles and badges, `Inter` for clean profile information).
- 🧭 **File-based Routing**: Built on modern **Expo Router** with typed routes and reactive tab navigation.
- 📱 **Cross-Platform**: Optimized for iOS, Android, and Web with native performance.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Expo (SDK 57)](https://expo.dev/)** | Application framework & build ecosystem |
| **[React Native (0.86)](https://reactnative.dev/)** | Native mobile UI components |
| **[React 19](https://react.dev/)** | Core UI library with React Compiler support |
| **[Expo Router](https://docs.expo.dev/router/introduction/)** | File-based navigation & deep linking |
| **[TypeScript](https://www.typescriptlang.org/)** | Type safety and developer experience |
| **[react-native-qrcode-svg](https://github.com/awesomejerry/react-native-qrcode-svg)** | QR code generation |
| **[react-native-view-shot](https://github.com/gre/react-native-view-shot)** | View snapshot capture |
| **[expo-media-library](https://docs.expo.dev/versions/latest/sdk/media-library/)** | Device photo library permissions & saving |
| **[@expo-google-fonts](https://github.com/expo/google-fonts)** | Montserrat & Inter custom fonts |

---

## 📁 Project Structure

```text
BadgeECC/
├── assets/
│   ├── images/          # Event logos, backgrounds, user photos, icons
│   └── expo.icon        # App icon configurations
├── src/
│   ├── app/
│   │   ├── _layout.tsx  # Root navigation layout & splash screen handler
│   │   ├── index.tsx    # Main digital badge screen & save-to-gallery logic
│   │   └── explore.tsx  # Expo information & feature highlights
│   ├── components/      # UI components, icons, navigation tabs
│   ├── constants/       # App themes, colors, and layout metrics
│   └── hooks/           # Custom React hooks (theme detection, etc.)
├── app.json             # Expo application configuration & plugins
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18 or higher recommended)
- **npm** or **bun**
- **Expo Go** app on your iOS / Android device (or an Android Emulator / iOS Simulator)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/BadgeECC.git
   cd BadgeECC
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npx expo start
   ```

4. **Launch the application:**
   - Scan the terminal QR code with **Expo Go** (Android) or the **Camera app** (iOS).
   - Press <kbd>a</kbd> for Android Emulator.
   - Press <kbd>i</kbd> for iOS Simulator.
   - Press <kbd>w</kbd> for Web browser.

---

## ⚙️ Customization

To personalize the badge details for another participant or event, open [`src/app/index.tsx`](src/app/index.tsx):

```tsx
// 1. Update attendee information
const userData = {
  firstName: "Jane",
  lastName: "Doe",
  role: "Élève Ingénieur",
  company: "Centrale Casablanca",
};

// 2. Adjust QR code payload
<QRCode
  value="https://eccforum.ma/attendee/jane-doe"
  size={85}
  color="#0a192f"
  backgroundColor="transparent"
/>
```

---

## 🔒 Permissions

The application requests **Media Library (Photos) Write Permission** when tapping **"Enregistrer le Badge"** to save the generated badge image to the user's camera roll.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
