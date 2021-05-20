FROM node:12.16.0-alpine3.10

# USER node
# RUN mkdir /home/node/app
WORKDIR /src

ARG ENV=production

ENV NODE_ENV $ENV \
    INTERNAL_SERVICE_ADDRESS "http://localhost:5000/" \
    test "1"

# CMD npm run $NODE_ENV

COPY package* ./
# examples don't use package-lock.json to minimize updates 
RUN npm install --no-package-lock
COPY . .

EXPOSE 3001 3002 5000

#default to the servers. 
# for the internal-server we will run ["node", "internal_server.js"] with port 5000
CMD ["node", "index.js"] 
