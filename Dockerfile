FROM node:14.17.4-alpine

WORKDIR /app

RUN apt-get update && apt-get install -y \
    git \
    angular-cli 