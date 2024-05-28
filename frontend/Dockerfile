# Usa una imagen base de Node.js
FROM node:21-alpine3.19

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de npm
COPY package.json .
COPY package-lock.json .

# Instala las dependencias
RUN npm ci

# Copia el resto del código fuente
COPY . .

# Expone el puerto de desarrollo
EXPOSE 3000

# Comando por defecto para iniciar la aplicación en modo desarrollo
CMD ["npm", "start"]
