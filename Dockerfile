FROM node:latest


WORKDIR /atlas
COPY . .
EXPOSE 5000
RUN yarn install
RUN yarn build

CMD ["yarn", "serve"]
