FROM node:20.10.0 AS build

WORKDIR /usr/src/server

COPY package*.json tsconfig.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:20.10.0-alpine

WORKDIR /usr/src/server

COPY --from=build /usr/src/server/dist ./dist
COPY --from=build /usr/src/server/package*.json ./

RUN yarn install --production=true

EXPOSE 8000

CMD [ "node", "dist/index.js" ]