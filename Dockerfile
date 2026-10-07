# ---- build ----
FROM node:24-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# CRA inlines REACT_APP_* at build time. CapRover passes app env vars as build args.
ARG BREVO_API_KEY=${BREVO_API_KEY}
ENV BREVO_API_KEY=${BREVO_API_KEY}
ARG BREVO_API_NAME=${BREVO_API_NAME}
ENV BREVO_API_NAME=${BREVO_API_NAME}
ARG BREVO_API_SMS=${BREVO_API_SMS}
ENV BREVO_API_SMS=${BREVO_API_SMS}

RUN npm run build

# ---- serve ----
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
