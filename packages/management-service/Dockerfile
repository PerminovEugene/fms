FROM node:15.14.0-alpine3.13
WORKDIR /usr/src/app

RUN npm i

# COPY . . 

# steps for prod
# RUN npm install --only=prod
# RUN npm i
# RUN npm run build

CMD [ "npm", "run", "start:dev"]
