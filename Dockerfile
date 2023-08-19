# build env
FROM node:18.17.1-alpine as build
WORKDIR /app
COPY . ./
RUN npm install -g npm@9.8.1
RUN npm i --force
RUN npm run build
CMD cp -r build result_build
