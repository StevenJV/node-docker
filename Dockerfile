FROM node:12 
WORKDIR \temp\dockerwork
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node","server.js"]
