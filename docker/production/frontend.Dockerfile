FROM node:22-alpine AS build-stage

WORKDIR /usr/src/app

COPY ./frontend/package*.json ./
COPY ./frontend/package-lock.json* ./

RUN npm ci

COPY ./frontend/ ./

RUN npm run build

FROM nginx:stable-alpine AS production-stage
WORKDIR /usr/src/app

COPY ./docker/production/configs/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/src/app/dist /usr/src/app
