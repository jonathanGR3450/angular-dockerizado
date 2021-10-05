FROM node:14.17.4-alpine AS node

WORKDIR /app

COPY ./app/package*.json /app/

COPY ./app /app

RUN npm install

EXPOSE 4200

CMD ["npm", "start"]