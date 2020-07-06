FROM node:current-alpine

WORKDIR /client/dist

COPY package*.json ./

RUN npm install

COPY . /client/dist

RUN ["npm", "run", "build"]

EXPOSE 3003

CMD ["npm", "start"]