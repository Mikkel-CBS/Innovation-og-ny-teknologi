# SamBud

En React Native-app bygget med Expo. SamBud gør det muligt at finde lokale
servicegrupper, oprette opslag, tilmelde sig grupper og se sine aktive
tilmeldinger.

## Links

- **YouTube-video:** [https://www.youtube.com/shorts/ZLnuMudbLMw?si=CUNwhyKVVpPhER63]
- **GitHub repository:** [https://github.com/Mikkel-CBS/Innovation-og-ny-teknologi.git]


## Forudsætninger

Før du går i gang, skal du have følgende installeret:

- [Node.js](https://nodejs.org/) (LTS anbefales)
- npm, som installeres sammen med Node.js
- Expo Go på din mobil, hvis appen skal køres på en fysisk enhed

Du kan kontrollere installationerne med:

```bash
node --version
npm --version
```

## Installation

1. Klon repository’et, eller hent projektet ned på din computer.
2. Åbn en terminal i projektmappen `min_app`.
3. Installer projektets afhængigheder:

```bash
npm install
```

## Start appen

Start Expo development serveren evt. med tunnel-forbindelse:

```bash
npx expo start --clear --tunnel
```

Når serveren er startet, vises en QR-kode. Scan QR-koden med kameraet på din telefon, så åbner Expo Go appen automatisk med dette projekt.

Appen bruger Firebase Realtime Database. Firebase-forbindelsen er allerede
konfigureret i projektet, så der er ikke et ekstra lokalt Firebase-setup, der
skal køres efter `npm install`.

## Fejlfinding

Hvis appen ikke starter korrekt, kan du prøve at rydde Expo-cachen:

```bash
npx expo start --clear
```

Kontrollér også, at:

- du står i mappen `min_app`
- `npm install` er kørt efter ændringer i projektet
- Expo Go og projektets Expo-version er kompatible

## Projektstruktur

```text
min_app/
├── App.js                 # Appens navigation og hovedlayout
├── components/            # Genanvendelige React Native-komponenter
├── database/              # Firebase-konfiguration og databasefunktioner
├── screens/               # Appens skærmbilleder
├── styles/                # Fælles styles
├── app.json               # Expo-konfiguration
├── index.js               # Appens entry point
└── package.json           # Scripts og afhængigheder
```

De vigtigste skærme er:

- **Find grupper:** Viser opslag fra Firebase og kan filtrere efter service
  og område.
- **Opret opslag:** Opretter et nyt serviceopslag for en virksomhed.
- **Gruppedetaljer:** Viser oplysninger om et opslag og giver mulighed for
  tilmelding, framelding og sletning.
- **Mine grupper:** Viser den lokale brugers aktive tilmeldinger.
- **Profil:** Indeholder profiloversigt samt foreløbige sider til
  profiloplysninger, egne opslag og historik.

## Teknologier

- React Native
- Expo
- React Navigation
- Firebase Realtime Database
- AsyncStorage til et midlertidigt lokalt bruger-ID
- JavaScript

## Nuværende begrænsninger

- Firebase Authentication er endnu ikke implementeret. Appen bruger derfor et
  lokalt bruger-ID, som gemmes med AsyncStorage.
- Profiloplysninger, virksomhedens egne opslag og historik er foreløbigt
  placeholdersider uden funktionalitet.
- Firebase-databasen er stadig under udvikling. Der bør opsættes
  Firebase Security Rules og brugerlogin, før appen bruges med rigtige
  brugere eller data.
