FROM node:10.15.2-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
EXPOSE 9001
RUN npm install
RUN npm seed
CMD [ "npm", "start" ]

