FROM node:12.16.0-alpine3.10

# USER node
# RUN mkdir /home/node/app
WORKDIR /src

ARG ENV=production

ENV NODE_ENV $ENV

COPY package* ./ 
# examples don't use package-lock.json to minimize updates 
RUN npm install --no-package-lock
COPY . .

EXPOSE 5000

CMD npm run $NODE_ENV
 