FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:18 AS runner

WORKDIR /app

COPY --from=builder /app .

EXPOSE 4000

CMD ["node","index.js"]