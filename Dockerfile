from node:18.15-bullseye

WORKDIR /worklogs-report

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]
