FROM node:12-alpine 

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .

USER node

RUN yarn install && yarn build

EXPOSE 3001

CMD [ "node", "dist/server.js"]
