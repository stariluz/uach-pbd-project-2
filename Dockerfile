FROM node:20
WORKDIR /usr/src/app
COPY . .
EXPOSE 8888
CMD ["node", "app.js"]
