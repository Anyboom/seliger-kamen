FROM node:22-alpine AS build-stage

WORKDIR /usr/src/app
COPY ./directus/extensions /usr/src/app/

WORKDIR /usr/src/app/directus-extensions-resolve-route
RUN npm install && npm run build

FROM directus/directus:11.17.4 AS production-stage

USER root

RUN apk add --no-cache curl

USER node

COPY --from=build-stage /usr/src/app/directus-extensions-resolve-route ./extensions/directus-extensions-resolve-route
