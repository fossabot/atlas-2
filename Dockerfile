FROM node:13 AS builder


WORKDIR /atlas

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn build

FROM nginx:1.17-alpine
COPY --from=builder /atlas/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
