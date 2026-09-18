# Min app

En React Native-app bygget med Expo. Appen gør det muligt at finde grupper, se sine egne grupper og administrere sin profil.

## Links

- **YouTube-video:** [Indsæt link til YouTube-video her](https://www.youtube.com/)
- **GitHub repository:** https://github.com/Mikkel-CBS/Innovation-og-ny-teknologi.git 

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

Start Expo development serveren med tunnel-forbindelse:

```bash
npx expo start --tunnel
```

Når serveren er startet, vises en QR-kode. Scan QR-koden med kameraet på din telefon, så åbner Expo Go appen automatisk med dette projekt.

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
├── data/                  # Lokal data, blandt andet gruppedata
├── screens/               # Appens skærmbilleder
├── styles/                # Fælles styles
├── assets/                # Billeder og andre assets
├── app.json               # Expo-konfiguration
├── index.js               # Appens entry point
└── package.json           # Scripts og afhængigheder
```

## Teknologier

- React Native
- Expo
- React Navigation
- JavaScript
