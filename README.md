# TaskMaster - Application de Gestion de Tâches Avancée

TaskMaster est une application web moderne de gestion de tâches construite avec React, Chakra UI et Firebase. Elle offre une expérience utilisateur fluide avec des fonctionnalités avancées comme l'authentification, le mode sombre, et une interface glisser-déposer.

## 🚀 Fonctionnalités

- 🔐 Authentification sécurisée (email/mot de passe et Google)
- 🌓 Mode clair/sombre
- 📱 Design responsive
- 📝 Gestion complète des tâches (CRUD)
- 🏷️ Catégorisation et étiquettes
- 🔍 Recherche et filtres avancés
- 🎨 Interface utilisateur moderne et intuitive

## 🛠️ Technologies utilisées

- ⚛️ React 18
- 🎨 Chakra UI (avec thème personnalisé)
- 🔥 Firebase (Authentification et Firestore)
- 🛣️ React Router v6
- 🎭 Framer Motion (animations)
- 📦 Plusieurs autres bibliothèques utiles

## 🚀 Installation

1. **Cloner le dépôt**
   ```bash
   git clone [URL_DU_REPO]
   cd portfolio-windsurf
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Configurer Firebase**
   - Créez un projet sur [Firebase Console](https://console.firebase.google.com/)
   - Activez l'authentification par email/mot de passe et Google
   - Créez une base de données Firestore
   - Copiez la configuration Firebase dans `src/services/firebase.js`

4. **Démarrer l'application en mode développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur**

## 📁 Structure du projet

```
src/
├── components/       # Composants réutilisables
│   ├── auth/        # Composants d'authentification
│   ├── tasks/       # Composants liés aux tâches
│   ├── ui/          # Composants UI génériques
│   └── layout/      # Composants de mise en page
├── context/         # Contextes React
├── hooks/           # Hooks personnalisés
├── pages/           # Composants de page
├── services/        # Services (Firebase, API, etc.)
├── styles/          # Fichiers de style globaux
└── utils/           # Utilitaires et helpers
```

## 🔧 Configuration

Créez un fichier `.env` à la racine du projet avec les variables d'environnement nécessaires :

```env
VITE_FIREBASE_API_KEY=votre_api_key
VITE_FIREBASE_AUTH_DOMAIN=votre-projet.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=votre-projet-id
VITE_FIREBASE_STORAGE_BUCKET=votre-projet.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=votre-messaging-sender-id
VITE_FIREBASE_APP_ID=votre-app-id
```

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- [Chakra UI](https://chakra-ui.com/) pour les composants UI
- [Firebase](https://firebase.google.com/) pour l'authentification et la base de données
- [React Icons](https://react-icons.github.io/react-icons/) pour les icônes
