FROM node:16

# defind working directory of docker container
# RUN, CMD, ADD, COPY, ENTRYPOINT commands executed on this working directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]

