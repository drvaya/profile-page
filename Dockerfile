FROM node:14.20.0-alpine

RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app
COPY --chown=node:node . .

USER node

RUN yarn install
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
