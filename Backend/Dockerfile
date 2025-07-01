FROM node:18 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:18 as runner

WORKDIR /app

COPY --from=builder /app .

EXPOSE 4000

CMD ["node","index.js"]