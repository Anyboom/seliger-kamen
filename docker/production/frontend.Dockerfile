FROM node:22-alpine AS build-stage

WORKDIR /usr/src/app

COPY ./frontend/package*.json ./
RUN npm i

COPY ./frontend/ ./

RUN npm run build

FROM node:22-alpine AS production-stage

WORKDIR /usr/src/app

RUN apk add --no-cache curl

COPY --from=build-stage /usr/src/app/.output /usr/src/app

EXPOSE 3000

CMD ["node", "./server/index.mjs"]
