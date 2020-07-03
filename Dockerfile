FROM node:latest

WORKDIR /client/dist

COPY package*.json ./

RUN npm install

COPY . /client/dist

RUN ["npm", "run", "build"]

EXPOSE 8080

CMD ["npm", "start"]