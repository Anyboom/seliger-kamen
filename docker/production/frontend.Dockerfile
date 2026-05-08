FROM node:22-alpine AS build-stage

WORKDIR /usr/src/app

COPY ./frontend/package*.json ./
RUN npm ci

COPY ./frontend/ ./

RUN npm run build

FROM node:22-alpine AS production-stage

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app/.output /usr/src/app

EXPOSE 8080

CMD ["node", "./server/index.mjs"]
