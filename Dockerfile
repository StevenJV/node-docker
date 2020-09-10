from node:12 
WORKDIR \temp\dockerwork
COPY package*.json ./
RUN npm install
copy . .
expose 8080
cmd ["node","server.js"]
