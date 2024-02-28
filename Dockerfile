FROM node:18.17.1-alpine as builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/pages

# Copiar el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de la aplicación al directorio de trabajo
COPY . .

# Compilar la aplicación (esto puede variar según tu proyecto)
RUN npm run build

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]