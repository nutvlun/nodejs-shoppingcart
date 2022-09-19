FROM node:18-alpine as base

WORKDIR /usr/app
COPY package*.json /
EXPOSE 3000

RUN npm install -g nodemon && npm install
COPY . /
CMD ["nodemon", "bin/www"]