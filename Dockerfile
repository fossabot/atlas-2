FROM node:latest AS builder


WORKDIR /atlas

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY src src
COPY static static
COPY webpack.config.js .
COPY babel.config.js .
COPY tsconfig.json .

RUN yarn build

FROM nginx
COPY --from=builder /atlas/dist /usr/share/nginx/html

