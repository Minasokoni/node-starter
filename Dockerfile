FROM node

# app dir
WORKDIR /usr/src/app

# copy and run files
COPY package*.json ./
RUN npm install yarn -g
RUN yarn install
RUN yarn global add pm2
RUN yarn run build
COPY . .
CMD pm2 start dist/index.js
