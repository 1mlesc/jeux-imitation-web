# Utilise Node.js 22.9.0 (avec npm 11.2.0 inclus)
FROM node:22.9.0-alpine

# Définis le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de configuration et d'environnement
COPY package*.json ./
COPY .env.example ./

# Installe les dépendances
RUN npm install

# Copie le reste du projet
COPY . .

# Construit l'application pour la production
RUN npm run build

# Installe un serveur web pour servir les fichiers statiques (ex: serve)
RUN npm install -g serve

# Expose le port utilisé par Vite (5173 en dev, 3000 en prod avec serve)
EXPOSE 3000

# Lance le serveur en production
CMD ["serve", "-s", "dist", "-l", "3000"]
