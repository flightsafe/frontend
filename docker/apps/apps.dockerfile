FROM node:16-alpine as builder

ENV NODE_OPTIONS="--max_old_space_size=4096"
ARG APP_NAME
ARG API_URL

ENV NEXT_PUBLIC_API_URL=$API_URL

RUN apk add --no-cache python3 py3-pip git
RUN apk update && apk add make g++ && rm -rf /var/cache/apk/*
RUN apk add --no-cache curl \
    && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /app/
COPY .. .
RUN pnpm install
RUN pnpm build --filter=$APP_NAME

CMD [ "pnpm", "start" ]