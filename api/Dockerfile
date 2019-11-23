FROM node:carbon

WORKDIR /app
COPY root/app/package*.json ./
RUN npm install

COPY root /

CMD ["node", "server.js"]
