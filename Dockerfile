# builder image
FROM node:16.14.0 as builder

COPY ["package.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

RUN npm install

RUN npm run build

# final image
FROM nginx:1.19.2-alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /usr/share/nginx/www/_ah && \
  echo "healthy" > /usr/share/nginx/www/_ah/health

COPY --from=builder ["/usr/src/build", "/usr/share/nginx/www/"]

RUN chmod -R a+r /usr/share/nginx/www

EXPOSE 8080