FROM node:20.10.0 AS build

WORKDIR /usr/src/server

COPY package*.json tsconfig.json ./

RUN rm -rf node_modules && yarn install

COPY . .

RUN yarn build

FROM node:20.10.0-alpine

WORKDIR /usr/src/server

COPY --from=build /usr/src/server/dist ./dist
# We are copying the package.json and package-lock.json files from the build stage to the current stage again to install only the production dependencies and ultimately reducing final image's size ⚡.
COPY --from=build /usr/src/server/package*.json ./

RUN yarn install --production=true

EXPOSE 8000

CMD [ "node", "dist/index.js" ]