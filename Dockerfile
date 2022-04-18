FROM node:16-alpine AS builder
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install
COPY . .
RUN yarn build

FROM nginx:mainline-alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY server.conf /etc/nginx/conf.d/
