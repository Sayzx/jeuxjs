# Utilisez l'image officielle Nginx comme image de base
FROM nginx:alpine

# Copiez les fichiers statiques de votre jeu dans le dossier de travail de Nginx
COPY . /usr/share/nginx/html

# Exposez le port 80 pour permettre l'accès au conteneur depuis l'extérieur
EXPOSE 80

# Utilisez la commande par défaut de Nginx pour démarrer le serveur
CMD ["nginx", "-g", "daemon off;"]
