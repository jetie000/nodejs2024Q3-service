FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY src/common/prisma ./src/common/prisma

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
