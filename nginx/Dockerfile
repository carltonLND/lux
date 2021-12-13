FROM nginx:stable-alpine
RUN rm /usr/share/nginx/html/*
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]