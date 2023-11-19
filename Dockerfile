FROM node:18-alpine

EXPOSE 4200

WORKDIR /src

COPY package.json .

RUN yarn install

COPY . .

CMD [ "yarn","dev","--debug"]