FROM node:10.12

WORKDIR /app
COPY . /app
RUN npm install
CMD npm start
