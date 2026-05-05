FROM node:22-alpine AS build-stage

WORKDIR /usr/src/app
COPY ./directus/extensions /usr/src/app/

WORKDIR /usr/src/app/directus-extensions-resolve-route
RUN npm install && npm run build

FROM directus/directus:11.10.0 AS production-stage

COPY --from=build-stage /usr/src/app/directus-extensions-resolve-route ./extensions/directus-extensions-resolve-route
