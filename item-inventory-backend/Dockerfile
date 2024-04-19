FROM node:latest

WORKDIR /item-inventory-backend

COPY . /item-inventory-backend/

RUN yarn install

EXPOSE 8081

CMD ["npm", "start"]