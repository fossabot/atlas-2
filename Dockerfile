FROM node:latest


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

EXPOSE 5000
CMD ["yarn", "serve"]
