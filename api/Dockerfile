FROM node:18-alpine

WORKDIR /app

COPY . .

RUN yarn global add pnpm

RUN pnpm i

EXPOSE 4000

CMD [ "pnpm", "start" ]