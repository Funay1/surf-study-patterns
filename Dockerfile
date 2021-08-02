# Set the base image.
FROM node:14.16.0-alpine3.10

COPY package.json /home/node/
WORKDIR /home/node/
RUN npm install
ENV PATH /home/node/node_modules/.bin:$PATH

COPY . /home/node/app/
WORKDIR /home/node/app/