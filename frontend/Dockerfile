FROM node:lts-alpine AS build
WORKDIR /app
# ENV PATH="./node_modules/.bin:$PATH"
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
RUN rm /usr/share/nginx/html/*
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD  ["nginx", "-g", "daemon off;"]