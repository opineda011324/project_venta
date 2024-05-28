# Usar una imagen base de Node.js
FROM node:21-alpine3.19

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración de npm
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Instalar nodemon
RUN npm install --save-dev nodemon

# Exponer el puerto de desarrollo
EXPOSE 3001

# Comando por defecto para iniciar la aplicación en modo desarrollo
CMD ["npx", "nodemon", "-L", "--config", "nodemon.json"]
