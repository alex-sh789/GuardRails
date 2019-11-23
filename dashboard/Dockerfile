FROM node:carbon

WORKDIR /home/dashboard
RUN npm install -g serve

COPY root/home/dashboard/package*.json ./
RUN npm install

COPY root /

RUN npm run build



CMD ["serve", "-s", "build", "-p", "8080"]
