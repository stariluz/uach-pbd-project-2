FROM node:22
WORKDIR /usr/src/app
COPY . .
EXPOSE 8888
CMD node app.js
