FROM node:20-alpine

WORKDIR /app

COPY ["package*.json", "./"]

RUN npm install -g nodemon@3.0.3
RUN npm install

EXPOSE 8000

CMD ["nodemon", "app.js"]
