# Versión de node a utilizar
FROM node:alpine
# Nombre del directorio dentro del contenedor
WORKDIR /app
# Copiar solo los archivos relacionados con el paquete antes de instalar dependencias
COPY package*.json ./
# Solo instala las dependencias
RUN npm install
# Copia todos los archivos del proyecto en el directorio de trabajo
COPY . .
# Crea una versión de producción con solo las dependencias necesarias
RUN npm run build
# Expone el puerto al que se conectará el contenedor
EXPOSE 3000
# Comando principal a ejecutar
CMD ["npm", "start"]
