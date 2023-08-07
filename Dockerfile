FROM node:18.17-alpine3.18 as dev

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./



# Install app dependencies

RUN npm install -g npm@9.8.1
RUN npm install


VOLUME [ "/usr/src/app" ]

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host", "docker-react" ]



